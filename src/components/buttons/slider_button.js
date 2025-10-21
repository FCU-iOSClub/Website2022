import * as React from "react";
import { Icon } from "@iconify/react";

/**
 * 目前當作主要按鈕
 * @param {Object} props - 元件屬性
 * @param {string} props.text - 按鈕主要文字
 * @param {string} props.hoverText - 滑鼠懸停時顯示的文字（選填，預設與 text 相同）
 * @param {string} props.icon - Iconify 圖示名稱（選填）
 * @param {Function} props.onClick - 點擊事件處理函式
 * @param {boolean} props.disabled - 是否禁用按鈕（選填）
 * @param {string} props.className - 額外的 CSS 類別（選填）
 * @param {string} props.width - 按鈕寬度類別（選填，預設 w-64）
 * @param {string} props.textSize - 文字大小類別（選填，預設 text-xl）
 * @param {boolean} props.loading - 是否顯示載入狀態（選填）
 * @param {string} props.loadingText - 載入狀態文字（選填，預設「處理中...」）
 * @returns {JSX.Element} 動畫按鈕元件
 */

const SliderButton = ({
  text,
  hoverText,
  icon,
  onClick,
  disabled = false,
  className = "",
  width = "w-auto",
  textSize = "text-xl",
  loading = false,
  loadingText = "處理中⋯⋯",
}) => {
  const displayHoverText = hoverText || text;

  return (
    <button
      className={`overflow-hidden group h-12 ${width} my-6 px-6 border border-btnbg rounded-full disabled:opacity-30 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <div className="transition duration-200 group-hover:-translate-y-12">
        {/* 預設狀態 */}
        <div className="h-12 flex items-center justify-center text-btnbg gap-2">
          {loading ? (
            <>
              <Icon icon="mdi:loading" className={`${textSize} animate-spin flex-shrink-0`} />
              <span className={textSize}>{loadingText}</span>
            </>
          ) : (
            <>
              {icon && <Icon icon={icon} className={`${textSize} flex-shrink-0`} />}
              <span className={`${textSize} break-words`}>{text}</span>
            </>
          )}
        </div>

        {/* 懸停狀態 */}
        <div className="h-12 flex items-center justify-center text-btnbg gap-2">
          {icon && <Icon icon={icon} className={`${textSize} flex-shrink-0`} />}
          <span className={`${textSize} break-words`}>{displayHoverText}</span>
        </div>
      </div>
    </button>
  );
};

export default SliderButton;