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
              <a class="underline decoration-indigo-500 underline-offset-1">
                講座
              </a>
              、
              <a class="underline decoration-pink-500 underline-offset-1">
                夜烤
              </a>
              、
              <a class="underline decoration-sky-500  underline-offset-1">
                WorkShop
              </a>
              、
              <a class="underline decoration-indigo-500 underline-offset-1">
                社遊
              </a>
              、
              <a class="underline decoration-pink-500 underline-offset-1">
                期末聚
              </a>
              …等超多活動給社員參加！當然，我們不只和
              <a class="underline decoration-red-500 underline-offset-1">
                葳格高中
              </a>
              建立了長期的任教合作，身為志工性社團，我們還會和相關機構及國小一同舉辦各式各樣的
              <a class="underline decoration-indigo-500 underline-offset-1">
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
      <div className="h-16" /> {/* 空白區 */}
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
    title: "葳格 Swift Mini-Camp (北屯)",
    date: "2022-08-06",
  },
  {
    title: "社團旅遊",
    date: "2022-08-20",
  },
  {
    title: "幹部訓練",
    date: "2022-09-01",
  },
  {
    title: "新生茶會",
    date: "2022-09-20",
  },
  {
    title: "社團迎新",
    date: "2022-10-12",
  },
  {
    title: "葳格 Swift Mini-Camp (西屯)",
    date: "2022-10-15",
  },
  {
    title: "iOS Club X 黑客社 聯合夜烤",
    date: "2022-10-19",
  },
  {
    title: "111-1 社員大會",
    date: "2022-11-15",
  },
  {
    title: "講座",
    date: "2022-12-15",
  },
  {
    title: "永安國小 mbot 機器人一日體驗營",
    date: "2022-12-24",
  },

  {
    title: "聖誕期末聚",
    date: "2022-12-17",
  },
];

export default ClubActivities;
