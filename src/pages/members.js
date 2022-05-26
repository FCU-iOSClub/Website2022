import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";
import { ReactComponent as AboutIosSvg } from "../images/svg/about_ios.svg";
import { ReactComponent as IosClubDoingSvg } from "../images/svg/iosclub_doing.svg";
import AppHeader from "../components/header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const MembersPage = () => {
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      {/* body */}
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0 font-serif"></div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MembersPage;
