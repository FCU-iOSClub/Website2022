import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const ContestPage = () => {
  // Google Ads 轉換追蹤
  useGoogleAdsConversion();

  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader title="iOS Club - 社團競賽" />
      <Navbar />
      <div className="container mx-auto break-normal font-serif bg-white shadow-lg px-3 md:px-20 lg:px-24">
        <div className="h-32" />
        {/* 空白 */}
        <h1 className="text-5xl text-center font-black">iOS Club 競賽</h1>
        <div className="h-16" />
        {/* 空白 */}
        {contestData.map((item, index) => {
          return (
            <div className="py-6" key={index}>
              {/* title */}
              <div className="w-full bg-ioscardblue py-3">
                <h2 className="text-xl text-center text-white font-black">
                  {item.title}
                </h2>
              </div>
              {/* WWDC end title */}
              {item.contents.map((item, index) => (
                <div
                  className="border-b w-full py-6 grid grid-rows-1 md:grid-cols-4 text-iostextblue font-bold gap-2 items-center"
                  key={index}
                >
                  <p className="px-2 text-left md:text-center breck-words">{item[0]}</p>
                  <p className="px-2 text-left md:text-center breck-words">{item[1]}</p>
                  <p className="px-2 text-left md:text-center break-words">{item[2]}</p>
                  <p className="px-2 text-left md:text-center break-words">{item[3]}</p>
                </div>
              ))}
            </div>
          );
        })}
        <div className="h-16" />
        {/* 空白 */}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

const contestData = [
  {
    title: "2025 社團成員競賽得獎名單",
    contents: [
      [
        "海峽兩岸青少年創客大賽",
        "開源創新二等獎",
        "蔡承曄、李天宇、陳芷琳、黃軍博",
        "《三診隨行》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "福州大學賽區優秀展覽獎",
        "蔡承曄、李天宇、陳芷琳、黃軍博",
        "《三診隨行》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "開源創新二等獎",
        "凃荃誠、張鈞皓、葉韋坪、謝孟勳",
        "《SpendiX》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "福州大學賽區優秀展覽獎",
        "凃荃誠、張鈞皓、葉韋坪、謝孟勳",
        "《SpendiX》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "開源創新三等獎",
        "廖清筆、顏玉涵、李佳津、陳昱綺",
        "《PetScan 獸醫隨行》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "福州大學賽區優秀展覽獎",
        "廖清筆、顏玉涵、李佳津、陳昱綺",
        "《PetScan 獸醫隨行》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "開源創新三等獎",
        "林楷祐、林瑞城、林雨杭、廖上凱、柯艾妤",
        "《冒險叢聲》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "福州大學賽區最受歡迎獎",
        "林楷祐、林瑞城、林雨杭、廖上凱、柯艾妤",
        "《冒險叢聲》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "福州大學賽區優秀展覽獎",
        "林楷祐、林瑞城、林雨杭、廖上凱、柯艾妤",
        "《冒險叢聲》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "智慧創新應用三等獎",
        "鄭慕岑、王竣翔、林昱銓",
        "《CareSync 照護同步》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "福州大學賽區優秀展覽獎",
        "鄭慕岑、王竣翔、林昱銓",
        "《CareSync 照護同步》",
      ],
      [
        "App 行動應用創新賽",
        "大中華區啟迪賽道二等獎",
        "李柏霖、王奕婷、徐碩涵",
        "《聽損兒童 AI 口語練習平台 - 生聲》",
      ],
      [
        "App 行動應用創新賽",
        "台灣區二等獎",
        "李柏霖、王奕婷、徐碩涵",
        "《聽損兒童 AI 口語練習平台 - 生聲》",
      ],
      [
        "App 行動應用創新賽",
        "台灣區三等獎",
        "李天宇、黃云葶、林雨杭",
        "《VolleyTrace 排球記》",
      ],
      [
        "人文與科技跨域創新實踐競賽",
        "二等獎",
        "林希彥、林楷祐、廖上凱",
        "《Hearo》",
      ],
      [
        "逢甲大學科技創新應用競賽",
        "永續發展類 傑出銀獎",
        "葉韋坪、林永富、范秩嘉",
        "《心智圖共享系統與論文智慧解析之應用程式》",
      ],
      ["WWDC 全球學生挑戰賽", "獲獎", "余睿霖", "《Forest Guardian》"],
      [
        "第二十一屆全國電子設計創意競賽",
        "IEEE Tainan Section 特別獎",
        "蔡承曄、陳芷琳、黃軍博、李天宇",
        "《基於動態追蹤與互動回饋輔助輕偏癱族群之遊戲化手部訓練應用程式》",
      ],
    ],
  },
  {
    title: "2024 社團成員競賽得獎名單",
    contents: [
      [
        "海峽兩岸青少年創客大賽",
        "三等獎",
        "王竣翔、蔡承曄、葉韋坪、黃云葶、許真菱",
        "《健身管家》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "三等獎",
        "潘柏嘉、蕭廷育、梁芷瑄、李岳哲",
        "《專注時刻》",
      ],
      [
        "App 行動應用創新賽",
        "大中華區二等獎",
        "林楷祐、張仁維、邱怡萱",
        "《小博識》",
      ],
      [
        "App 行動應用創新賽",
        "台灣區一等獎",
        "林楷祐、張仁維、邱怡萱",
        "《小博識》",
      ],
      [
        "App 行動應用創新賽",
        "台灣區三等獎",
        "李柏霖、鄭慕岑、許友齊",
        "《CareSync 照護同步》",
      ],
      [
        "App 行動應用創新賽",
        "台灣區三等獎",
        "廖清筆、蔡承曄、黃云葶",
        "《PetScan 獸醫隨行》",
      ],
      ["WWDC 全球學生挑戰賽", "獲獎", "林楷祐", "《Mind Guard》"],
      [
        "第二十屆全國電子設計創意競賽",
        "冠軍",
        "林楷祐、張仁維、蔡承曄、林瑞城、葉韋坪",
        "《基於影像辨識與互動回饋輔助輪椅族群運動之應用程式》",
      ],
    ],
  },
  {
    title: "2023 社團成員競賽得獎名單",
    contents: [
      [
        "海峽兩岸青少年創客大賽",
        "二等獎",
        "鄭慕岑、林昱銓、潘柏嘉、邱思語、王文廷",
        "《享愛家園》",
      ],
      [
        "海峽兩岸青少年創客大賽",
        "三等獎",
        "王竣翔、王世堯、柯艾妤、陳怡晶",
        "《HealthPal》",
      ],
      [
        "App 移動應用創新賽",
        "大中華區二等獎",
        "潘柏嘉、王世堯、廖清筆",
        "《健康寶寶》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區二等獎",
        "潘柏嘉、王世堯、廖清筆",
        "《健康寶寶》",
      ],
      [
        "App 移動應用創新賽",
        "台灣區三等獎",
        "林楷祐、張仁維",
        "《Healtheat》",
      ],
      [
        "人文科技跨領域創新實踐競賽",
        "最佳人氣獎",
        "李柏霖、張宸、陳威仁",
        "《不是吃塑的》",
      ],
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
