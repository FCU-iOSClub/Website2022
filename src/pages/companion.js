import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";

import ImageWithPlaceholder from "../components/image-with-placeholder";

const CompanionPage = () => {
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader title="iOS Club 相關單位" />
      {Navbar()}
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0">
        <div className="h-32" /> {/* 空白區塊 */}
        {/* title */}
        <div className="inline-block text-4xl font-bold text-center w-full">
          <h1 className="leading-loose">
            iOS Club
            <br />
            社團相關單位
          </h1>
        </div>
        <div className="h-16" /> {/* 空白區塊 */}
        {/* 上課地點 */}
        <div className="px-2 md:px-32">
          <h2 className="font-bold text-xl">上課地點</h2>
          <div className="h-2 w-10/12 md:w-1/3 my-5 bg-gray-300" /> {/* 橫槓 */}
          <p className="text-gray-600">
            逢甲大學 Apple 區域教育培訓中心 (RTC, Regional Training Center)
          </p>
          <div className="py-8 grid gap-4 grid-cols-1 md:grid-cols-2">
            <ImageWithPlaceholder
              src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/c9d69060-fa81-40a2-f057-9d288972d300/public"
              alt="RTC 上課地點 1"
              className="w-full"
              imgClassName="object-cover"
              aspectRatio="16/9"
            />
            <ImageWithPlaceholder
              src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/45ee13ce-3d35-4f03-2955-85d5d8a2c000/public"
              alt="RTC 上課地點 2"
              className="w-full"
              imgClassName="object-cover"
              aspectRatio="16/9"
            />
          </div>
        </div>
        {/* 指導老師 */}
        <div className="px-2 md:px-32">
          <div className="h-20" /> {/* 空白區塊 */}
          <h2 className="font-bold text-xl">指導老師 - 許芳榮 教授</h2>
          <div className="h-2 w-10/12 md:w-1/3 my-5 bg-gray-300" /> {/* 橫槓 */}
          <p className="text-gray-600 py-2">
            逢甲大學資訊學系第13屆系主任 (104 / 8 ~ 107 / 7)
          </p>
          <p className="text-gray-600 py-2">分機：#3755 #6602</p>
          <p className="text-gray-600 py-2">
            信箱：<a href="mailto:frhsu@fcu.edu.tw">frhsu@fcu.edu.tw</a>
          </p>
          <p className="text-gray-600 py-2">
            研究專長：大數據分析、演算法、雲端運算、生物資訊
          </p>
        </div>
        {/* 學校相關單位 */}
        <div className="px-2 md:px-32">
          <div className="h-20" /> {/* 空白區塊 */}
          <h2 className="font-bold text-xl">學校相關單位</h2>
          <div className="h-2 w-10/12 md:w-1/3 my-5 bg-gray-300" /> {/* 橫槓 */}
          {/* 資電 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-0">
            <div>
              <h3
                className="px-4 my-3 py-2 w-fit text-white"
                style={{ backgroundColor: "#8098B5" }}
              >
                逢甲大學資訊電機學院
              </h3>
              <p className="text-gray-600 py-2">
                通訊地址：台中市西屯區文華路 100 號資電館 2F 資電202
              </p>
              <p className="text-gray-600 py-2">
                聯絡電話：04-2451-7250 轉 3991
              </p>
              <p className="text-gray-600 py-2">
                信箱：<a href="mailto:coiee@fcu.edu.tw">coiee@fcu.edu.tw</a>
              </p>
            </div>
            <ImageWithPlaceholder
              src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/c763fee2-7c29-419e-d516-a44257a81600/public"
              alt="逢甲大學資訊電機學院"
              className="place-self-center w-3/5"
              imgClassName="object-cover"
              aspectRatio="16/9"
            />
          </div>
          <div className="h-20" /> {/* 空白區塊 */}
          {/* 推廣處 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-0">
            <div>
              <h3
                className="px-4 my-3 py-2 w-fit text-white"
                style={{ backgroundColor: "#8098B5" }}
              >
                逢甲大學教育推廣處
              </h3>
              <p className="text-gray-600 py-2">
                通訊地址：台中市 40724 西屯區文華路100號 行政二館一樓
              </p>
              <p className="text-gray-600 py-2">
                聯絡電話：04-2451-7250 轉 2411
              </p>
              <p className="text-gray-600 py-2">傳真電話：04-2451-4503</p>
              <p className="text-gray-600 py-2">
                信箱：
                <a href="mailto:extension@fcu.edu.tw">extension@fcu.edu.tw</a>
              </p>
            </div>
            <ImageWithPlaceholder
              src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/a6569fdb-8cd4-4be4-d941-ee653a37a800/public"
              alt="逢甲大學教育推廣處"
              className="place-self-center w-3/5"
              imgClassName="object-cover"
              aspectRatio="16/9"
            />
          </div>
        </div>
        {/* 社團合作夥伴 */}
        <div className="px-2 md:px-32">
          <div className="h-20" /> {/* 空白區塊 */}
          <h2 className="font-bold text-xl">社團合作夥伴</h2>
          <div className="h-2 w-10/12 md:w-1/3 my-5 bg-gray-300" /> {/* 橫槓 */}
          {/* 葳格 */}
          <div>
            <div>
              <h3
                className="px-4 my-3 py-2 w-fit text-white"
                style={{ backgroundColor: "#8098B5" }}
              >
                葳格國際學校 | 北屯校區
              </h3>
              <p className="font-bold text-gray-700 py-2">
                # 開設兩堂程式教育課程
              </p>
              <p className="text-gray-600 py-2">
                通訊地址：台中市 40644 北屯區軍福十八路 328 號
              </p>
              <p className="text-gray-600 py-2">聯絡電話：04-2437-1728</p>
            </div>
            <div className="py-8 grid gap-4 grid-cols-1 md:grid-cols-2">
              <ImageWithPlaceholder
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/184fe43c-9400-4219-fd6f-149a5c6be600/public"
                alt="葳格國際學校 北屯校區 1"
                className="w-full"
                imgClassName="object-cover"
                aspectRatio="16/9"
              />
              <ImageWithPlaceholder
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/4467d4ba-878b-46dc-65dc-bb8c63a05a00/public"
                alt="葳格國際學校 北屯校區 2"
                className="w-full"
                imgClassName="object-cover"
                aspectRatio="16/9"
              />
            </div>
          </div>
          <div className="h-20" /> {/* 空白區塊 */}
          {/* Straight A */}
          <div>
            <div>
              <h3
                className="px-4 my-3 py-2 w-fit text-white"
                style={{ backgroundColor: "#8098B5" }}
              >
                Straight A (逢甲大學)
              </h3>
              <p className="text-gray-600 py-2">
                通訊地址：台中市 40724 西屯區文華路100號 (逢甲大學人言大樓1F)
              </p>
              <p className="text-gray-600 py-2">聯絡電話：04-2452-4971</p>
              <p className="text-gray-600 py-2">傳真電話：04-2452-0332</p>
              <a
                className="text-gray-600 py-2 underline underline-offset-1"
                target="_blank"
                href="https://www.facebook.com/straightafcu/photos/?ref=page_internal"
                rel="noreferrer"
              >
                Facebook 粉絲專頁
              </a>
            </div>
            <div className="py-8 grid gap-4 grid-cols-1 md:grid-cols-2">
              <ImageWithPlaceholder
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/55adb3f1-9541-4637-8fff-3abadf04b600/public"
                alt="Straight A 1"
                className="w-full"
                imgClassName="object-cover"
                aspectRatio="16/9"
              />
              <ImageWithPlaceholder
                src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/d1430294-19cf-4eeb-0218-e5dfd771ec00/public"
                alt="Straight A 2"
                className="w-full"
                imgClassName="object-cover"
                aspectRatio="16/9"
              />
            </div>
          </div>
        </div>
        <div className="h-20" /> {/* 空白區塊 */}
      </div>
      {Footer()}
    </div>
  );
};

export default CompanionPage;
