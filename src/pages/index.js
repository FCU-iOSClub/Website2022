import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ReactComponent as AboutIosSvg } from "../images/svg/about_ios.svg";
import { ReactComponent as IosClubDoingSvg } from "../images/svg/iosclub_doing.svg";
import AppHeader from "../components/header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Icon } from "@iconify/react";
import loudspeakerIcon from "@iconify/icons-fluent-emoji-high-contrast/loudspeaker";
import chevronUp from "@iconify/icons-akar-icons/chevron-up";
import chevronDown from "@iconify/icons-akar-icons/chevron-down";

const IndexPage = (props) => {
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      <div className="container mx-auto break-normal bg-white shadow-lg px-3 md:px-0 font-serif">
        <div className="h-20 md:h-32" />
        {/* 空白 */}
        {/* 最新消息 */}
        <AnnouncementLiet data={props.data} />
        {/* We are iOS Club */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3 text-center md:text-left">We are</h1>
              <h1 className="py-3 text-center md:text-left">iOS Club.</h1>
            </div>
            <p className="py-3 text-gray-700 text-center md:text-left">
              一個教你從零開始打造專屬 APP 的社團
            </p>
            <div className="h-2 md:h-2" />
            {/* 空白 */}
            <div className="px-5 md:p-0 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 md:gap-3 w-full bottom-120 left-2">
              {/* Join Us 按鈕 */}
              <button
                className="overflow-hidden group h-12 px-6 border border-btnbg rounded-xs"
                onClick={() => {
                  window.open("https://forms.gle/fDeQoZpK1NSNNDQr6", "_blank");
                }}
              >
                <div className="transition duration-200 group-hover:-translate-y-12">
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    Join Us
                  </div>
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    Welcome
                  </div>
                </div>
              </button>
              {/* 歷代社團幹部 按鈕 */}
              <button
                className="overflow-hidden group h-12 px-6 border bg-btnbg border-btnbg rounded-xs transform hover:bg-ioscardblue hover:border-ioscardblue duration-200"
                onClick={() => {
                  window.location.href = "/members";
                }}
              >
                <div className="h-12 flex items-center justify-center text-white">
                  歷屆幹部
                </div>
              </button>
            </div>
          </div>
          <img
            className="w-full"
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/827f1788-4157-497b-0ecb-6168f73db400/public"
          />
        </div>
        <div className="h-8" />
        {/* About iOS Club. */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <AboutIosSvg className="w-full p-10 md:p-0 bg-cover hidden md:block" />
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">About</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 md:px-12 text-gray-700 text-justify">
              是全台第一個獲得 Apple
              官方認證的社團，也是一個結合學術的志工性社團。每年寒、暑假社員們會有國際交流的機會，到海外參加
              iOS Club 官方舉辦的冬、夏令營，
              和不同國家的學生進行合作活動與技術交流。
            </p>
          </div>
          <AboutIosSvg className="w-full p-10 md:p-0 bg-cover md:hidden" />
        </div>
        <div className="h-32" />
        {/* iOS Club 會做什麼 */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h2 className="py-3">iOS Club</h2>
              <h2 className="py-3">會做什麼</h2>
            </div>
            <p className="py-3 text-gray-700 text-justify">
              在比賽方面， 社團鼓勵所有社員參加對外性比賽。 近年來也都在WWDC
              學生挑戰賽及移動應用創新賽等比賽取得佳績。
              當然，平時社團活動也不僅僅有社課，我們還會舉辦講座、夜烤、WorkShop、社遊、期末聚等，超多活動等你們來參加！
              我們不只和葳格高中建立了長期的任教合作，
              身為志工性社團的我們，還會和相關機構及國小一同舉辦志工營隊，將在社團內所學回饋社會。
            </p>
          </div>
          <IosClubDoingSvg className="w-full" />
        </div>
        <div className="h-16" />
        {/* 空白 */}
        {/* Gallery */}
        <h2 className="text-center text-3xl pt-24 pb-12 font-bold">社團相簿</h2>
        <div className="">
          <Splide
            options={{
              type: "loop",
              focus: "center",
              height: "50vh",
              autoWidth: true,
              gap: "1rem",
              perPage: 1,
              padding: "20%",
              arrows: false,
              drag: false,
              pagination: false,
              autoScroll: {
                speed: 1,
                pauseOnHover: false,
              },
              breakpoints: {
                768: {
                  padding: "15%",
                  height: "30vh",
                  autoWidth: true,
                  autoScroll: {
                    speed: 1,
                    pauseOnHover: false,
                  },
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            {imageList.map((image, index) => (
              <SplideSlide key={index}>
                <img src={image} className="w-full h-full object-cover" />
              </SplideSlide>
            ))}
          </Splide>
          {/* desktopBTN */}
          <div className="hidden md:block w-fit relative bottom-16 left-1/2 -translate-x-1/2">
            <a
              className="bg-btnbg1 text-center py-3 px-6 rounded-full break-words transform hover:bg-red-400 duration-200"
              href="/gallery_list"
            >
              <nobr>點我看更多</nobr>
            </a>
          </div>
        </div>
        {/* mobileBTN */}
        <div className="md:hidden flex w-full py-8 justify-center">
          <a
            className="bg-btnbg1 text-center py-3 px-6 rounded-full break-words transform hover:bg-red-400 duration-200"
            href="/gallery_list"
          >
            <nobr>點我看更多</nobr>
          </a>
        </div>
        {/* iOS Club 做過什麼 */}
        <div className="h-20 md:h-32" />
        {/* 空白 */}
        <h2 className="text-center text-3xl py-3 font-bold">
          iOS Club 做過什麼
        </h2>
        <div className="py-5 px-5 md:grid md:grid-cols-3 md:gap-3 justify-center text-center">
          <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50">
            <h2 className="my-8 text-xl font-bold">社團課程</h2>
            <p className="my-8">每週一、三的晚上 18:30～20:30</p>
            {learnMoreButton("/course")}
          </div>
          <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
            <h2 className="my-8 text-xl font-bold">社團活動</h2>
            <p className="px-2 my-8">
              想知道 iOS Club 每年都有哪些精采活動嗎？
            </p>
            {learnMoreButton("/club_activities")}
          </div>
          <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
            <h2 className="my-8 px-2 text-xl font-bold">社團競賽</h2>
            <p className="my-8">社團每年參加的比賽</p>
            {learnMoreButton("/contest")}
          </div>
        </div>
        {/* 聯絡我們 */}
        <div className="antialiased">
          <div className="flex w-full py-12 md:py-32 justify-center items-center">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-btnbg w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
              <div className="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 className="font-bold text-4xl tracking-wide">
                    Contact US
                  </h1>
                  <p className="pt-2 text-cyan-100">
                    如想更加暸解我們或是想要與我們合作，歡迎洽詢！
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="inline-flex space-x-2 items-center">
                    <Icon
                      icon="carbon:email"
                      width="20"
                      height="20"
                      color="#ffffff"
                    />
                    <a href="mailto:iosclubtw@gmail.com">iosclubtw@gmail.com</a>
                  </div>
                  <div className="inline-flex space-x-2 items-center">
                    <Icon
                      icon="akar-icons:location"
                      width="20"
                      height="20"
                      color="#ffffff"
                    />
                    <a
                      href="https://maps.app.goo.gl/G9PphU6iEHDTnkBeA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      407 台中市西屯區文華路100號 電通館 B04
                    </a>
                  </div>
                </div>
                {/* Social icon */}
                <div className="flex space-x-4 text-lg">
                  {socialItems.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        icon={icon.icon}
                        width="32"
                        height="32"
                        color="#ffffff"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

// 最新消息 react hook
const AnnouncementLiet = (props) => {
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const anns = props.data.allAnnouncementJson.edges;

  // 白底內容的 react hook
  const AnnContent = (props) => {
    const node = props.node;
    return (
      <div className="bg-white p-3 rounded-md flex flex-col gap-3 md:flex-row">
        <div className="grow flex flex-col gap-3">
          <p
            dangerouslySetInnerHTML={{
              __html: node.content.replaceAll("\n", "<br>"),
            }}
          />
          {node.url && node.url.length > 0 && (
            <a
              className="text-blue-500 underline underline-offset-2 font-bold"
              href={node.url}
              target="__blank"
            >
              {node.urlText}
            </a>
          )}
        </div>
        {node.image && node.image.length > 0 && (
          <img className="w-full md:w-48 object-scale-down" src={node.image} />
        )}
      </div>
    );
  };

  const annsHtml = [];
  annsHtml.push(<AnnContent node={anns[0].node} />);
  anns.slice(1, 4).forEach((v) => {
    annsHtml.push(
      <div className="flex items-center gap-2">
        <Icon
          icon={loudspeakerIcon}
          color="#1f2937"
          width="30"
          height="30"
          className="shrink-0"
        />
        <div className="">{v.node.title}</div>
      </div>,
    );
    annsHtml.push(<AnnContent node={v.node} />);
  });

  return (
    <div className="bg-gray-300 shadow-lg md:mx-5 py-4 px-3 rounded-md flex flex-col gap-4 text-justify break-normal">
      <div className="flex items-center gap-2">
        <Icon
          icon={loudspeakerIcon}
          color="#1f2937"
          width="30"
          height="30"
          className="shrink-0"
        />
        <div className="grow">{anns[0].node.title}</div>
        <Icon
          icon={isAnnouncementOpen ? chevronDown : chevronUp}
          color="#1f2937"
          onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}
          className="cursor-pointer shrink-0"
        />
      </div>
      {isAnnouncementOpen && annsHtml}
    </div>
  );
};

const learnMoreButton = (href = "/") => {
  return (
    <p className="my-8">
      <a
        className="w-fit py-3 px-6 rounded-full break-words bg-transparent border border-gray-700 hover:bg-btnbg text-gray-800 hover:text-white"
        href={href}
      >
        <nobr>Learn More</nobr>
      </a>
    </p>
  );
};

// 要顯示在首頁的圖片們
const imageList = [
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/88255dd1-0655-4384-4e5e-005b4e1fb200/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/92687780-790a-45f7-376f-d27f64637b00/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/8c35bcec-d4dc-4a1b-e8e1-4b5e7dd7fb00/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/a61f91ac-335e-46fd-4979-f5c03647f400/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/bf866e78-b554-488a-3291-4ec147e07600/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/92032ce8-af24-4614-7f4d-d9fd4bf13a00/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/7c048532-963c-48a8-3a35-6ca46c25a900/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/18b40513-dd21-4517-abb2-9f5711bf2500/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/a956ab89-a424-4154-3a85-e51b4701a000/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/f06a3c68-7b07-4d45-3bdb-db248af31800/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/7e4bf129-8eef-4b1e-03e7-694353e20400/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/00cae306-6d96-4b4e-faec-fe71793bf500/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/9e6a97b7-9744-4013-0c48-a9886bfcf100/public",
];

const socialItems = [
  {
    name: "Facebook",
    icon: "akar-icons:facebook-fill",
    href: "https://www.facebook.com/FCU.iOSClub",
  },
  {
    name: "Instagram",
    icon: "akar-icons:instagram-fill",
    href: "https://www.instagram.com/fcu.iosclub/",
  },
  {
    name: "Threads",
    icon: "akar-icons:threads-fill",
    href: "https://www.threads.net/@fcu.iosclub",
  },
  {
    name: "Line 社群",
    icon: "bi:line",
    href: "https://line.me/ti/g2/Hcrx-jxTUDGItqDEo0R63w?utm_campaign=default&utm_medium=link_copy&utm_source=invitation",
  },
  {
    name: "Discord",
    icon: "akar-icons:discord-fill",
    href: "https://discord.com/invite/z2VPCNFupv",
  },
  {
    name: "Threads",
    icon: "akar-icons--threads-fill",
    href: "https://www.threads.net/@fcu.iosclub",
  },
];

export const qldata = graphql`
  query IndexQuery {
    allAnnouncementJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          date
          content
          urlText
          url
          image
        }
      }
    }
  }
`;

export default IndexPage;
