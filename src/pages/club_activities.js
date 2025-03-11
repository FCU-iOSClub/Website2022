import * as React from "react";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ClubActivities = () => {
  return (
    <div>
      <AppHeader title="iOS Club - 社團活動" />
      <Navbar />
      <div className="h-32" /> {/* 空白區 */}
      <div className="px-3 md:px-32">
        <h1 className="hidden">iOS Club 社團活動</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 font-serif">
          <div className="">
            <p className="font-bold text-blue-200 text-3xl">關於..</p>
            <p className="pt-3 font-bold text-black text-5xl">iOS Club</p>
            <p className="pt-3 font-bold text-black text-5xl">社團活動</p>
            <p className="py-4 text-gray-700 text-justify">
              平時社團活動也不僅僅有社課，我們還會舉辦
              <a className="underline decoration-indigo-500 underline-offset-1">
                講座
              </a>
              、
              <a className="underline decoration-pink-500 underline-offset-1">
                野餐
              </a>
              、
              <a className="underline decoration-sky-500  underline-offset-1">
                WorkShop
              </a>
              、
              <a className="underline decoration-indigo-500 underline-offset-1">
                社遊
              </a>
              、
              <a className="underline decoration-pink-500 underline-offset-1">
                期末聚
              </a>
              …等超多活動給社員參加！當然，我們不只和
              <a className="underline decoration-red-500 underline-offset-1">
                葳格高中
              </a>
              建立了長期的任教合作，身為志工性社團，我們還會和相關機構及國小一同舉辦各式各樣的
              <a className="underline decoration-indigo-500 underline-offset-1">
                志工營隊
              </a>
              ，落實將在社內所學回饋社會。
            </p>
            <p className="py-1 text-gray-700 text-justify">
              iOS Club
              致力於軟體開發，以及推廣程式教育，但我們同時也期望能夠給社員舒適的相處環境與豐富的交流活動，歡迎所有志在開發與充滿教育熱誠的人一起加入。
            </p>
          </div>
          <img
            className="p-6 place-self-center"
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public"
          />
        </div>
      </div>
      {/* Luma行事曆嵌入區塊 */}
      <div className="px-0 md:px-32">
        <div className="flex justify-center items-center my-4">
          <iframe
            src="https://lu.ma/embed/calendar/cal-un8SDO2wxuRgfWj/events?lt=light"
            width="100%"
            height="225"
            style={{
              border: "1px solid #bfcbda88", // 透過 CSS 控制邊框
              borderRadius: "10px",
            }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <div className="h-8" /> {/* 空白區 */}
      {/* 閱讀更多區塊 */}
      <div className="bg-iosbgblue flex flex-col items-center">
        <p className="font-serif pt-10 text-center w-full bg-iosbgblue text-xl font-bold">
          往下看更多
        </p>
        <div className="h-9" />
        <div className="pb-8 animate-bounce">
          <Icon icon="akar-icons:triangle-fill" color="#8098b5" rotate={2} />
        </div>
      </div>
      {/* 時間軸區塊 */}
      <div className="">
        <VerticalTimeline lineColor="#C4D5E2">
          {iOSClubActivities.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={item.date}
                dateClassName="text-gray-700 font-serif "
                contentStyle={{ background: "#F5E3E3" }}
                contentArrowStyle={{ borderRight: "8px solid #F5E3E3" }}
                iconStyle={{ background: "#7894b3" }}
                icon={<Icon icon="akar-icons:calendar" color="#fff" />}
              >
                <h3 className="text-center font-serif text-base">
                  {item.title}
                </h3>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-gray-700"
            iconStyle={{ background: "#8098B5" }}
            icon={<Icon icon="akar-icons:more-vertical-fill" color="#fff" />}
          />
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
};

const iOSClubActivities = [
  {
    title: "Workshop",
    date: "2025-05-06、13",
  },
  {
    title: "社員大會暨社長選舉",
    date: "2025-04-23",
  },
  {
    title: "企業參訪（國泰金控）",
    date: "2025-03-28",
  },
  {
    title: "有氧體適能社聯合活動",
    date: "2025-03-10",
  },
  {
    title: "葳格營隊",
    date: "2025-01-11",
  },
  {
    title: "社團期末聚",
    date: "2024-12-23",
  },
  {
    title: "學長回娘家經驗分享講座",
    date: "2024-12-04",
  },
  {
    title: "社團野餐",
    date: "2024-11-11",
  },
  {
    title: "113-1 社員大會",
    date: "2024-10-30",
  },
  {
    title: "iOS Club 社團迎新",
    date: "2024-10-17",
  },
  {
    title: "試上課",
    date: "2024-09-23",
  },
  {
    title: "iOS Club 第8屆新生茶會",
    date: "2024-09-19",
  },
  {
    title: "暑期幹部訓練",
    date: "2024-09-07 ~ 2023-09-08",
  },
  {
    title: "社團博覽會",
    date: "2024-09-02",
  },
  {
    title: "社團旅遊(宜蘭)",
    date: "2024-08-30 ~ 2024-09-01",
  },
  {
    title: "行動應用創新賽 Workshop",
    date: "2024-05-08 、 2024-05-15",
  },
  {
    title: "幹部交接典禮",
    date: "2024-05-03",
  },
  {
    title: "企業參訪",
    date: "2024-05-03",
  },
  {
    title: "社員大會暨社長選舉",
    date: "2024-04-24",
  },
  {
    title: "寒假幹部訓練",
    date: "2024-02-18",
  },
  {
    title: "逢甲大學 iOS Club x 葳格中學 用程式玩轉校園-機器人體驗營",
    date: "2024-01-14",
  },
  {
    title: "社團期末聚",
    date: "2023-12-26",
  },
  {
    title: "112-1 社員大會",
    date: "2023-11-14",
  },
  {
    title: "iOS Club x 夢種子聯合夜烤",
    date: "2023-10-12",
  },
  {
    title: "試上課",
    date: "2023-09-26",
  },
  {
    title: "iOS Club 第7屆新生茶會",
    date: "2023-09-21",
  },
  {
    title: "社團博覽會",
    date: "2023-09-13",
  },
  {
    title: "暑期幹部訓練",
    date: "2023-09-08 ~ 2023-09-10",
  },
  {
    title: "社團旅遊(澎湖)",
    date: "2023-08-11 ~ 2023-08-13",
  },
  {
    title: "移動應用創新賽 Workshop",
    date: "2023-05-16 、 2023-05-23",
  },
  {
    title: "幹部交接典禮",
    date: "2023-05-09",
  },
  {
    title: "第7屆社長選舉大會",
    date: "2023-04-25",
  },
  {
    title: "永安國小 mbot 機器人一日進階體驗營",
    date: "2023-04-22",
  },
  {
    title: "葳格國小參訪",
    date: "2023-04-20",
  },
  {
    title: "111-2社員大會",
    date: "2023-03-01",
  },
  {
    title: "寒假幹部訓練",
    date: "2023-02-11 ~ 2023-2-12",
  },
  {
    title: "iOS Club 聖誕期末聚",
    date: "2022-12-17",
  },
  {
    title: "永安國小 mbot 機器人一日體驗營",
    date: "2022-12-24",
  },
  {
    title: "商業 App x 系統開發•經驗分享講座",
    date: "2022-12-15",
  },
  {
    title: "111-1 社員大會",
    date: "2022-11-15",
  },
  {
    title: "iOS Club X 黑客社 聯合夜烤",
    date: "2022-10-19",
  },
  {
    title: "葳格 Swift Mini-Camp (西屯)",
    date: "2022-10-15",
  },
  {
    title: "iOS Club 社團迎新",
    date: "2022-10-12",
  },
  {
    title: "iOS Club 迎新茶會暨 Apple WWDC 獎學金參賽說明會",
    date: "2022-09-20",
  },
  {
    title: "暑期幹部訓練",
    date: "2022-09-01",
  },
  {
    title: "社團旅遊(墾丁)",
    date: "2022-08-20",
  },
  {
    title: "葳格 Swift Mini-Camp (北屯)",
    date: "2022-08-06",
  },
];

export default ClubActivities;
