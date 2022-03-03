import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";
import { ReactComponent as AboutIosSvg } from "../images/svg/about_ios.svg";
import { ReactComponent as IosClubDoingSvg } from "../images/svg/iosclub_doing.svg";

const IndexPage = () => {
  return (
    <div>
      {/* Header */}
      <Helmet>
        <title>iOS Club</title>
      </Helmet>
      {Navbar()}
      <div className="container mx-auto break-all">
        {/* 空白區 */}
        <div className="h-0 md:h-32"></div>
        {/* We are iOS Club */}
        <div className="py-5 md:flex md:p-10 md:space-x-10 justify-center">
          <div className=" md:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">We are</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              一個教你從零開始打造專屬 apps 的社團
            </p>
          </div>
          <LogoSvg className="w-full md:w-6/12 p-10 md:p-0" fill="#696AAD" />
        </div>
        {/* About iOS Club. */}
        <div className="py-5 md:flex md:p-10 md:space-x-10 justify-center">
          <AboutIosSvg className="w-full md:w-6/12 p-10 md:p-0" />
          <div className=" md:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">About</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              是全台唯二 Apple
              官方認證的社團，也是一個結合學術的志工性社團。每年寒、暑假社員們會有國際交流的機會，到海外參加
              iOS Club 官方舉辦的冬、夏令營，
              和不同國家的學生進行合作活動與技術交流。
            </p>
          </div>
        </div>
        {/* iOS Club 會做什麼 */}
        <div className="py-5 md:flex md:p-10 md:space-x-10 justify-center">
          <div className=" md:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">iOS Club 會做什麼</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              在比賽方面， 社團鼓勵所有社員參加對外性比賽。 近年來也都在WWDC
              學生挑戰賽及移動應用創新賽等比賽取得佳績。
              當然，平時社團活動也不僅僅有社課，我們還會舉辦講座、夜烤、WorkShop、社遊、期末聚等，超多活動等你們來參加！
              我們不只和葳格高中建立了長期的任教合作，
              身為志工性社團的我們，還會和相關機構及國小一同舉辦志工營隊，將在社團內所學回饋社會。
            </p>
          </div>
          <IosClubDoingSvg className="w-full md:w-6/12 p-10 md:p-0" />
        </div>
        {/* iOS Club 做過什麼 */}
        <h2 className="text-center text-3xl py-3 font-bold">
          iOS Club 做過什麼
        </h2>
        <div className="py-5 px-5 md:grid md:grid-cols-3 md:gap-3 justify-center text-center">
          <div className="w-full rounded-md shadow-lg border border-neutral-50">
            <h2 className="my-8">社團課程</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            <p className="my-8">
              <a href="">Learn More</a>
            </p>
          </div>
          <div className="w-full rounded-md shadow-lg border border-neutral-50">
            <h2 className="my-8">社團活動</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            <p className="my-8">
              <a href="">Learn More</a>
            </p>
          </div>
          <div className="w-full rounded-md shadow-lg border border-neutral-50">
            <h2 className="my-8">歷屆競賽得獎</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            <p className="my-8">
              <a href="">Learn More</a>
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      {Footer()}
    </div>
  );
};

export default IndexPage;
