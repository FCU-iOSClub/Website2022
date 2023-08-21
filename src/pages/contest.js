import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";

const ContestPage = () => {
  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader title="iOS Club - 社團競賽" />
      <Navbar />
      <div className="container mx-auto break-normal bg-white shadow-lg px-3 md:px-20 lg:px-48">
        <div className="h-32" /> {/* 空白 */}
        <h1 className="text-5xl text-center font-bold">iOS Club 競賽</h1>
        <div className="h-16" /> {/* 空白 */}
        {contestData.map((item, index) => {
          return (
            <div className="py-6">
              {/* title */}
              <div className="w-full bg-ioscardblue py-3">
                <h2 className="text-xl text-center text-white font-bold">
                  {item.title}
                </h2>
              </div>
              {/* WWDC end title */}
              {item.contents.map((item) => (
                <div className="border-b w-full pt-8 pb-1 grid grid-rows-1 md:grid-cols-4 text-iostextblue font-medium gap-2">
                  <p className="px-3 text-left md:text-center">{item[0]}</p>
                  <p className="px-3 text-left md:text-center">{item[1]}</p>
                  <p className="px-3 text-left md:text-center">{item[2]}</p>
                  <p className="px-3 text-left md:text-center">{item[3]}</p>
                </div>
              ))}
            </div>
          );
        })}
        <div className="h-16" /> {/* 空白 */}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

const contestData = [
  {
    title: "2023 社團成員競賽得獎名單",
    contents: [
      [
        "App 移動應用創新賽",
        "台灣二等獎",
        "潘柏嘉、王世堯、廖清筆",
        "《健康寶寶》",
      ],
      ["App 移動應用創新賽", "台灣區三等獎", "林楷祐、張仁維", "《Healtheat》"],
    ],
  },
  {
    title: "2022 社團成員競賽得獎名單",
    contents: [
      ["WWDC 全球學生挑戰賽", "獲獎", "魯敬元", "《MusicLearning》"],
      [
        "App 移動應用創新賽",
        "台灣區佳作",
        "余睿霖、李柏霖、潘柏嘉",
        "《無痕地球》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區佳作",
        "黃子騰、廖虹琦、林祺鈞",
        "《美賣》",
      ],
    ],
  },
  {
    title: "2021 社團成員競賽得獎名單",
    contents: [
      ["WWDC 全球學生挑戰賽", "獲獎", "薛竣祐", "《Hello World》"],
      [
        "App 移動應用創新賽",
        "大中華區三等獎",
        "黃子騰、温子瑩、余睿霖",
        "《觸幕可見》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區二等獎",
        "黃子騰、温子瑩、余睿霖",
        "《觸幕可見》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區佳作",
        "林祺鈞、張宸、許友齊",
        "《Magic Drums》",
      ],
    ],
  },
  {
    title: "2020 社團成員競賽得獎名單",
    contents: [
      ["WWDC 全球學生挑戰賽", "獲獎", "薛竣祐", "《Camel Playground》"],
      ["WWDC 全球學生挑戰賽", "獲獎", "劉祐炘", "《Gi的故事》"],
      [
        "App 移動應用創新賽",
        "大中華區三等獎",
        "薛竣祐、黃傳霖、魯敬元",
        "《MC 逆滲透》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區二等獎",
        "薛竣祐、黃傳霖、魯敬元",
        "《MC 逆滲透》",
      ],
    ],
  },
  {
    title: "2019 社團成員競賽得獎名單",
    contents: [
      [
        "App 移動應用創新賽",
        "大中華區一等獎",
        "黃郁洺、霍湛軒、曾昱翔",
        "《Help.Heal.Healthy》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區二等獎",
        "黃郁洺、霍湛軒、曾昱翔",
        "《Help.Heal.Healthy》",
      ],
    ],
  },
  {
    title: "2018 社團成員競賽得獎名單",
    contents: [
      [
        "App 移動應用創新賽",
        "大中華區三等獎",
        "蔡昌銘、賴亨學、劉祐炘",
        "《守護燈塔》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區三等獎",
        "蔡昌銘、賴亨學、劉祐炘",
        "《守護燈塔》",
      ],
    ],
  },
  {
    title: "2017 社團成員競賽得獎名單",
    contents: [
      [
        "App 移動應用創新賽",
        "大中華區特獎",
        "阮揚州、陳薇涵、荊輔翔",
        "《天氣即時預報》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區三等獎",
        "阮揚州、陳薇涵、荊輔翔",
        "《天氣即時預報》",
      ],
    ],
  },
];

export default ContestPage;
