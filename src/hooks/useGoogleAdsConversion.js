import { useEffect } from "react";

/**
 * 自定義 Hook：Google Ads 轉換追蹤
 * 在頁面載入時觸發 Google Ads 轉換事件
 */
const useGoogleAdsConversion = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17499456338/RoCwCMr3g4wbENKGsphB",
        value: 1.0,
        currency: "USD",
      });
    }
  }, []);
};

export default useGoogleAdsConversion;
