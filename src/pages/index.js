import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ReactComponent as IosClubLogoSvg } from "../images/svg/iOSClub_logo.svg";
import { ReactComponent as AboutIosSvg } from "../images/svg/about_ios.svg";
import { ReactComponent as IosClubDoingSvg } from "../images/svg/iosclub_doing.svg";
import AppHeader from "../components/header";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Icon } from "@iconify/react";
import loudspeakerIcon from "@iconify/icons-fluent-emoji-high-contrast/loudspeaker";
import chevronUp from "@iconify/icons-akar-icons/chevron-up";
import chevronDown from "@iconify/icons-akar-icons/chevron-down";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";
import { EXTERNAL_LINKS } from "../constants/navigation";

const IndexPage = (props) => {
  // Google Ads 轉換追蹤
  useGoogleAdsConversion();

  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      <main className="container mx-auto max-w-[1440px] overflow-hidden bg-white font-serif text-slate-900 shadow-xl">
        <div className="h-24 md:h-32" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnnouncementList data={props.data} />
        </div>

        <section className="relative mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-24">
          <div className="relative z-10 text-center md:text-left">
            <p className="mb-5 text-sm font-bold tracking-[0.22em] text-iostextblue uppercase">
              Feng Chia University · Since 2016
            </p>
            <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] font-bold tracking-[-0.055em] text-slate-950">
              We are
              <span className="mt-2 block text-btnbg">iOS Club.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600 md:mx-0 md:text-xl">
              一個教你從零開始打造專屬 App
              的社團。把好奇心帶來，和我們一起學習、創作、參賽。
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-btnbg px-8 py-3 font-bold text-white shadow-[0_12px_28px_rgba(68,84,132,0.28)] transition-colors duration-200 hover:bg-[#53679d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-btnbg"
                href={EXTERNAL_LINKS.joinUs}
                target="_blank"
                rel="noreferrer"
              >
                加入我們
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-8 py-3 font-bold text-slate-700 transition-colors duration-200 hover:border-btnbg hover:bg-slate-50 hover:text-btnbg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-btnbg"
                href="/members"
              >
                認識歷屆幹部
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <IosClubLogoSvg className="relative w-full p-12 drop-shadow-[0_24px_30px_rgba(68,84,132,0.16)] md:p-10" />
          </div>
        </section>

        <section className="bg-[#f4f7fa] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <AboutIosSvg className="order-2 w-full md:order-1" />
            <div className="order-1 md:order-2">
              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-iostextblue uppercase">
                About us
              </p>
              <h2 className="text-4xl leading-tight font-bold tracking-tight text-slate-950 md:text-6xl">
                不只學寫程式，
                <span className="block text-btnbg">也一起看見世界。</span>
              </h2>
              <p className="mt-7 text-lg leading-9 text-slate-600">
                我們是全臺首個獲得 Apple
                官方認證的社團，也是一個結合學術的志工性社團。每年暑假，社員有機會到海外參加比賽，和不同國家的學生合作與技術交流。
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-iostextblue uppercase">
                Learn · Build · Share
              </p>
              <h2 className="text-4xl leading-tight font-bold tracking-tight text-slate-950 md:text-6xl">
                從一行程式，
                <span className="block text-btnbg">做到真正的作品。</span>
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-9 text-slate-600">
                <p>
                  社團鼓勵社員參與 WWDC
                  學生挑戰賽、行動應用創新賽等競賽，近年屢獲佳績，也在不同領域展現實力。
                </p>
                <p>
                  除了 RTC 認證社課，我們也定期舉辦講座、Workshop
                  與社內競賽，並透過野餐、社遊和期末聚，讓社員在學習之外建立連結。
                </p>
                <p>
                  身為志工性社團，我們也與相關機構及國小合作舉辦營隊，將在社團所學回饋社會。
                </p>
              </div>
            </div>
            <IosClubDoingSvg className="w-full" />
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 text-slate-900 md:py-28">
          <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-5 px-5 md:mb-14 md:flex-row md:items-end md:justify-between md:px-8">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-iostextblue uppercase">
                Club moments
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                社團相簿
              </h2>
            </div>
            <a
              className="w-fit border-b border-slate-400 pb-1 text-lg text-slate-700 transition-colors duration-200 hover:border-btnbg hover:text-btnbg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-btnbg"
              href="/gallery_list"
            >
              看更多精彩時刻 →
            </a>
          </div>
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
              drag: true,
              pagination: false,
              autoScroll: {
                speed: 1,
                pauseOnHover: true,
              },
              breakpoints: {
                768: {
                  padding: "15%",
                  height: "30vh",
                  autoWidth: true,
                  autoScroll: {
                    speed: 1,
                    pauseOnHover: true,
                  },
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            {imageList.map((image, index) => (
              <SplideSlide key={index}>
                <ImageWithPlaceholder
                  src={image}
                  alt={"首頁輪播圖 " + (index + 1)}
                  className="h-full w-full overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(68,84,132,0.16)]"
                  imgClassName="object-cover"
                />
              </SplideSlide>
            ))}
          </Splide>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-center text-sm font-bold tracking-[0.2em] text-iostextblue uppercase">
              Explore the club
            </p>
            <h2 className="text-center text-4xl font-bold tracking-tight md:text-6xl">
              在 iOS Club，找到你的下一步
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {clubLinks.map((item, index) => (
                <a
                  key={item.href}
                  className="group flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-colors duration-200 hover:border-ioscardblue hover:bg-[#f8fafc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-btnbg"
                  href={item.href}
                >
                  <span className="text-sm font-bold tracking-[0.18em] text-iostextblue">
                    0{index + 1}
                  </span>
                  <h3 className="mt-10 text-3xl font-bold">{item.title}</h3>
                  <p className="mt-4 grow text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-8 font-bold text-btnbg transition-colors group-hover:text-iostextblue">
                    了解更多 →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-btnbg px-7 py-12 text-white shadow-[0_24px_60px_rgba(68,84,132,0.3)] md:px-14 md:py-16">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full border-[48px] border-white/5" />
            <div className="relative grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-iospink uppercase">
                  Contact us
                </p>
                <h2 className="mt-4 text-4xl leading-tight font-bold md:text-6xl">
                  一起做點
                  <br />
                  有趣的事。
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-lg leading-8 text-slate-100">
                  想更加了解我們，或是有合作提案？歡迎寄信或直接來社辦找我們聊聊。
                </p>
                <div className="mt-7 space-y-4">
                  <a
                    className="flex w-fit items-center gap-3 break-all underline decoration-white/40 underline-offset-4 transition-colors hover:text-iospink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="mailto:iosclub@mail.iosclub.tw"
                  >
                    <Icon icon="carbon:email" className="h-5 w-5 shrink-0" />
                    iosclub@mail.iosclub.tw
                  </a>
                  <a
                    className="flex w-fit items-start gap-3 underline decoration-white/40 underline-offset-4 transition-colors hover:text-iospink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="https://maps.app.goo.gl/G9PphU6iEHDTnkBeA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="akar-icons:location"
                      className="mt-1 h-5 w-5 shrink-0"
                    />
                    407102 臺中市西屯區文華路 100 號 電子通訊館 B04
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {socialItems.map((item) => (
                    <a
                      key={item.name}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition-colors duration-200 hover:border-white hover:bg-white hover:text-btnbg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                    >
                      <Icon icon={item.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

// 最新消息
const AnnouncementList = (props) => {
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const anns = props.data.allAnnouncementJson.edges;
  const latestAnnouncement = anns[0].node;

  return (
    <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <button
        className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btnbg md:px-6"
        type="button"
        aria-expanded={isAnnouncementOpen}
        aria-controls="announcements"
        onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-btnbg text-white">
          <Icon icon={loudspeakerIcon} className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 grow">
          <span className="block text-xs font-bold tracking-[0.16em] text-iostextblue uppercase">
            Latest news
          </span>
          <span className="mt-1 block truncate font-bold text-slate-800">
            {latestAnnouncement.title}
          </span>
        </span>
        <span className="hidden shrink-0 text-sm text-slate-500 sm:block">
          {latestAnnouncement.date}
        </span>
        <Icon
          icon={isAnnouncementOpen ? chevronUp : chevronDown}
          className="h-5 w-5 shrink-0 text-slate-600"
          aria-hidden="true"
        />
      </button>
      {isAnnouncementOpen && (
        <div
          id="announcements"
          className="space-y-4 border-t border-slate-200 p-4 md:p-6"
        >
          {anns.slice(0, 4).map(({ node }) => (
            <article
              key={node.id}
              className="flex flex-col gap-5 rounded-xl bg-white p-5 md:flex-row md:p-6"
            >
              <div className="grow">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    {node.title}
                  </h3>
                  <time className="shrink-0 text-sm text-slate-500">
                    {node.date}
                  </time>
                </div>
                <p
                  className="mt-4 leading-7 text-slate-600"
                  dangerouslySetInnerHTML={{
                    __html: node.content.replaceAll("\n", "<br>"),
                  }}
                />
                {node.url && node.url.length > 0 && (
                  <a
                    className="mt-4 inline-block font-bold text-btnbg underline decoration-btnbg/30 underline-offset-4 hover:text-iostextblue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-btnbg"
                    href={node.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {node.urlText}
                  </a>
                )}
              </div>
              {node.image && node.image.length > 0 && (
                <ImageWithPlaceholder
                  src={node.image}
                  alt={node.title}
                  className="w-full rounded-lg md:w-72 md:shrink-0"
                  objectFit="scale-down"
                  aspectRatio="4/3"
                />
              )}
            </article>
          ))}
        </div>
      )}
    </aside>
  );
};

const clubLinks = [
  {
    title: "社團課程",
    description: "每週二、三晚上，從 Swift 基礎一路做到自己的 App。",
    href: "/course",
  },
  {
    title: "社團活動",
    description: "講座、Workshop、社遊與聚會，看看我們每年如何一起成長。",
    href: "/club_activities",
  },
  {
    title: "社團競賽",
    description: "走上 WWDC 與各大競賽舞台，讓創意成為真正被看見的作品。",
    href: "/contest",
  },
];

// 要顯示在首頁的圖片們
const imageList = [
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/e3b0bc3d-5c13-422b-8524-0ac7b4563b00/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/1b186e6d-cf5e-4af7-5506-1addebe02400/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/a44dc494-94ec-45a2-d0c8-af772d03f000/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/fe39da5e-13ff-4765-2f2b-c13789763100/public",
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
    href: "https://www.instagram.com/fcu.iosclub",
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
];

export const qldata = graphql`
  query IndexQuery {
    allAnnouncementJson(sort: { date: DESC }) {
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
