import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet";
import SwiftUI from "../images/course/mac3.png";
import mbot from "../images/course/mbot.jpg";
import sphero from "../images/course/sphero.jpg";
import map from "../images/course/map.jpg";

const Course = () => {
  return (
    <div>
      {/* Header */}
      <Helmet>
        <title>iOS Club</title>
      </Helmet>git
      
      {Navbar()}

      <div className="container mx-auto break-all">
        <div className="py-5 md:flex md:p-10  justify-center">
          <div className=" w-full md:w-9/12 p-10 md:p-0">
            <img src={ SwiftUI }/>
          </div>
          <div className="md:w-3/12 w-full self-center ">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">課程大綱</h1>
            </div>
            <p className="py-3 text-center text-gray-700 break-normal">
            iOS Club 社課主要內容為利用 Xcode 開發 iOS App ，讓大家能透過實作熟悉Swift UI 的應用與佈局，最終達到具備獨立開發的能力。教學長們也將透過循序漸進的教學模式，讓大家都能從 0 開始輕鬆駕馭 App 開發，我們提供的課程就算是沒有程式基礎都能參與！快來加入 iOS Club 創造自己的 APP 吧 ~
            </p>  
          </div>
        </div>
        <div className="py-5 md:flex md:p-10 justify-center">
          <div className="w-4/12 md:w-9/12 p-10 md:9-0">
            <img src={ sphero } />
          </div>
          <p className="w-2/12 md:w-9/12 p-10 md:9-0 self-center">
            sphero----------------------------------------------
          </p>
          <div className="w-4/12 md:w-9/12 p-10 md:9-0 scale-150">
            <img src={ mbot }/>
          </div>  
          <p className="w-2/12 md:w-9/12 p-10 md:9-0 self-center">
            mbot-----------------------------------------
          </p>
        </div>
        <div className="py-5 md:flex md:p-10 justify-center">
          <div className=" w-full md:w-9/12 p-10 md:p-0 scale-75">
            <img src={ map }/>
          </div>
          <div className="md:w-3/12 w-full self-center ">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">課程大綱</h1>
            </div>
            <p className="py-3 text-center text-gray-700 break-normal">
            iOS Club 社課主要內容為利用 Xcode 開發 iOS App ，讓大家能透過實作熟悉Swift UI 的應用與佈局，最終達到具備獨立開發的能力。教學長們也將透過循序漸進的教學模式，讓大家都能從 0 開始輕鬆駕馭 App 開發，我們提供的課程就算是沒有程式基礎都能參與！快來加入 iOS Club 創造自己的 APP 吧 ~
            </p>  
          </div>
        </div>
      </div>
      {Footer()}
    </div>
  );
};

export default Course;