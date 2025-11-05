import * as React from "react";
import { Icon } from "@iconify/react";

/**
 * 反色按鈕元件（邊框模式 → 懸停時填滿背景）
 * @param {Object} props - 元件屬性
 * @param {string} props.text - 按鈕文字
 * @param {string} props.icon - Iconify 圖示名稱（選填）
 * @param {Function} props.onClick - 點擊事件處理函式
 * @param {boolean} props.disabled - 是否禁用按鈕（選填）
 * @param {string} props.className - 額外的 CSS 類別（選填）
 * @param {string} props.textSize - 文字大小類別（選填，預設 text-base）
 * @param {string} props.borderColor - 邊框顏色（選填，預設 border-gray-700）
 * @param {string} props.hoverBg - 懸停背景色（選填，預設 hover:bg-btnbg）
 * @param {string} props.textColor - 文字顏色（選填，預設 text-gray-800）
 * @param {string} props.hoverTextColor - 懸停文字顏色（選填，預設 hover:text-white）
 * @returns {JSX.Element} 反色按鈕元件
 */

const ReverseColorsButton = ({
  text,
  icon,
  onClick,
  disabled = false,
  className = "",
  textSize = "text-base",
  borderColor = "border-gray-700",
  hoverBg = "hover:bg-btnbg",
  textColor = "text-gray-800",
  hoverTextColor = "hover:text-white",
}) => {
  return (
    <button
      className={`
        w-fit py-3 px-6 rounded-full break-words 
        bg-transparent border ${borderColor} 
        ${textColor} ${hoverTextColor} ${hoverBg}
        transition-colors duration-200
        disabled:opacity-30 disabled:cursor-not-allowed
        inline-flex items-center gap-2
        ${textSize}
        ${className}
      `.trim()}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {icon && <Icon icon={icon} className={textSize} aria-hidden="true" />}
      <nobr>{text}</nobr>
    </button>
  );
};

export default ReverseColorsButton;
