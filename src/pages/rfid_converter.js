import * as React from "react";
import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import { Icon } from "@iconify/react";

const RfidConverterPage = () => {
  const [hexInput, setHexInput] = useState("");
  const [decInput, setDecInput] = useState("");

  const hexToDecWithEndianness = (hexStr) => {
    try {
      // 清理輸入
      hexStr = hexStr.replace(/[^0-9a-fA-F]/g, "");

      if (hexStr.length === 0) return null;
      if (hexStr.length % 2 !== 0) hexStr = "0" + hexStr;

      // 限制為最多8位數（32位），不自動補0
      if (hexStr.length > 8) {
        hexStr = hexStr.slice(-8); // 取最後8位
      }

      // 分割成位元組
      const bytes = [];
      for (let i = 0; i < hexStr.length; i += 2) {
        bytes.push(hexStr.substr(i, 2));
      }

      // 創建副本來避免修改原始數組
      const originalBytes = [...bytes];
      const reversedBytes = [...bytes].reverse();
      const reversedHex = reversedBytes.join("");

      // 轉換為10進制
      const decimal = parseInt(reversedHex, 16);

      return {
        original: hexStr.toUpperCase(),
        originalFormatted: originalBytes.join(":").toUpperCase(),
        reversed: reversedHex.toUpperCase(),
        reversedFormatted: reversedBytes.join(":").toUpperCase(),
        decimal: decimal,
      };
    } catch (e) {
      return null;
    }
  };

  const decToHexWithEndianness = (decStr) => {
    try {
      const decimal = parseInt(decStr);
      if (isNaN(decimal) || decimal < 0 || decimal > 0xffffffff) return null;

      // 轉換為16進制（8位數）
      let hex = decimal.toString(16).toUpperCase();
      while (hex.length < 8) {
        hex = "0" + hex;
      }

      // 分割成位元組
      const bytes = [];
      for (let i = 0; i < hex.length; i += 2) {
        bytes.push(hex.substr(i, 2));
      }

      // 創建副本來避免修改原始數組
      const originalBytes = [...bytes];
      const reversedBytes = [...bytes].reverse();
      const reversedHex = reversedBytes.join("");

      return {
        decimal: decimal,
        hex: hex,
        hexFormatted: originalBytes.join(":"),
        reversed: reversedHex,
        reversedFormatted: reversedBytes.join(":"),
      };
    } catch (e) {
      return null;
    }
  };

  const hexResult = hexInput ? hexToDecWithEndianness(hexInput) : null;
  const decResult = decInput ? decToHexWithEndianness(decInput) : null;

  const clearHex = () => setHexInput("");
  const clearDec = () => setDecInput("");

  return (
    <div className="bg-iosbgblue">
      <AppHeader />
      <Navbar />
      <div className="container mx-auto break-normal bg-white shadow-lg px-3 md:px-0 font-serif">
        <div className="h-20 md:h-32" />

        {/* 頁面標題 */}
        <div className="text-center py-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Icon icon="mdi:rfid" className="text-4xl text-btnbg" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              RFID 卡號轉換器
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            專為處理 RFID 卡片的小端序（Little Endian）數據格式轉換工具
          </p>
        </div>

        <div className="max-w-4xl mx-auto pb-16">
          {/* 16進制轉10進制 */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon icon="mdi:numeric-1-box" className="text-blue-500" />
              16進制轉10進制（支援位元組反轉）
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                16進制卡號 (例: B4C5D677 或 0xB4C5D677)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={hexInput}
                  onChange={(e) => setHexInput(e.target.value)}
                  placeholder="請輸入16進制卡號..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg font-mono text-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={clearHex}
                  className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  清除
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                轉換結果:
              </label>
              <div
                className={`p-4 rounded-lg border-2 font-mono ${
                  hexResult
                    ? "bg-green-50 border-green-300 text-green-800"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
              >
                {!hexInput && "等待輸入..."}
                {hexInput && !hexResult && "請輸入有效的16進制數值"}
                {hexResult && (
                  <div className="space-y-2">
                    <div>
                      <strong>原始16進制：</strong>
                      {hexResult.originalFormatted} (0x{hexResult.original})
                    </div>
                    <div>
                      <strong>反轉後：</strong>
                      {hexResult.reversedFormatted} (0x{hexResult.reversed})
                    </div>
                    <div>
                      <strong>10進制結果：</strong>
                      {hexResult.decimal}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 10進制轉16進制 */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon icon="mdi:numeric-2-box" className="text-green-500" />
              10進制轉16進制（支援位元組反轉）
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                10進制卡號 (例: 1234567890)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={decInput}
                  onChange={(e) => setDecInput(e.target.value)}
                  placeholder="請輸入10進制卡號..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg font-mono text-lg focus:border-green-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={clearDec}
                  className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  清除
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                轉換結果:
              </label>
              <div
                className={`p-4 rounded-lg border-2 font-mono ${
                  decResult
                    ? "bg-green-50 border-green-300 text-green-800"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
              >
                {!decInput && "等待輸入..."}
                {decInput &&
                  !decResult &&
                  "請輸入有效的10進制數值 (0-4294967295)"}
                {decResult && (
                  <div className="space-y-2">
                    <div>
                      <strong>10進制：</strong>
                      {decResult.decimal}
                    </div>
                    <div>
                      <strong>標準16進制：</strong>
                      {decResult.hexFormatted} (0x{decResult.hex})
                    </div>
                    <div>
                      <strong>RFID格式：</strong>
                      {decResult.reversedFormatted} (0x{decResult.reversed})
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 轉換範例 */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 md:p-8 mb-8">
            <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
              <Icon icon="mdi:lightbulb-on" className="text-amber-500" />
              轉換範例
            </h4>
            <div className="space-y-2 text-amber-800">
              <div>
                <strong>軟體顯示：</strong>B4C5D677 (0xB4C5D677) →{" "}
                <strong>反轉後：</strong>77D6C5B4 → <strong>10進制：</strong>
                2010883508
              </div>
              <div>
                <strong>標準卡號：</strong>1234567890 →{" "}
                <strong>16進制：</strong>499602D2 → <strong>反轉後：</strong>
                D2029649
              </div>
            </div>
          </div>

          {/* 轉換原理 */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Icon icon="mdi:cog" className="text-blue-500" />
              轉換原理
            </h4>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-start gap-2">
                <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded font-mono">
                  1
                </span>
                <span>RFID卡片以小端序（Little Endian）儲存數據</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded font-mono">
                  2
                </span>
                <span>軟體直接讀取顯示：B4 C5 D6 77</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded font-mono">
                  3
                </span>
                <span>反轉位元組順序：77 D6 C5 B4</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded font-mono">
                  4
                </span>
                <span>轉換為10進制：2010883508</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RfidConverterPage;
