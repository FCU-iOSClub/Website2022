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
        <div className="mx-12 flex flex-col lg:flex-row py-8 px-4 md:px-12 border border-gray-400 rounded-3xl shadow-2xl gap-7 items-center">
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
