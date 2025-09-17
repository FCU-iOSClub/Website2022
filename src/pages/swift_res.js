import * as React from "react";
import AppHeader from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";
import baselineDownloadForOffline from "@iconify/icons-ic/baseline-download-for-offline";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const SwiftPage = () => {
  // Google Ads 轉換追蹤
  useGoogleAdsConversion();

  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      <div className="container font-serif mx-auto break-all bg-white shadow-lg px-3 md:px-0 text-justify">
        {/* 空白區 */}
        <div className="h-32" />
        {/* 教學網 */}
        <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold break-normal text-center">
              iOS Club 教學網
            </h2>
            <p className="py-10 break-normal mx-0 lg:mx-24">
              我們致力於推廣程式教育，為所有年齡層提供高品質的程式設計教學，主要以
              Swift
              程式語言為主軸，無論您是完全沒有程式設計經驗的新手，還是有一定經驗的開發者，我們的教學內容都能夠為您提供所需的知識和技能。
              <br></br>為了讓學習更加生動有趣，我們使用 Apple Swift Playground
              進行程式設計學習。Swift Playground 是一款由 Apple 公司開發的
              App，專為初學者設計，可以在 iPad 和 Mac
              上運行。它提供了一個友好的界面，以及豐富的編程挑戰和互動式學習內容，可以幫助學習者更輕鬆地學習
              Swift 編程。<br></br>在我們的課程中，我們將使用 「學習程式設計 1」
              和 「學習程式設計 2」 兩本書籍作為教材。「學習程式設計 1」 包含了
              Swift 編程的基礎知識，以及使用 Swift Playground
              的相關操作；「學習程式設計 2」 則進一步介紹了更高級的 Swift
              開發技巧，以及 iOS Swift UI
              的開發方法，內容豐富，易於理解，是您學習 Swift 編程和 iOS
              應用程式開發的最佳選擇。
            </p>
            <div className="flex items-center justify-center gap-2">
              <button
                className="overflow-hidden group h-12 px-6 border border-btnbg rounded-full"
                onClick={() => {
                  window.open("https://tutorial.iosclub.tw", "_blank");
                }}
              >
                <div className="transition duration-200 group-hover:-translate-y-12">
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    <a className="text-blue-800 text-xl">開始學習</a>
                  </div>
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    <a className="text-blue-800 text-xl">前往</a>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* 空白區 */}
        <div className="h-16" />
        {/* Swift App 開發手冊 */}
        <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4 xl:w-5/6">
            <h2 className="text-3xl font-bold break-normal">
              Swift App 開發手冊
            </h2>
            <p className="py-10 break-normal">
              App 開發手冊使用設計思維框架來教授 iOS App
              開發的基本能力。您將在設計 App 中的每一個階段，探索 App
              設計以及編寫程式碼之間的關係，讓您的 App 變得更栩栩如生。
            </p>
            <div className="flex items-center gap-2">
              <button
                className="overflow-hidden group h-12 px-6 border border-btnbg rounded-xs"
                onClick={() => {
                  window.open(
                    "https://www.apple.com/tw/education/docs/swift-club-xcode.pdf",
                    "_blank",
                  );
                }}
              >
                <div className="transition duration-200 group-hover:-translate-y-12">
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    <a className="text-blue-800 text-xl">立刻下載</a>
                    <Icon
                      icon={baselineDownloadForOffline}
                      color="#1e40af"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    <a className="text-blue-800 text-xl">前往</a>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex p-2 border border-gray-400 rounded-3xl shadow-2xl">
            <div className="flex">
              <div className="flex flex-col">
                <ImageWithPlaceholder
                  src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/62854a1f-b079-4db3-222e-a04d7f8f1b00/public"
                  alt="Swift App 開發手冊"
                  className="w-full"
                  imgClassName="object-contain"
                  aspectRatio="16/9"
                  objectFit="contain"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* 空白區 */}
        <div className="h-16" />
        {/* Swift 書 */}
        <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold break-normal text-center">
              在 Swift 課程中學開發
            </h2>
            <p className="py-10 break-normal mx-0 lg:mx-24">
              開始新的課程或是將您的技能提升到一個新水平。
              不論您是程式編碼新手，或是想要提升您的技能，Swift
              課本都能夠幫助你。這本課本提供實際在 Mac 電腦使用 Xcode 創建 App
              的操作分享（Xcode是一款用於為蘋果平台創建app的開發環境）。
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              {swiftBooks.map((item, index) => (
                <div className=" flex-1 flex-col" key={index}>
                  <ImageWithPlaceholder
                    src={item.image}
                    alt={item.title}
                    className="w-full"
                    imgClassName="object-contain"
                    aspectRatio="3/4"
                    objectFit="contain"
                  />
                  <p className="break-normal text-2xl font-black text-left py-4">
                    {item.title}
                  </p>
                  <p className="break-left pb-4 break-normal">{item.desc}</p>
                  <a href={item.url} className="text-blue-600 ">
                    View in Apple Books &gt;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 空白區 */}
        <div className="h-16" />
        {/* Apple Professional Training Courses */}
        <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4 xl:w-5/6">
            <h2 className="text-3xl font-bold break-normal">
              Apple 專業訓練課程
            </h2>
            <p className="py-10 break-normal">
              讓你瞭解與 Apple 平台順暢運作的工具、語言和設計原則。
              下載考試準備指南，為考試做準備。
              通過考試後，在任何專業網站上顯示經過驗證的數位徽章。
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://training.apple.com/"
                className="text-blue-800 text-xl"
              >
                檢視課程 {">"}{" "}
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <ImageWithPlaceholder
              src="https://i.imgur.com/ySr8KGR.jpg"
              alt="Apple 專業訓練課程"
              className="w-full"
              imgClassName="object-contain"
              aspectRatio="16/9"
              objectFit="contain"
            />
          </div>
        </div>
        {/* 空白區 */}
        <div className="h-16" />
        {/* 獲得 Swift 認證 */}
        <div className="mx-2 md:mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold break-normal text-center">
              獲得 Swift 認證
            </h2>
            <p className="py-10 break-normal mx-0 lg:mx-24">
              透過你對 Swift 和 Xcode 的了解與知識，來贏得認證以及數位徽章。
              通過 Certiport 的考試可以獲得使用 Swift 開發 App
              的認證，這也表明您已經準備好成為 App 開發者的下一步了。
            </p>

            <a
              href="https://certiport.pearsonvue.com/Certifications/Apple/App-Dev-With-Swift/Overview.aspx"
              className="text-blue-800 text-xl text-center"
            >
              在Certiport了解更多 {">"}
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 px-3 sm:px-10 md:px-32 lg:px-48 xl:px-64">
              {/* TODO */}
              {/* <img
                className="w-full h-full object-contain"
                src="https://raw.githubusercontent.com/FCU-iOSClub/Website2022ImageBed/main/App_Development_Swift_CU_Badge_020121.jpeg"
              />
              <img
                className="w-full object-contain"
                src="https://raw.githubusercontent.com/FCU-iOSClub/Website2022ImageBed/main/App_Development_Swift_Associate_Badge_020121.jpeg"
              /> */}
            </div>
          </div>
        </div>

        {/* 空白區 */}
        <div className="h-16" />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

const swiftBooks = [
  {
    title: "Swift 開發 -- 探索篇",
    desc: "學習關鍵的開發概念，為 Swfit 開發打下基礎。並且在探索 iOS App 開發的同時，瞭解應用程式對社會、經濟、文化的的影響。",
    url: "https://apple.co/teachingcode",
    image:
      "https://github.com/FCU-iOSClub/Website2022ImageBed/blob/main/swift-data-collections_2x.jpg?raw=true",
  },
  {
    title: "Swift 開發 -- 基礎篇",
    desc: "用 Swift 建立基本的 iOS App 開發技能，掌握日常開發 Swift 的核心概念和實踐，並瞭解在 Xcode 的功能和編輯器在開發中的定位。",
    url: "https://apple.co/teachingcode",
    image:
      "https://github.com/FCU-iOSClub/Website2022ImageBed/blob/main/swift-explorations_2x.jpg?raw=true",
  },
  {
    title: "Swift 開發 -- 資料收集篇",
    desc: "拓展你對 iOS App 開發的知識和技能，創建更複雜、更多功能的 App。並且，在伺服器端處理數據，和探索更多的 iOS API，讓 App 有更多的功能 -- 也包含顯示大量不同格式的資料。",
    url: "https://apple.co/teachingcode",
    image:
      "https://github.com/FCU-iOSClub/Website2022ImageBed/blob/main/swift-fundamentals_2x.jpg?raw=true",
  },
];

export default SwiftPage;
