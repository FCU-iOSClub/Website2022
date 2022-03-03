import * as React from "react";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <div
      className="h-screen w-screen content-center items-center justify-center m-0"
      style={{ background: "#4d689b" }}
    >
      <Helmet>
        <title>iOS Club - 404</title>
      </Helmet>
      <div className="h-full w-full flex flex-col justify-center items-center p-20">
        <div class="w-full flex flex-col md:flex-row items-center justify-center space-x-4 space-y-3">
          <LogoSvg className="h-48 w-48 md:w-32 md:h-32 text-white fill-current" />
          <h2 className="text-white text-xl md:text-3xl">網頁努力建置中...</h2>
        </div>

        <div className="mt-10">
          <h2 className="text-lg text-white">404 Not Found</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
