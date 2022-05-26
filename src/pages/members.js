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
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0 font-serif"></div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MembersPage;
