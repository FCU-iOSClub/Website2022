import * as React from "react";
import Navbar from "./compoments/navbar";

const IndexPage = () => {
  return (
    <div className="container mx-auto">
      {Navbar()}
      <div className="py-5 grid sm:grid-cols-2 justify-center">
        <div className="self-center">
          <div className="text-center text-5xl font-bold">
            <h1 className="py-3">We are</h1>
            <h1 className="py-3">iOS Club.</h1>
          </div>
          <p className="py-3 text-center text-gray-700">
            一個教你從零開始打造專屬 Apps 的社團
          </p>
        </div>
        <img
          className="sm:w-4/5 p-3 sm:p-0"
          src={require("../images/svg/logo.svg").default}
          alt="logo"
        ></img>
      </div>
    </div>
  );
};

export default IndexPage;
