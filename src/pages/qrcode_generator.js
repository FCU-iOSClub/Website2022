import * as React from "react";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import SliderButton from "../components/buttons/slider_button";
import { Icon } from "@iconify/react";

const logo = "https://i.meee.com.tw/0SiZRVA.jpg";
const TYPE_OPTIONS = ["回饋表單", "課程報名", "活動報名", "其他"];
const TYPE_COLORS = {
  回饋表單: "#6D9DF8",
  課程報名: "#445484",
  活動報名: "#E58E8E",
};

const QRCodeGeneratorPage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [typeChoice, setTypeChoice] = useState("");
  const [customType, setCustomType] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [composedUrl, setComposedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => {
      if (qrCodeUrl && qrCodeUrl.startsWith("blob:")) {
        URL.revokeObjectURL(qrCodeUrl);
      }
      if (composedUrl && composedUrl.startsWith("blob:")) {
        URL.revokeObjectURL(composedUrl);
      }
    };
  }, [qrCodeUrl, composedUrl]);

  // 組出海報要畫的每一行，沒填的行直接略過
  const getPosterLines = () => {
    const typeText = typeChoice === "其他" ? customType.trim() : typeChoice;
    return [
      { text: dateInput.trim(), size: 56, color: "#FFAF73" },
      { text: nameInput.trim(), size: 88, color: "#FFAF73" },
      { text: typeText, size: 64, color: TYPE_COLORS[typeChoice] || "#8098B5" },
    ].filter((line) => line.text);
  };

  const buildPoster = async (qrBlobUrl, lines) => {
    const img = new Image();
    img.src = qrBlobUrl;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const width = 1080;
    const height = 2340;
    const qrSize = 1000;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas 不支援");

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);

    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    // 每行太寬就縮小字級，左右各留 60px
    const maxTextWidth = width - 120;
    const lineGap = 32;
    const fitted = lines.map(({ text, size, color }) => {
      let fontSize = size;
      ctx.font = `bold ${fontSize}px 'Noto Serif TC', serif`;
      while (ctx.measureText(text).width > maxTextWidth && fontSize > 32) {
        fontSize -= 2;
        ctx.font = `bold ${fontSize}px 'Noto Serif TC', serif`;
      }
      return { text, fontSize, color };
    });

    // 整塊標題以原本單行標題的中心（y≈365）置中，最多三行也碰不到 QR（y=670）
    const blockHeight =
      fitted.reduce((sum, line) => sum + line.fontSize, 0) +
      lineGap * (fitted.length - 1);
    let y = 365 - blockHeight / 2;

    fitted.forEach(({ text, fontSize, color }) => {
      ctx.fillStyle = color;
      ctx.font = `bold ${fontSize}px 'Noto Serif TC', serif`;
      ctx.fillText(text, width / 2, y);
      y += fontSize + lineGap;
    });

    const qrX = (width - qrSize) / 2;
    const qrY = (height - qrSize) / 2;
    ctx.drawImage(img, qrX, qrY, qrSize, qrSize);

    ctx.fillStyle = "#6D9DF8";
    ctx.font = "40px 'Noto Serif TC', serif";
    ctx.fillText("FCU iOS Club", width / 2, 2000);

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error("toBlob failed"));
        resolve(URL.createObjectURL(blob));
      }, "image/png");
    });
  };

  const generateQRCode = async () => {
    if (!urlInput.trim()) {
      setError("請輸入網址！");
      return;
    }

    const posterLines = getPosterLines();

    setLoading(true);
    setError(null);
    setQrCodeUrl(null);
    setComposedUrl(null);

    const payload = {
      data: urlInput,
      config: {
        body: "circle",
        eye: "frame13",
        erf1: ["fh"],
        erf3: ["fh", "fv"],
        eyeBall: "ball15",
        gradientColor1: "#FFAF73",
        gradientColor2: "#6D9DF8",
        gradientOnEyes: true,
        bgColor: "#FFFFFF",
        logo: logo,
        logoMode: "clean",
      },
      size: 1500,
      download: false,
      file: "png",
    };

    console.log("Sending payload:", JSON.stringify(payload, null, 2));

    try {
      // 透過 functions/api/qrcode
      const apiUrl = "/api/qrcode";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`API 請求失敗 (${response.status})`);
      }

      const contentType = response.headers.get("content-type");
      console.log("Response Content-Type:", contentType);

      if (contentType && contentType.includes("image")) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setQrCodeUrl(url);
        if (posterLines.length > 0) {
          try {
            const posterUrl = await buildPoster(url, posterLines);
            setComposedUrl(posterUrl);
          } catch (composeError) {
            console.error("Poster generation error:", composeError);
          }
        }
      } else {
        const result = await response.json();
        console.log("API Response:", result);

        if (result.imageUrl) {
          const imageUrl = "https://api.qrcode-monkey.com" + result.imageUrl;
          console.log("Fetching image from:", imageUrl);

          // 透過 functions/api/qrcode
          const imgResponse = await fetch("/api/qrcode", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              imageUrl: result.imageUrl,
            }),
          });

          if (imgResponse.ok) {
            const blob = await imgResponse.blob();
            const url = URL.createObjectURL(blob);
            setQrCodeUrl(url);
            if (posterLines.length > 0) {
              try {
                const posterUrl = await buildPoster(url, posterLines);
                setComposedUrl(posterUrl);
              } catch (composeError) {
                console.error("Poster generation error:", composeError);
              }
            }
          } else {
            throw new Error(`圖片下載失敗 (${imgResponse.status})`);
          }
        } else {
          throw new Error("API 回應中沒有圖片 URL");
        }
      }
    } catch (e) {
      console.error("QR Code Generation Error:", e);

      if (e.message.includes("Failed to fetch")) {
        setError("無法連接到 QR Code 服務，請檢查網路連線或稍後再試");
      } else if (e.message.includes("NetworkError")) {
        setError("網路錯誤，請檢查您的網路連線");
      } else {
        setError(e.message || "發生未知錯誤，請稍後再試");
      }
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    const targetUrl = composedUrl || qrCodeUrl;
    if (!targetUrl) return;

    const link = document.createElement("a");
    link.href = targetUrl;
    link.download = "iOSClub_QRCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearUrlInput = () => {
    setUrlInput("");
    setQrCodeUrl(null);
    setComposedUrl(null);
    setError(null);
  };

  const clearTitleInput = () => {
    setDateInput("");
    setNameInput("");
    setTypeChoice("");
    setCustomType("");
    setQrCodeUrl(null);
    setComposedUrl(null);
    setError(null);
  };

  return (
    <div className="bg-iosbgblue">
      <AppHeader
        title="iOS Club - QR Code 生成器"
        description="使用 iOS Club 專屬樣式生成精美的 QR Code"
      />
      <Navbar />
      <div className="container mx-auto break-normal bg-white shadow-lg px-3 md:px-0 font-serif">
        <div className="h-20 md:h-32" />

        {/* 頁面標題 */}
        <div className="text-center py-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h1 className="text-5xl font-bold text-gray-800 text-balance">
              QR Code 生成器
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            使用 iOS Club 專屬樣式生成精美的 QR Code
          </p>
        </div>

        <div className="max-w-4xl mx-auto pb-16">
          {/* 特色說明 */}
          <div className="relative bg-white rounded-xl p-6 md:p-8 mb-8 border border-gray-300 shadow-lg">
            <span
              className="absolute left-0 top-0 bottom-0 w-1 bg-btnbg rounded-l-xl"
              aria-hidden="true"
            ></span>
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Icon icon="mdi:star" className="text-btnbg" />
              iOS Club 專屬樣式
            </h4>
            <div className="space-y-2 text-gray-800">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:palette" className="text-btnbg" />
                <span>
                  <strong>漸層配色：</strong>與 Logo 相同的漸層效果
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:shape" className="text-btnbg" />
                <span>
                  <strong>獨特圖樣：</strong>類似 Apple 官方樣式，具識別度
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:apple" className="text-btnbg" />
                <span>
                  <strong>社團 Logo：</strong>內嵌 iOS Club 官方標誌
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:cellphone-arrow-down" className="text-btnbg" />
                <span>
                  <strong>可自帶標題：</strong>
                  輸入標題自動生成手機螢幕比例之圖片
                </span>
              </div>
            </div>
          </div>

          {/* 輸入區塊 */}
          <div className="relative bg-white rounded-xl p-6 md:p-8 mb-8 border border-gray-300 shadow-lg">
            <span
              className="absolute left-0 top-0 bottom-0 w-1 bg-btnbg rounded-l-xl"
              aria-hidden="true"
            ></span>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon icon="mdi:link-variant" className="text-btnbg" />
              網址 QR Code 生成
            </h3>

            <div className="mb-6">
              <label>
                <span className="block text-sm font-semibold text-gray-700 mb-2">
                  網址
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") generateQRCode();
                    }}
                    placeholder="請輸入網址⋯⋯"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-full font-mono text-lg focus:border-btnbg focus:outline-none transition-colors"
                  />
                  <button
                    onClick={clearUrlInput}
                    className="px-4 py-3 text-gray-700 rounded-full hover:bg-btnbg hover:text-white transition-colors flex items-center justify-center"
                    title="清除網址輸入"
                  >
                    <Icon icon="mdi:close" className="text-xl" />
                  </button>
                </div>
              </label>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="block text-sm font-semibold text-gray-700">
                  標題（選填）
                </span>
                <button
                  type="button"
                  onClick={clearTitleInput}
                  className="px-3 py-1 text-sm text-gray-700 rounded-full hover:bg-btnbg hover:text-white transition-colors flex items-center gap-1"
                  title="清除標題輸入"
                >
                  <Icon icon="mdi:close" />
                  清除
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2 mb-4">
                <input
                  type="text"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  placeholder="日期"
                  className="px-4 py-3 border-2 border-gray-300 rounded-full font-mono text-lg focus:border-btnbg focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") generateQRCode();
                  }}
                  placeholder="名稱"
                  className="px-4 py-3 border-2 border-gray-300 rounded-full font-mono text-lg focus:border-btnbg focus:outline-none transition-colors"
                />
              </div>

              <span className="block text-sm font-semibold text-gray-700 mb-2">
                類型（選填）
              </span>
              <div className="flex flex-wrap gap-2">
                {TYPE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={typeChoice === option}
                    onClick={() =>
                      setTypeChoice(typeChoice === option ? "" : option)
                    }
                    className={`px-4 py-2 rounded-full border-2 transition-colors ${
                      typeChoice === option
                        ? "bg-btnbg border-btnbg text-white"
                        : "border-gray-300 text-gray-700 hover:border-btnbg"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {typeChoice === "其他" && (
                <input
                  type="text"
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                  placeholder="請輸入類型⋯⋯"
                  className="mt-3 w-full px-4 py-3 border-2 border-gray-300 rounded-full font-mono text-lg focus:border-btnbg focus:outline-none transition-colors"
                />
              )}
            </div>

            {/* 生成按鈕 */}
            <div className="flex items-center justify-center">
              <SliderButton
                text={loading ? "生成中⋯⋯" : "生成 QR Code"}
                hoverText="生成"
                icon={loading ? "mdi:loading" : "mdi:qrcode-plus"}
                onClick={generateQRCode}
                disabled={!urlInput.trim()}
                loading={loading}
                width="w-64"
              />
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-700">
                <div className="flex items-start gap-2 mb-2">
                  <Icon icon="mdi:alert-circle" className="text-xl mt-0.5" />
                  <span className="font-semibold">錯誤訊息：</span>
                </div>
                <p className="ml-7 mb-3">{error}</p>
                <div className="ml-7 text-sm space-y-1">
                  <p className="font-semibold">可能的解決方法：</p>
                  <ul className="list-disc list-inside space-y-1 text-red-600">
                    <li>嘗試重新整理頁面後再試一次</li>
                    <li>確認輸入的內容格式正確</li>
                    <li>如果問題持續，請稍後再試或聯絡網管</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* QR Code 預覽區塊 */}
          {qrCodeUrl && (
            <div className="relative bg-white rounded-xl p-6 md:p-8 mb-8 border border-gray-300 shadow-lg">
              <span
                className="absolute left-0 top-0 bottom-0 w-1 bg-btnbg rounded-l-xl"
                aria-hidden="true"
              ></span>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Icon icon="mdi:image" className="text-btnbg" />
                QR Code 預覽
              </h3>

              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-300 mb-6">
                  <img
                    src={composedUrl || qrCodeUrl}
                    alt="Generated QR Code"
                    className="w-64 md:w-80"
                  />
                </div>

                {/* 下載按鈕 */}
                <SliderButton
                  text="下載 QR Code 圖片"
                  hoverText="下載"
                  icon="mdi:download"
                  onClick={downloadQRCode}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QRCodeGeneratorPage;
