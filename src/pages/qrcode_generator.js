import * as React from "react";
import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import { Icon } from "@iconify/react";

const QRCodeGeneratorPage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logo = "https://i.meee.com.tw/0SiZRVA.jpg";

  const generateQRCode = async () => {
    if (!urlInput.trim()) {
      setError("請輸入網址！");
      return;
    }

    setLoading(true);
    setError(null);
    setQrCodeUrl(null);

    const payload = {
      data: urlInput,
      config: {
        body: "circle-zebra",
        eye: "frame1",
        erf1: ["fh"],
        erf3: ["fh", "fv"],
        eyeBall: "ball15",
        gradientColor1: "#FFAF73",
        gradientColor2: "#6D9DF8",
        gradientOnEyes: true,
        bgColor: "#ffffff",
        logo: logo,
        logoMode: "clean",
      },
      size: 1000,
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
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "iOSClub_QRCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearInput = () => {
    setUrlInput("");
    setQrCodeUrl(null);
    setError(null);
  };

  return (
    <div className="bg-iosbgblue">
      <AppHeader title="iOS Club - QR Code 生成器" />
      <Navbar />
      <div className="container mx-auto break-normal bg-white shadow-lg px-3 md:px-0 font-mono">
        <div className="h-20 md:h-32" />

        {/* 頁面標題 */}
        <div className="text-center py-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Icon icon="mdi:qrcode" className="text-4xl text-btnbg" />
            <h1 className="text-5xl font-bold text-gray-800">QR Code 生成器</h1>
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
                  <strong>獨特圖樣：</strong>統一樣式，具識別度
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:apple" className="text-btnbg" />
                <span>
                  <strong>社團 Logo：</strong>內嵌 iOS Club 官方標誌
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                網址
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") generateQRCode();
                  }}
                  placeholder="請輸入網址..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-full font-mono text-lg focus:border-btnbg focus:outline-none transition-colors"
                />
                <button
                  onClick={clearInput}
                  className="px-4 py-3 text-gray-700 rounded-lg hover:bg-btnbg hover:text-white transition-colors flex items-center justify-center"
                  title="清除輸入"
                >
                  <Icon icon="mdi:close" className="text-xl" />
                </button>
              </div>
            </div>

            {/* 生成按鈕 */}
            <div className="flex items-center justify-center">
              <button
                className="overflow-hidden group h-12 w-56 border border-btnbg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={generateQRCode}
                disabled={loading || !urlInput.trim()}
              >
                <div className="transition duration-200 group-hover:-translate-y-12">
                  <div className="h-12 flex items-center justify-center text-btnbg gap-2">
                    {loading ? (
                      <>
                        <Icon
                          icon="mdi:loading"
                          className="text-xl animate-spin flex-shrink-0"
                        />
                        <span className="text-xl">生成中...</span>
                      </>
                    ) : (
                      <>
                        <Icon
                          icon="mdi:qrcode-plus"
                          className="text-xl flex-shrink-0"
                        />
                        <span className="text-xl">生成 QR Code</span>
                      </>
                    )}
                  </div>
                  <div className="h-12 flex items-center justify-center text-btnbg gap-2">
                    <Icon
                      icon="mdi:qrcode-plus"
                      className="text-xl flex-shrink-0"
                    />
                    <span className="text-xl">生成</span>
                  </div>
                </div>
              </button>
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
                    src={qrCodeUrl}
                    alt="Generated QR Code"
                    className="w-64 h-64 md:w-80 md:h-80"
                  />
                </div>

                <button
                  className="overflow-hidden group h-12 w-64 border border-btnbg rounded-full"
                  onClick={downloadQRCode}
                >
                  <div className="transition duration-200 group-hover:-translate-y-12">
                    <div className="h-12 flex items-center justify-center text-btnbg gap-2">
                      <Icon
                        icon="mdi:download"
                        className="text-xl flex-shrink-0"
                      />
                      <span className="text-xl">下載 QR Code 圖片</span>
                    </div>
                    <div className="h-12 flex items-center justify-center text-btnbg gap-2">
                      <Icon
                        icon="mdi:download"
                        className="text-xl flex-shrink-0"
                      />
                      <span className="text-xl">下載</span>
                    </div>
                  </div>
                </button>
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
