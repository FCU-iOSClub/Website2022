import * as React from "react";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";
import AppHeader from "../components/header";

const NotFoundPage = () => {
  // 初始化倒數
  const [countDown, setCountDown] = React.useState(5);

  // 開始倒數
  React.useEffect(() => {
    let id = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    return () => clearInterval(id);
  });

  // 倒數結束回首頁
  React.useEffect(() => {
    if (countDown <= 0) {
      window.location.href = "/";
    }
  });

  return (
    <div
      className="h-screen w-screen content-center items-center justify-center m-0"
      style={{ background: "#4d689b" }}
    >
      <AppHeader title="iOS Club - 404 Opps" />
      <div className="h-full w-full flex flex-col justify-center items-center p-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-center space-x-4 space-y-3">
          <LogoSvg className="h-48 w-48 md:w-32 md:h-32 text-white fill-current" />
          <h2 className="text-white text-xl md:text-3xl">網頁努力建置中...</h2>
        </div>
        <p className="py-3 text-white">在 {countDown} 秒後幫您回首頁</p>
        <a
          href="/"
          className="pt-3 underline underline-offset-2 text-white font-blod"
        >
          ..或點我回首頁
        </a>
        <div className="mt-10">
          <h2 className="text-lg text-white">404 Not Found</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
