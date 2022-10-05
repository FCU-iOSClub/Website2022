import * as React from "react";
import AppHeader from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";
import baselineDownloadForOffline from "@iconify/icons-ic/baseline-download-for-offline";

const SwiftPage = () => {
  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      <div className="container font-serif mx-auto break-all bg-white shadow-lg px-3 md:px-0 text-justify">
        {/* 空白區 */}
        <div className="h-32" />

        {/* 第一個section */}
        <div className="mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4 xl:w-5/6">
            <h2 className="text-3xl font-bold break-normal">
              Develop in Swift
              <br />
              App Design Workbook
            </h2>
            <p className="py-10 break-normal">
              The App Design Workbook uses a design thinking framework to teach
              app design--a fundamental skill of iOS app development. You'll
              explore the relationship between app design and coding in Swift
              through each stage of the app design cycle to bring their app idea
              to life.
            </p>
            <div className="flex items-center gap-2">
              <a className="text-blue-800 text-xl">Download now</a>
              <Icon
                icon={baselineDownloadForOffline}
                color="#1e40af"
                width="30"
                height="30"
              />
            </div>
          </div>
          <div className="flex p-2 border border-gray-400 rounded-3xl shadow-2xl">
            <div className="flex">
              <div className="flex flex-col">
                <img
                  className="object-contain"
                  src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/62854a1f-b079-4db3-222e-a04d7f8f1b00/public"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* 空白區 */}
        <div className="h-16" />

        {/* 第二個section */}
        <div className="mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-16 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-3xl font-bold break-normal text-center">
              Develop in Swift curriculum
            </h2>
            <p className="py-10 break-normal">
              Get started or take your skills to the next level. The Develop in
              Swift books are flexible enough to help you whether you’re new to
              coding or want to advance your skills. These books provide
              practical experience in creating apps on Mac using Xcode, the
              integrated development environment used to build apps for Apple
              platforms.
            </p>

            <div className=" flex flex-col md:flex-row gap-24">
              {swiftBooks.map((item, index) => (
                <div className=" flex-1 flex-col">
                  <img className="object-contain " src={item.image} />
                  <p className="break-normal text-2xl font-black text-left py-8">
                    {item.title}
                  </p>

                  <p className="break-left py-4">{item.desc}</p>

                  <a href={item.url} className="text-blue-600 ">
                    View in Apple Books &gt;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 空白區 */}
        <div className="h-16" />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

const learnMoreButton = (href = "/") => {
  return (
    <p className="my-8">
      <a
        className="bg-red-300 w-fit py-3 px-6 rounded-full break-words"
        href={href}
      >
        Learn More
      </a>
    </p>
  );
};

const courseCard = (title, img) => {
  return (
    <div className="py-8 px-1 mx-5 md:mx-3 md:w-full border-gray-300 border shadow-lg rounded-lg flex flex-col items-center">
      <h3 className="text-3xl pb-8 md:p-0 font-bold text-center">{title}</h3>
      <div className="h-5" />
      <img className="w-8/12" src={img} />
    </div>
  );
};

export default SwiftPage;

const swiftBooks = [
  {
    title: "Develop in Swift Explorations",
    desc: "Learn key computing concepts, building a solid foundation in programming with Swift. And, learn about the impact of computing and apps on society, economies, and cultures while exploring iOS app development.",
    url: "https://apple.co/teachingcode",
    image:
      "https://github.com/FCU-iOSClub/Website2022ImageBed/blob/main/swift-data-collections_2x.jpg?raw=true",
  },
  {
    title: "Develop in Swift Fundamentals",
    desc: "Build fundamental iOS app development skills with Swift. And, master the core concepts and practices that Swift programmers use daily and build a basic fluency in Xcode’s source and UI editors.",
    url: "https://apple.co/teachingcode",
    image:
      "https://github.com/FCU-iOSClub/Website2022ImageBed/blob/main/swift-explorations_2x.jpg?raw=true",
  },
  {
    title: "Develop in Swift Data Collections",
    desc: "Extend your knowledge and skill in iOS app development creating more complex and capable apps. And, work with data from a server and explore new iOS APIs that allow for much richer app experiences — including displaying large collections of data in multiple formats.",
    url: "https://apple.co/teachingcode",
    image:
      "https://github.com/FCU-iOSClub/Website2022ImageBed/blob/main/swift-fundamentals_2x.jpg?raw=true",
  },
];
