import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import { Icon } from "@iconify/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SliderButton from "../components/buttons/slider_button";
import ReverseColorsButton from "../components/buttons/reverse_colors_button";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const ClubActivities = (props) => {
  const iOSClubActivities = props.data.allActivitiesJson.nodes.flatMap(
    (node) => node.contents,
  );

  // Google Ads 轉換追蹤
  useGoogleAdsConversion();

  // 控制是否顯示全部活動
  const [showAll, setShowAll] = useState(false);

  // 設定初始顯示數量
  const DISPLAY_LIMIT = 15;

  // 根據狀態決定顯示的活動
  const displayedActivities = showAll
    ? iOSClubActivities
    : iOSClubActivities.slice(0, DISPLAY_LIMIT);

  return (
    <div>
      <AppHeader
        title="iOS Club - 社團活動"
        description="平時社團活動也不僅僅有社課，我們還會舉辦講座、野餐、WorkShop、社遊、期末聚…等超多活動給社員參加！"
      />
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
              <span className="underline decoration-indigo-500 underline-offset-1">
                講座
              </span>
              、
              <span className="underline decoration-pink-500 underline-offset-1">
                野餐
              </span>
              、
              <span className="underline decoration-sky-500  underline-offset-1">
                Workshop
              </span>
              、
              <span className="underline decoration-indigo-500 underline-offset-1">
                社遊
              </span>
              、
              <span className="underline decoration-pink-500 underline-offset-1">
                期末聚
              </span>
              …等超多活動給社員參加！當然，我們不只和
              <span className="underline decoration-red-500 underline-offset-1">
                葳格高中
              </span>
              建立了長期的任教合作，身為志工性社團，我們還會和相關機構及國小一同舉辦各式各樣的
              <span className="underline decoration-indigo-500 underline-offset-1">
                志工營隊
              </span>
              ，落實將在社內所學回饋社會。
            </p>
            <p className="py-1 text-gray-700 text-justify">
              iOS Club
              致力於軟體開發，以及推廣程式教育，但我們同時也期望能夠給社員舒適的相處環境與豐富的交流活動，歡迎所有志在開發與充滿教育熱誠的人一起加入。
            </p>
            <SliderButton
              text="iOS Club 活動報名"
              hoverText="立即報名"
              className="font-bold"
              onClick={() => {
                window.open("https://lu.ma/user/fcu_iosclub", "_blank");
              }}
            />
          </div>
          <ImageWithPlaceholder
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/16df4e65-734e-420c-b3dd-987123aac900/public"
            alt="iOS Club 社團活動封面"
            className="p-6 place-self-center w-full"
            imgClassName="object-cover"
            aspectRatio="4/3"
          />
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
          {displayedActivities.map((item, index) => {
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

        {/* 顯示更多/收起按鈕 */}
        {iOSClubActivities.length > DISPLAY_LIMIT && (
          <div className="flex justify-center py-8">
            <ReverseColorsButton
              text={
                showAll
                  ? "收起"
                  : `顯示更多（${iOSClubActivities.length - DISPLAY_LIMIT}）`
              }
              icon={
                showAll ? "akar-icons:chevron-up" : "akar-icons:chevron-down"
              }
              onClick={() => setShowAll(!showAll)}
              className="font-serif font-black shadow-md hover:shadow-lg"
              textSize="text-lg"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export const qldata = graphql`
  query ClubActivitiesQuery {
    allActivitiesJson(sort: { academicYear: DESC }) {
      nodes {
        academicYear
        contents {
          title
          date
        }
      }
    }
  }
`;

export default ClubActivities;
