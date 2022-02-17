import * as React from "react";
import Navbar from "./compoments/navbar";

const IndexPage = () => {
  return (
    <div>
      {Navbar()}
      <div className="container mx-auto">
        <div className="h-32"></div> {/* 空白區 */}
        {/* 部分一 */}
        <div className="py-5 sm:flex sm:p-10 sm:space-x-10 justify-center">
          <div className=" sm:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">We are</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              一個教你從零開始打造專屬 Apps 的社團
            </p>
          </div>
          <img
            className="w-full sm:w-6/12 p-10 sm:p-0"
            src={require("../images/svg/logo.svg").default}
            alt="logo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
