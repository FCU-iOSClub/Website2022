#!/usr/bin/env node
import { readFile, writeFile, rename } from "node:fs/promises";
import { dirname, join } from "node:path";
import { randomUUID } from "node:crypto";

const TIMEOUT_MS = 10_000;
const MAX_NAMES = 10;
const MAX_CONTENT = 2000;
const ALLOWED_REASONS = new Set(["permission", "invalid"]);

function usage() {
  throw new Error("Usage: node scripts/notify-gallery-links.mjs --report <path> --state <path> --workflow-url <url>");
}

function parseArgs(argv) {
  const result = {};
  for (let i = 2; i < argv.length; i += 2) {
    const flag = argv[i];
    const value = argv[i + 1];
    if (!flag?.startsWith("--") || !value || result[flag.slice(2)]) usage();
    result[flag.slice(2)] = value;
  }
  if (!result.report || !result.state || !result["workflow-url"] || Object.keys(result).length !== 3) usage();
  return result;
}

function validReport(report) {
  if (!report || typeof report !== "object" || !Number.isInteger(report.checked) ||
    !Number.isInteger(report.passed) || !Number.isInteger(report.failed) || !Array.isArray(report.failures) ||
    report.checked < 0 || report.passed < 0 || report.failed < 0 || report.checked !== report.passed + report.failed ||
    report.failures.length !== report.failed) throw new Error("Malformed report");
  return true;
}

function filteredFailures(report) {
  validReport(report);
  const candidates = report.failures.map((failure) => {
    if (!failure || typeof failure !== "object" ||
      ["key", "name", "date", "filename", "url", "status", "reason"].some((field) => typeof failure[field] !== "string")) {
      throw new Error("Malformed report");
    }
    return failure;
  }).filter((failure) => ALLOWED_REASONS.has(failure.reason));
  const byKey = new Map();
  for (const failure of candidates) {
    if (!failure.key) throw new Error("Malformed report");
    if (!byKey.has(failure.key)) byKey.set(failure.key, { key: failure.key, name: failure.name || failure.key, reason: failure.reason });
  }
  return [...byKey.values()];
}

function validState(state) {
  return state && typeof state === "object" && (state.status === "healthy" || state.status === "failing") &&
    Array.isArray(state.failureKeys) && state.failureKeys.every((key) => typeof key === "string") &&
    Number.isInteger(state.permissionCount) && Number.isInteger(state.invalidCount);
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function saveState(path, state) {
  const temporary = join(dirname(path), `.${stateFileName(path)}.${randomUUID()}.tmp`);
  await writeFile(temporary, `${JSON.stringify(state)}\n`, { mode: 0o600 });
  await rename(temporary, path);
}
function stateFileName(path) { return path.split("/").pop() || "state"; }

function makePayload({ transition, failures, previous, workflowUrl }) {
  const names = failures.slice(0, MAX_NAMES).map(({ name }) => name);
  const omitted = failures.length - names.length;
  let content;
  if (transition === "recovery") {
    content = `Gallery link checks recovered. Previous failures: ${previous.permissionCount} permission, ${previous.invalidCount} invalid.`;
  } else {
    content = `${transition === "initial" ? "Gallery link checks failing" : "Gallery link failures changed"}: ${failures.length} affected.`;
    if (names.length) content += ` Affected galleries: ${names.join(", ")}${omitted ? ` (and ${omitted} more)` : ""}.`;
  }
  content += ` Workflow: ${String(workflowUrl).slice(0, 500)}`;
  return { content: content.length <= MAX_CONTENT ? content : `${content.slice(0, MAX_CONTENT - 1)}…` };
}

async function send(payload, webhook, fetchImpl = globalThis.fetch) {
  if (typeof fetchImpl !== "function") throw new Error("Fetch unavailable");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetchImpl(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: controller.signal });
    if (!response || !response.ok) throw new Error("Discord request failed");
  } catch (error) {
    if (error?.name === "AbortError") throw new Error("Discord request timed out");
    throw error instanceof Error && error.message === "Discord request failed" ? error : new Error("Discord request failed");
  } finally { clearTimeout(timer); }
}

export async function processNotification({ report, statePath, workflowUrl, webhook = process.env.DISCORD_GALLERY_WEBHOOK_URL, fetchImpl = globalThis.fetch }) {
  const failures = filteredFailures(report);
  const keys = [...new Set(failures.map(({ key }) => key))].sort();
  let previous = null;
  try { previous = await readJson(statePath); if (!validState(previous)) previous = null; } catch { /* corrupt/missing means no previous state */ }
  const status = keys.length ? "failing" : "healthy";
  const changed = !previous || previous.status !== status || (status === "failing" && JSON.stringify(previous.failureKeys) !== JSON.stringify(keys));
  const transition = status === "healthy" ? (previous?.status === "failing" ? "recovery" : null) : (changed ? (previous ? "changed" : "initial") : null);
  if (transition) { if (!webhook) throw new Error("Missing Discord webhook"); await send(makePayload({ transition, failures, previous: previous ?? { permissionCount: 0, invalidCount: 0 }, workflowUrl }), webhook, fetchImpl); }
  const next = { status, failureKeys: keys, permissionCount: failures.filter((f) => f.reason === "permission").length, invalidCount: failures.filter((f) => f.reason === "invalid").length };
  await saveState(statePath, next);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try { const args = parseArgs(process.argv); await processNotification({ report: await readJson(args.report), statePath: args.state, workflowUrl: args["workflow-url"] }); process.exitCode = 0; }
  catch (error) { process.stderr.write(`${error.message}\n`); process.exitCode = 1; }
}
