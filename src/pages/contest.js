import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";

const ContestPage = () => {
  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader title="iOS Club - 社團競賽" />
      {Navbar()}
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-20 lg:px-48">
        <div className="h-32" /> {/* 空白 */}
        <h1 className="text-5xl text-center font-bold">iOS Club 競賽</h1>
        <div className="h-16" /> {/* 空白 */}
        <div>
          {" "}
          {/* WWDC */}
          <div className="w-full bg-ioscardblue py-3">
            {" "}
            {/* WWDC title */}
            {/* oneline */}
            <h2 className="hidden md:block text-xl text-center text-white font-bold">
              WWDC 全球學生挑戰賽 (Swift Student Challenge)
            </h2>
            {/* two lines */}
            <h2 className="block md:hidden text-xl text-center text-white font-bold">
              WWDC 全球學生挑戰賽
              <br />
              (Swift Student Challenge)
            </h2>
          </div>{" "}
          {/* WWDC end title */}
          {wwdcData.map((item) => (
            <div className="border-b w-full pt-8 pb-1 grid grid-rows-1 md:grid-cols-3 text-iostextblue font-medium gap-2">
              <p className="px-3 text-left md:text-center">{item[0]}</p>
              <p className="px-3 text-left md:text-center">{item[1]}</p>
              <p className="px-3 text-left">{item[2]}</p>
            </div>
          ))}
        </div>
        {/* END WWDC */}
        <div className="h-16" /> {/* 空白 */}
        <div>
          {" "}
          {/* 移動應用 */}
          <div className="w-full bg-ioscardblue py-3">
            {" "}
            {/* WWDC */}
            <h2 className="text-xl text-center text-white font-bold">
              APP 移動應用創新賽
            </h2>
          </div>{" "}
          {/* WWDC end title */}
          {appCreativeData.map((item) => (
            <div className="border-b w-full pt-8 pb-1 grid grid-rows-1 md:grid-cols-3 text-iostextblue font-medium gap-2">
              <p className="px-3 text-left md:text-center">{item[0]}</p>
              <p className="px-3 text-left md:text-center">{item[1]}</p>
              <p className="px-3 text-left">{item[2]}</p>
            </div>
          ))}
        </div>
        {/* 移動應用 */}
        <div className="h-16" /> {/* 空白 */}
      </div>
      {/* footer */}
      {Footer()}
    </div>
  );
};

const wwdcData = [
  ["2021 WWDC 得獎", "薛竣祐 學長", "作品《Hello World》"],
  ["2021 WWDC 得獎", "薛竣祐 學長", "作品《Camel Playground》"],
  ["2020 WWDC 得獎", "劉祐炘 學長", "作品《Gi的故事》"],
];

const appCreativeData = [
  ["2021 大中華區三等獎", "黃子騰、温子瑩、余睿霖", "作品《觸幕可見》"],
  ["2021 台灣區二等獎", "黃子騰、温子瑩、余睿霖", "作品《觸幕可見》"],
  ["2021 台灣區佳作", "林祺鈞、張宸、許友齊", " 作品《Magic Drums》"],
  ["2020 大中華區三等獎", "薛竣祐、黃傳霖、魯敬元", "作品《MC 逆滲透》"],
  ["2020 台灣區二等獎", "薛竣祐、黃傳霖、魯敬元", "作品《MC 逆滲透》"],
  [
    "2019 大中華區一等獎",
    "黃郁洺、霍湛軒、曾昱翔",
    "作品《Help.Heal.Healthy》",
  ],
  ["2019 台灣二等獎", "黃郁洺、霍湛軒、曾昱翔", "作品《Help.Heal.Healthy》"],
  ["2018 大中華區三等獎", "蔡昌銘、賴亨學、劉祐炘", "作品《守護燈塔》"],
  ["2018 台灣區三等獎", "蔡昌銘、賴亨學、劉祐炘", "作品《守護燈塔》"],
  ["2017 大中華區特獎", "阮揚洲、陳薇涵、荊輔翔", "作品《天氣即時預報》"],
  ["2017 台灣區三等獎", "阮揚洲、陳薇涵、荊輔翔", "作品《天氣即時預報》"],
];

export default ContestPage;
