import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";

const CompanionPage = () => {
  return (
    <div className=" bg-blue-300">
      {/* Header */}
      <AppHeader title="iOS Club 相關單位" />
      {Navbar()}
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0">
        <div className="h-32" /> {/* 空白區塊 */}
        {/* title */}
        <div className="inline-block text-4xl font-bold text-center w-full">
          <h1>iOS Club</h1>
          <h1>社團相關單位</h1>
        </div>
        <div className="h-16" /> {/* 空白區塊 */}
        {/* 上課地點 */}
        <div className="px-2 md:px-32">
          <h2 className="font-bold text-xl">上課地點</h2>
          <div className="h-2 w-1/3 my-5 bg-gray-300" />
          <p className="text-gray-600">
            逢甲大學 Apple 區域教育培訓中心 (RTC, Regional TrainingCenter)
          </p>
          <div className="py-8 grid gap-2 grid-cols-2">
            <img src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/preview" />
            <img src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/preview" />
          </div>
        </div>
        {/* 指導老師 */}
        <div className="px-2 md:px-32">
          <h2 className="font-bold text-xl">指導老師 - 許芳榮 教授</h2>
          <div className="h-2 w-1/3 my-5 bg-gray-300" />
          <p className="text-gray-600">逢甲大學資訊學系第13屆系主任</p>
        </div>
      </div>
      {Footer()}
    </div>
  );
};

export default CompanionPage;
