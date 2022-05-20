import * as React from "react";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "../css/gallery.css";

const Gallery = (props) => {
  const context = props.pageContext;

  return (
    <div className="bg-iosbgblue">
      <AppHeader title={context.name} />
      <Navbar />
      <div className="container mx-auto break-all bg-white">
        <div className="h-16" /> {/* 空白區 */}
        <h1 className="pt-12 px-1 text-3xl w-full text-center font-bold">
          {context.name}
        </h1>
        <p className="py-2 text-center w-full text-red-400 font-bold">
          {context.date}
        </p>
        <div className="media-grid">
          <LightGallery
            closeOnTap={true}
            plugins={[lgThumbnail, lgZoom]}
            thumbnail={true}
            download={false}
            addClass={"my-gallery"}
            zoom={true}
          >
            {context.photos.map((item, index) => (
              <a data-src={item} className="w-fit">
                <img src={item} className="w-full md:w-64 lg:w-80 p-3 md:p-1" />
              </a>
            ))}
          </LightGallery>
        </div>
        <div className="h-8" />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
