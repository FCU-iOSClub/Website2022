import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const CoursePage = () => {
  // Google Ads 轉換追蹤
  useGoogleAdsConversion();

  const hideURL =
    "https://drive.google.com/drive/folders/1bn2eXfrgEQ6DJY4RiYqoMla9nmEmmeAp?usp=drive_link";

  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader
        title="iOS Club - 社團課程"
        description="iOS Club 社課主要內容為利用 Xcode 開發 iOS app，讓大家能透過實作了解並熟悉 Swift 語言的應用、SwiftUI 的佈局，最終達到具備獨立開發的能力，透過鼓勵社員參加各式校外競賽，以此展現社員的學習成果。"
      />
      <Navbar />
      <div className="container font-serif mx-auto break-all bg-white shadow-lg px-3 md:px-0">
        {/* 空白區 */}
        <div className="h-32" />
        {/* 社課大標 */}
        <div className="py-2 md:px-32 grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-16 md:p-10 justify-center items-center ">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold ">
              <h1 className="text-center md:text-left">iOS Club</h1>
              <h1 className="py-3 text-center md:text-left">社團課程</h1>
              <div className="h-2 my-4 bg-blue-300" /> {/* 橫槓 */}
            </div>
            <p className="py-3 text-gray-800 md:text-left text-justify break-normal decoration-sky-500">
              iOS Club 社課主要內容為利用{" "}
              <a className="underline decoration-sky-500">Xcode</a> 開發 iOS
              app，讓大家能透過實作了解並熟悉{" "}
              <a className="underline decoration-sky-500">Swift</a>{" "}
              語言的應用、SwiftUI
              的佈局，最終達到具備獨立開發的能力，透過鼓勵社員參加各式校外競賽，以此展現社員的學習成果。
            </p>
            <p className="py-3 text-gray-800 md:text-left text-justify break-normal">
              社課透過循序漸進的教學模式，讓大家都能從
              <span
                onClick={() => {
                  window.open(hideURL, "_blank");
                }}
              >
                {" "}
                0{" "}
              </span>
              開始，由初階慢慢學到有深度的技巧，就能輕鬆駕馭 app
              開發，每堂社課都有豐富的教學內容，絕對讓你收穫滿滿。
            </p>
          </div>
          <ImageWithPlaceholder
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/df08b507-3be8-4c8f-f24a-fa6977390500/public"
            alt="社團課程"
            className="place-self-center w-full"
            imgClassName="object-cover"
            aspectRatio="4/3"
          />
        </div>
        <div className="h-8" />
        {/* 社課團隊 */}
        <div className="py-2 md:px-32 grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-16 md:p-10 justify-center items-center">
          {/* 社課團隊（桌面版）圖片 */}
          <ImageWithPlaceholder
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/76407c49-4b18-4eb1-763c-246f65604e00/public"
            alt="社課團隊"
            className="place-self-center w-full hidden md:block"
            imgClassName="object-cover"
            aspectRatio="4/3"
          />
          <div className="w-full self-center text-justify">
            <div className="text-center text-5xl font-bold">
              <h1 className="text-center md:text-left">iOS Club</h1>
              <h1 className="py-3 text-center md:text-left">社課團隊</h1>
              <div className="h-2 my-4 bg-blue-300" /> {/* 橫槓 */}
            </div>
            <div className="py-4 text-gray-700 text-justify md:text-left text-base break-normal">
              <p>
                iOS Club 主要的課程為&nbsp;
                <a className="underline decoration-sky-500 underline-offset-1">
                  Swift UI
                </a>
                &nbsp;的 app 設計，除此之外也有&nbsp;
                <a className="underline decoration-sky-500">Playground</a>
                &nbsp;和&nbsp;
                <a className="underline decoration-sky-500 underline-offset-1">
                  mBot
                </a>
                &nbsp;的教學課程，此部分是由
                <a className="underline decoration-pink-500 underline-offset-1">
                  教學長
                </a>
                負責課程規劃與教學。
              </p>
              <div className="h-3" />
              <p>
                而在技術課程外，我們也有由
                <a className="underline decoration-pink-500 underline-offset-1">
                  美宣長
                </a>
                負責教學的設計課，內容有&nbsp;
                <a className="underline decoration-sky-500 underline-offset-1">
                  Keynote
                </a>
                、
                <a className="underline decoration-indigo-500 underline-offset-1">
                  Figma
                </a>
                、流程圖...等。
              </p>
              <div className="h-3" />
              <p>
                社課期間其餘幹部皆擔任助教身分，協助社員解決課程中遇到的任何問題，讓參加社課的社員們都能順利的學習與成長。
              </p>
            </div>
            {/* 社課團隊（行動版）圖片 */}
            <ImageWithPlaceholder
              src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/76407c49-4b18-4eb1-763c-246f65604e00/public"
              alt="社課團隊"
              className="place-self-center w-full md:hidden block"
              imgClassName="object-cover"
              aspectRatio="4/3"
            />
          </div>
        </div>
        <div className="h-20" />
        {/* 程式線 */}
        <div>
          {/* 標題 */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-5xl py-3 font-bold">程式線</h2>
            <div className="h-2 w-full md:w-2/12 my-4 bg-blue-300" />{" "}
            {/* 橫槓 */}
            <div className="h-8" /> {/* 空白區 */}
          </div>
          {/* 圖卡 */}
          <div className="grid w-full gap-3 md:gap-10 grid-cols-1 md:grid-cols-3 px-3 md:px-32">
            {courseCard(
              "Swift UI",
              "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/e764b192-2c41-4545-78f2-85985248fc00/public",
            )}
            {courseCard(
              "Playground",
              "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/581b9bdf-d597-41ab-87e9-2685fc46a500/public",
            )}
            {courseCard(
              "mBot",
              "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/6d5f310f-9af8-4be6-d1a7-7fdff13ea700/public",
            )}
          </div>
        </div>
        <div className="h-20 md:h-40" /> {/* 空白區 */}
        {/* 創客線 */}
        <div>
          {/* 標題 */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-5xl py-3 font-bold">創客線</h2>
            <div className="h-2 w-full md:w-2/12 my-4 bg-blue-300" />{" "}
            {/* 橫槓 */}
            <div className="h-8" /> {/* 空白區 */}
          </div>
          {/* 圖卡 */}
          <div className="grid w-full gap-3 md:gap-10 grid-cols-1 md:grid-cols-3 px-3 md:px-32">
            {courseCard(
              "Keynote",
              "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/5a8691b7-082d-46f5-68f6-5b15955f2900/public",
            )}
            {courseCard(
              "Figma",
              "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/a8142fb7-3fc1-4250-2b58-ed03c0a13400/public",
            )}
            {courseCard(
              "流程圖",
              "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/cf246467-b95a-4077-d51a-63021b8c0f00/public",
            )}
          </div>
          <div className="h-20 md:h-32" /> {/* 空白區 */}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

const courseCard = (title, img) => {
  return (
    <div className="py-8 px-1 mx-5 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg flex flex-col items-center">
      <h3 className="text-3xl pb-8 md:p-0 font-bold text-center">{title}</h3>
      <div className="h-5" />
      <ImageWithPlaceholder
        src={img}
        alt={title}
        className="w-8/12"
        imgClassName="object-cover"
        aspectRatio="1/1"
      />
    </div>
  );
};

export default CoursePage;
