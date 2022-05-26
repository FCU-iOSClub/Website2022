import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import "@splidejs/react-splide/css";

const MembersPage = () => {
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      {/* body */}
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0 font-serif">
        <div className="h-20 md:h-32" /> {/* 空白 */}
        {/* Title */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3 text-center md:text-left">歷代社團幹部</h1>
            </div>
            <p className="py-3 text-gray-700 text-center md:text-left">
              感謝各位幹部的辛苦付出。
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MembersPage;
