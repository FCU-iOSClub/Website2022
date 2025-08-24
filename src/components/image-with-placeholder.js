import * as React from "react";
import { useState, useMemo } from "react";

/**
 * 通用圖片元件（含 Skeleton 佔位 + 淡入效果 + 可指定尺寸/比例）
 *
 * Props:
 * - src: 圖片來源
 * - alt: 替代文字
 * - className: 外層容器 class（控制寬高/排版建議放這裡）
 * - imgClassName: 內層 img 的 class（object-fit 等）
 * - placeholderClassName: Skeleton 額外樣式
 * - width: number|string（容器寬度，優先於 className；例如 320 或 "100%"）
 * - height: number|string（容器高度，優先於 className）
 * - aspectRatio: number|string（容器 CSS aspect-ratio；例如 1.7778 或 "16/9"）
 * - objectFit: 覆寫 object-fit，預設 cover（可用 contain/scale-down 等）
 * - defaultAspectRatio: 若未提供 height 與 aspectRatio，採用此預設比例作為佔位，預設 "16/9"
 * - onLoad, onError: 事件回呼
 *
 * 注意：
 * 1) 若未指定 height，但提供 aspectRatio，容器會以 CSS aspect-ratio 建立穩定佔位，避免 CLS。
 * 2) 若完全未指定高度與比例，會套用 defaultAspectRatio（預設 16/9）確保有佔位；如不希望可將 defaultAspectRatio 設為空字串。
 */
const ImageWithPlaceholder = ({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  placeholderClassName = "",
  width,
  height,
  aspectRatio,
  objectFit = "cover",
  defaultAspectRatio = "16/9",
  onLoad,
  onError,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // 組合容器 style，提供穩定佔位避免布局抖動
  const containerStyle = useMemo(() => {
    const style = {};
    if (typeof width !== "undefined") {
      style.width = typeof width === "number" ? `${width}px` : width;
    }
    if (typeof height !== "undefined") {
      style.height = typeof height === "number" ? `${height}px` : height;
    }
    // 先用顯式的 aspectRatio
    let ar = aspectRatio;
    // 若未指定 height 與 aspectRatio，使用 defaultAspectRatio（可被設為空字串以停用）
    if (
      typeof height === "undefined" &&
      (typeof ar === "undefined" || ar === null || ar === "") &&
      typeof defaultAspectRatio !== "undefined" &&
      defaultAspectRatio !== null &&
      defaultAspectRatio !== ""
    ) {
      ar = defaultAspectRatio;
    }
    if (typeof ar !== "undefined" && ar !== null && ar !== "") {
      style.aspectRatio = ar;
    }
    return style;
  }, [width, height, aspectRatio, defaultAspectRatio]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {!loaded && (
        <div
          className={`skeleton absolute inset-0 ${placeholderClassName}`}
          aria-hidden="true"
        />
      )}
      <img
        src={failed ? src : src}
        alt={alt}
        className={`block w-full h-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
        style={{ objectFit }}
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          // 載入失敗時移除 skeleton，避免無限顯示
          setFailed(true);
          setLoaded(true);
          onError?.(e);
        }}
        {...props}
      />
    </div>
  );
};

export default ImageWithPlaceholder;
