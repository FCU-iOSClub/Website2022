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
                <div className="h-8 md:h-24"></div>


                <div className="py-2 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
                    <div className="w-full self-center">
                        <div className="text-center text-5xl font-[1000]">
                            <h1 className="text-center md:text-left">iOS Club</h1>
                            <h1 className="py-3 text-center md:text-left">社團課程</h1>
                            <div class="h-2 w-9/10 my-4 bg-blue-300"></div>
                        </div>
                        <p className="py-3 text-gray-700 text-center md:text-left">
                            iOS Club 社課主要內容為利用 Xcode 開發 iOS App ，讓大家能透過實作了解並熟悉 Swift 語言的應用 、 SwiftUI 的佈局，最終達到具備獨立開發的能力。透過循序漸進的教學模式，讓大家都能從0開始輕鬆駕馭 App 開發，每堂社課都是收穫滿滿。
                        </p>
                    </div>
                    <LogoSvg className="w-full p-3" fill="#696AAD" />
                </div>
                <div className="h-8" />
                {/* About iOS Club. */}
                <div className="py-2 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
                    <LogoSvg className="w-full p-3" fill="#696AAD" />
                    <div className="w-full self-center text-justify">
                        <div className="text-center text-5xl font-[1000]">
                            <h1 className="text-center md:text-left">iOS Club</h1>
                            <h1 className="py-3 text-center md:text-left">社課團隊</h1>
                            <div class="h-2 w-9/10  my-4 bg-blue-300"></div>
                        </div>
                        <div className="py-4 text-gray-700 text-center md:text-left">
                            <p>
                                iOS Club 主要的課程為 Swift UI 的 App 設計，除此之外也有 Playground 和 mBot 的教學課程，此部分是由教學長負責課程規劃與教學。
                            </p>
                            <div className="h-3" />
                            <p>
                                而在技術課程外，我們也有由美宣負責教學的設計課，內容有 Keynote 、 Figma 、流程圖...等。
                            </p>
                            <div className="h-3" />
                            <p>
                                社課期間其餘幹部皆擔任助教身分，協助社員解決課程中遇到的任何問題，讓參加社課的社員們都能順利的學習與成長。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
                {/*技術課*/}
                <h2 className="text-center text-3xl py-3 font-bold">
                    技術課
                </h2>
                <div class="h-2 w-1/4 my-4 bg-blue-300 content-center"></div>
                <div className="py-5 px-20 md:grid md:grid-cols-3 md:gap-3 justify-center text-center">
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50">
                        <h2 className="my-8 text-xl font-bold">Swift UI</h2>
                        <SwiftSvg icon="swift" className="w-full"/>
                    </div>
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
                        <h2 className="my-8 text-xl font-bold">Playground</h2>
                    </div>
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
                        <h2 className="my-8 text-xl font-bold">mBot</h2>
                    </div>
                </div>
                <div className="h-32" />

                {/*設計課*/}
                
                <h2 className="text-center text-3xl py-1 font-bold">
                    設計課
                </h2>
                <div class="h-2 w-1/6 my-4 bg-blue-300"></div>
                <div className="py-5 px-20 md:grid md:grid-cols-3 md:gap-3 justify-center text-center">
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50">
                        <h2 className="my-8 text-xl font-bold">Keynote</h2>
                    </div>
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
                        <h2 className="my-8 text-xl font-bold">Figma</h2>
                        <FigmaSvg className="w-full"/>
                    </div>
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
                        <h2 className="my-8 text-xl font-bold">流程圖</h2>
                    </div>
                </div>
                <div className="h-32" />

                {/* iOS Club 做過什麼 */}
                <h2 className="text-center text-3xl py-3 font-bold">
                    iOS Club 做過什麼
                </h2>
                <div className="py-5 px-5 md:grid md:grid-cols-3 md:gap-3 justify-center text-center">
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50">
                        <h2 className="my-8 text-xl font-bold">社團課程</h2>
                        <p className="my-8">每週二、四的晚上 18:30～20:30</p>
                        {learnMoreButton("/course")}
                    </div>
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
                        <h2 className="my-8 text-xl font-bold">社團活動</h2>
                        {learnMoreButton("/club_activities")}
                    </div>
                    <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
                        <h2 className="my-8 text-xl font-bold">歷屆競賽得獎</h2>
                        {learnMoreButton("/404")}
                    </div>
                </div>
                <div className="h-12" />
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
