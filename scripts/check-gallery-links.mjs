#!/usr/bin/env node

import { readdir, readFile, rename, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_DIRECTORY = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "data",
  "gallery",
);
const TIMEOUT_MS = 10_000;

export function extractGoogleDriveFolderId(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    if (!["drive.google.com", "www.drive.google.com"].includes(url.hostname))
      return null;
    const match = url.pathname.match(/^\/drive\/folders\/([^/]+)\/?$/);
    return match?.[1] || null;
  } catch {
    return null;
  }
}

export function classifyGoogleDriveResponse(response, html = "") {
  const finalUrl = response?.url || "";
  const lowerUrl = finalUrl.toLowerCase();
  const lowerHtml = String(html).toLowerCase();
  const permissionMarkers = [
    "request access",
    "you need access",
    "ask for access",
    "sign in to continue",
    "permission denied",
    "access denied",
    "drive.google.com/drive/u/0/my-drive",
  ];

  const finalUrlObject = (() => {
    try {
      return new URL(finalUrl);
    } catch {
      return null;
    }
  })();
  const isDriveLoginEndpoint =
    finalUrlObject &&
    ["drive.google.com", "www.drive.google.com"].includes(
      finalUrlObject.hostname,
    ) &&
    /\/(?:servicelogin|signin|login)(?:[/?#]|$)/i.test(
      finalUrlObject.pathname + finalUrlObject.search,
    );

  if (lowerUrl.includes("accounts.google.com") || isDriveLoginEndpoint) {
    return {
      status: "permission",
      reason: "Google redirected to a sign-in page",
    };
  }
  if (
    permissionMarkers.some(
      (marker) => lowerUrl.includes(marker) || lowerHtml.includes(marker),
    )
  ) {
    return {
      status: "permission",
      reason: "Google Drive reports that access is restricted",
    };
  }

  if (response && response.ok === false) {
    return {
      status: "unknown",
      reason: `Google Drive returned HTTP ${response.status}`,
    };
  }

  const drivePage = lowerUrl.includes("drive.google.com/drive/folders/");
  const contentMarkers = [
    "drive-viewer-content",
    "drive-viewer-list",
    "drive.google.com/drive/folders/",
    "application/vnd.google-apps.folder",
    'data-id="folder',
    "folderview",
  ];
  const hasFolderContent = contentMarkers.some((marker) =>
    lowerHtml.includes(marker),
  );
  if (drivePage && hasFolderContent) return { status: "accessible" };
  return {
    status: "unknown",
    reason:
      "The response did not contain recognizable Google Drive folder content",
  };
}

function invalidResult(url, reason) {
  return {
    status: "invalid",
    url,
    finalUrl: url,
    reason: `Invalid Google Drive URL: ${reason}`,
  };
}

function isRetryableNetworkError(error) {
  if (!error) return false;
  if (error.name === "TimeoutError" || error.name === "AbortError") return true;
  if (error.name !== "TypeError")
    return [
      "ECONNRESET",
      "ECONNREFUSED",
      "ENOTFOUND",
      "EAI_AGAIN",
      "ETIMEDOUT",
    ].includes(error.code);
  const message =
    `${error.message || ""} ${error.cause?.message || ""}`.toLowerCase();
  return /fetch failed|network|socket|econnreset|econnrefused|enotfound|eai_again|etimedout|timed out|dns/.test(
    message,
  );
}

export async function checkGoogleDriveFolder(url, options = {}) {
  const originalUrl = String(url);
  let parsed;
  try {
    parsed = new URL(originalUrl);
  } catch {
    return invalidResult(originalUrl, "URL could not be parsed");
  }
  if (parsed.protocol !== "https:")
    return invalidResult(originalUrl, "protocol must be HTTPS");
  if (!["drive.google.com", "www.drive.google.com"].includes(parsed.hostname)) {
    return invalidResult(originalUrl, "host must be drive.google.com");
  }
  if (!extractGoogleDriveFolderId(originalUrl)) {
    return invalidResult(
      originalUrl,
      "path must match /drive/folders/<folder-id>",
    );
  }

  const fetcher = options.fetch ?? fetch;
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetcher(originalUrl, {
        redirect: "follow",
        signal: AbortSignal.timeout(options.timeout ?? TIMEOUT_MS),
      });
      let html;
      try {
        html = await response.text();
      } catch (error) {
        lastError = error;
        if (isRetryableNetworkError(error) && attempt === 0) continue;
        return {
          status: "network",
          url: originalUrl,
          finalUrl: response.url || originalUrl,
          reason: "Failed to read Google Drive response body",
          error: error?.message,
        };
      }
      const classification = classifyGoogleDriveResponse(response, html);
      return {
        ...classification,
        url: originalUrl,
        finalUrl: response.url || originalUrl,
      };
    } catch (error) {
      lastError = error;
      const retryable = isRetryableNetworkError(error);
      if (!retryable || attempt === 1) break;
    }
  }
  const timedOut =
    lastError?.name === "TimeoutError" || lastError?.name === "AbortError";
  return {
    status: "network",
    url: originalUrl,
    finalUrl: originalUrl,
    reason: timedOut
      ? "Request timed out after two attempts"
      : "Network request failed after two attempts",
    error: lastError?.message,
  };
}

