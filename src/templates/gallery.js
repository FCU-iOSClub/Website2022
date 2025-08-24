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
import { Icon } from "@iconify/react";
import zoomIn from "@iconify/icons-akar-icons/zoom-in";
import ImageWithPlaceholder from "../components/image-with-placeholder";

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
        <div className="lightgallery-grid">
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
                <div className="relative">
                  <ImageWithPlaceholder
                    src={item}
                    alt={context.name + " 圖片 " + (index + 1)}
                    className="w-full md:w-64 lg:w-80 p-3 md:p-1"
                    aspectRatio="4/3"
                    imgClassName=""
                  />
                  <Icon
                    className="absolute bottom-1 right-1 bg-gray-600 bg-opacity-70 p-1"
                    icon={zoomIn}
                    width="40"
                    height="40"
                    color="white"
                  />
                </div>
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
