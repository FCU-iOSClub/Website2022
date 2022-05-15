import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ReactComponent as SwiftSvg } from "../images/svg/swift.svg";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";
import { ReactComponent as FigmaSvg } from "../images/svg/figma.svg";
import AppHeader from "../components/header";

const CoursePage = () => {
  return (
    <div className=" bg-blue-300">
      {/* Header */}
      <AppHeader />
      {Navbar()}
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0">
        {/* 空白區 */}
        <div className="h-32" />
        {/* 設課大標 */}
        <div className="py-2 md:px-32 grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-16 md:p-10 justify-center items-center">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="text-center md:text-left">iOS Club</h1>
              <h1 className="py-3 text-center md:text-left">社團課程</h1>
              <div className="h-2 my-4 bg-blue-300" /> {/* 橫槓 */}
            </div>
            <p className="py-3 text-gray-700 md:text-left text-justify">
              iOS Club 社課主要內容為利用 Xcode 開發 iOS App
              ，讓大家能透過實作了解並熟悉 Swift 語言的應用 、 SwiftUI
              的佈局，最終達到具備獨立開發的能力。透過循序漸進的教學模式，讓大家都能從0開始輕鬆駕馭
              App 開發，每堂社課都是收穫滿滿。
            </p>
          </div>
          <img
            className="place-self-center object-cover w-full"
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/e9ab7dbf-31a8-4c1a-7fed-d805d7a26500/public"
          />
        </div>
        <div className="h-8" />
        {/* 設課團隊 */}
        <div className="py-2 md:px-32 grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-16 md:p-10 justify-center items-center">
          <img
            className="place-self-center object-cover w-full hidden md:block"
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/702555d9-8ee5-44c9-ee1c-068c1fbce500/public"
          />
          <div className="w-full self-center text-justify">
            <div className="text-center text-5xl font-bold">
              <h1 className="text-center md:text-left">iOS Club</h1>
              <h1 className="py-3 text-center md:text-left">社課團隊</h1>
              <div className="h-2 my-4 bg-blue-300" /> {/* 橫槓 */}
            </div>
            <div className="py-4 text-gray-700 text-justify md:text-left">
              <p>
                iOS Club 主要的課程為 Swift UI 的 App 設計，除此之外也有
                Playground 和 mBot
                的教學課程，此部分是由教學長負責課程規劃與教學。
              </p>
              <div className="h-3" />
              <p>
                而在技術課程外，我們也有由美宣負責教學的設計課，內容有 Keynote
                、 Figma 、流程圖...等。
              </p>
              <div className="h-3" />
              <p>
                社課期間其餘幹部皆擔任助教身分，協助社員解決課程中遇到的任何問題，讓參加社課的社員們都能順利的學習與成長。
              </p>
            </div>
            <img
              className="place-self-center object-cover w-full md:hidden block"
              src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/702555d9-8ee5-44c9-ee1c-068c1fbce500/public"
            />
          </div>
        </div>
        <div className="h-20" />
        {/*技術課*/}
        <div>
          {/* 標題 */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-5xl py-3 font-bold">技術課</h2>
            <div className="h-2 w-full md:w-2/12 my-4 bg-blue-300" />{" "}
            {/* 橫槓 */}
            <div className="h-8" /> {/* 空白區 */}
          </div>
          {/* 圖卡 */}
          <div className="grid w-full gap-3 md:gap-10 grid-cols-1 md:grid-cols-3 px-3 md:px-32">
            <div className="p-8 mx-16 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center">Swift UI</h3>
              <img
                className="w-full p-12"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/8aac93a7-b803-4e20-90dc-fb9a6077c100/public"
              />
            </div>
            <div className="p-8 mx-16 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center">Playground</h3>
              <img
                className="w-full p-12"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/2a9e9a09-2e25-4946-5b94-599e8a56f000/public"
              />
            </div>
            <div className="p-8 mx-16 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center">mBot</h3>
              <img
                className="w-full p-12"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/6d5f310f-9af8-4be6-d1a7-7fdff13ea700/public"
              />
            </div>
          </div>
        </div>
        <div className="h-20 md:h-40" /> {/* 空白區 */}
        {/* 設計課 */}
        <div>
          {/* 標題 */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-5xl py-3 font-bold">設計課</h2>
            <div className="h-2 w-full md:w-2/12 my-4 bg-blue-300" />{" "}
            {/* 橫槓 */}
            <div className="h-8" /> {/* 空白區 */}
          </div>
          {/* 圖卡 */}
          <div className="grid w-full gap-3 md:gap-10 grid-cols-1 md:grid-cols-3 px-3 md:px-32">
            <div className="p-8 mx-16 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center">Keynote</h3>
              <img
                className="w-full p-12"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/5a8691b7-082d-46f5-68f6-5b15955f2900/public"
              />
            </div>
            <div className="p-8 mx-16 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center">Figma</h3>
              <img
                className="w-full p-12"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/a8142fb7-3fc1-4250-2b58-ed03c0a13400/public"
              />
            </div>
            <div className="p-8 mx-16 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center">流程圖</h3>
              <img
                className="w-full p-12"
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/601c3805-3ce6-4c94-c1ce-8935b141f400/public"
              />
            </div>
          </div>
          <div className="h-20 md:h-32" /> {/* 空白區 */}
        </div>
      </div>
      {/* footer */}
      {Footer()}
    </div>
  );
};

const learnMoreButton = (href = "/") => {
  return (
    <p className="my-8">
      <a
        className="bg-red-300 w-fit py-3 px-6 rounded-full break-words"
        href={href}
      >
        Learn More
      </a>
    </p>
  );
};

export default CoursePage;