export async function loadGalleryLinks(directory = DEFAULT_DIRECTORY) {
  const entries = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .sort((a, b) => a.name.localeCompare(b.name));
  const records = [];
  for (const entry of entries) {
    const filename = entry.name;
    try {
      const record = JSON.parse(
        await readFile(join(directory, filename), "utf8"),
      );
      if (
        record.gdrive_url === undefined ||
        record.gdrive_url === null ||
        typeof record.gdrive_url === "string"
      ) {
        if (typeof record.gdrive_url === "string" && record.gdrive_url.trim()) {
          records.push({
            url: record.gdrive_url.trim(),
            name: record.name || filename,
            date: record.date || "",
            filename,
          });
        }
      } else {
        records.push({
          invalidRecord: true,
          filename,
          error: "Invalid gallery JSON: gdrive_url must be a string or null",
        });
      }
    } catch (error) {
      records.push({
        invalidRecord: true,
        filename,
        error: `Invalid gallery JSON: ${error.message}`,
      });
    }
  }
  return records;
}

function usage() {
  return "Usage: yarn node scripts/check-gallery-links.mjs [--url <Google Drive folder URL>] [--report <path>]";
}

function reportKey(item) {
  return createHash("sha256").update(`${item.filename || "--url"}\0${item.url}`).digest("hex");
}

function reportFailure(item, result) {
  return { key: reportKey(item), name: item.name || item.filename || "Provided URL", date: item.date || "", filename: item.filename || "--url", url: item.url || "", status: result.status, ...(result.reason ? { reason: result.reason } : {}) };
}

async function writeReport(reportPath, items, results) {
  const failures = results.map((result, index) => ({ result, item: items[index] })).filter(({ result }) => result.status !== "accessible").map(({ item, result }) => reportFailure(item, result)).sort((a, b) => a.key.localeCompare(b.key));
  const report = { checked: results.length, passed: results.length - failures.length, failed: failures.length, failures };
  const destination = resolve(reportPath);
  const temporary = `${destination}.tmp-${process.pid}-${Date.now()}`;
  await writeFile(temporary, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await rename(temporary, destination);
}

function label(result) {
  if (result.status === "accessible") return "✅ Accessible";
  if (result.status === "permission") return "❌ Permission denied";
  if (result.status === "invalid") return "❌ Invalid Google Drive URL";
  if (result.status === "network")
    return result.reason?.toLowerCase().includes("timed out")
      ? "❌ Timeout"
      : "❌ Network error";
  return "⚠️ Unable to determine accessibility";
}

export async function main(argv = process.argv.slice(2)) {
  if (argv.includes("--help") || argv.includes("-h")) {
    console.log(
      `${usage()}\n\nChecks Google Drive gallery folders anonymously.`,
    );
    return 0;
  }
  const urlIndex = argv.indexOf("--url");
  const reportIndex = argv.indexOf("--report");
  if (reportIndex !== -1 && !argv[reportIndex + 1]) { console.error("--report requires a path"); return 1; }
  const reportPath = reportIndex === -1 ? null : argv[reportIndex + 1];
  let items;
  if (urlIndex !== -1) {
    if (!argv[urlIndex + 1]) {
      console.error("--url requires a URL");
      return 1;
    }
    items = [{ url: argv[urlIndex + 1], name: "Provided URL", date: "" }];
  } else {
    items = await loadGalleryLinks();
  }

  console.log("Google Drive Gallery Accessibility Check");
  const results = [];
  for (const item of items) {
    if (item.invalidRecord) {
      console.log(
        `${item.filename}: ❌ Invalid gallery record (${item.error})`,
      );
      results.push({ status: "invalid", reason: "Invalid gallery record" });
      continue;
    }
    const result = await checkGoogleDriveFolder(item.url);
    results.push(result);
    const suffix = result.reason ? ` — ${result.reason}` : "";
    console.log(
      `${item.name}${item.date ? ` (${item.date})` : ""}: ${label(result)}${suffix}`,
    );
    if (result.finalUrl && result.finalUrl !== result.url)
      console.log(`  Final URL: ${result.finalUrl}`);
  }
  const passed = results.filter(
    (result) => result.status === "accessible",
  ).length;
  const failed = results.length - passed;
  console.log(`Checked: ${results.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  if (reportPath) await writeReport(reportPath, items, results);
  return failed ? 1 : 0;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
    .then((code) => {
      process.exitCode = code;
    })
    .catch((error) => {
      console.error(`Gallery link checker failed: ${error.message}`);
      process.exitCode = 1;
    });
}
