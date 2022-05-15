import * as React from "react";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";

const Gallery = (props) => {
  const context = props.pageContext;
  return (
    <div className="bg-blue-300">
      <AppHeader title={context.name} />
      {Navbar()}
      <div className="container mx-auto break-all bg-white">
        <div className="h-16" /> {/* 空白區 */}
        <h1 className="pt-12 px-1 text-3xl w-full text-center font-bold">
          {context.name}
        </h1>
        <p className="py-2 text-center w-full text-red-400 font-bold">
          {context.date}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-4 items-center">
          {context.photos.map((item, index) => (
            <a href={item}>
              <img src={item} />
            </a>
          ))}
        </div>
      </div>
      {Footer()}
    </div>
  );
};

export default Gallery;
