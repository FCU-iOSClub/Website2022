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
      <div className="h-96" /> {/* 空白區 */}
      <div className="py-32 text-center text-8xl font-serif">施工中</div>
      <div className="h-96" /> {/* 空白區 */}
      <Footer />
    </div>
  );

  // todo
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      {/* body */}
      <div class="container font-serif mx-auto break-all bg-white shadow-lg px-3 md:px-0 h-screen w-full flex justify-center items-center ">
        <div className="w-full self-center">
          <div className="text-center text-5xl font-bold ">
            <h1 className="text-center md:text-left">iOS Club</h1>
            <h1 className="py-3 text-center md:text-left">歷代社團幹部</h1>
            {/* 橫槓 */}
            <div className="h-2 my-4 bg-slate-700 rounded" />
          </div>
          <div class="p-2 max-w-7xl mx-auto w-full grid grid-cols-9">
            {/* Stack 1 */}
            <div class="col-span-4 w-full h-full">
              <div class="w-full h-full bg-ioscardblue rounded-md p-2 md-pl-4">
                <h1 class="text-white text-xl font-medium py-3">Title</h1>
                <p class="text-gray-100 sm:text-sm text-xs">blablablabla</p>
              </div>
            </div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-ioscardblue"></div>
              <div class="absolute w-6 h-6 rounded-full bg-ioscardblue z-10 text-white text-center">
                1
              </div>
            </div>
            <div class="col-span-4 w-full h-full"></div>
            {/* Stack 2 */}
            <div class="col-span-4 w-full h-full"></div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-ioscardblue"></div>
              <div class="absolute w-6 h-6 rounded-full bg-ioscardblue z-10 text-white text-center">
                2
              </div>
            </div>
            <div class="col-span-4 w-full h-full">
              <div class="w-full h-full bg-ioscardblue rounded-md p-2 md-pl-4">
                <h1 class="text-white text-xl font-medium py-3">Title</h1>
                <p class="text-gray-100 sm:text-sm text-xs">blablablabla</p>
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

export default MembersPage;
