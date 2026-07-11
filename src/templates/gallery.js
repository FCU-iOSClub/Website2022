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
      <AppHeader
        title={context.name}
        description={`${context.name}活動相簿，共 ${context.photos.length} 張照片。`}
      />
      <Navbar />
      <main
        id="main-content"
        className="container min-h-screen mx-auto bg-white px-4 pb-16 pt-32 md:px-8"
      >
        <header className="mx-auto mb-10 max-w-3xl text-center font-serif">
          <p className="mb-3 font-bold text-iostextblue">{context.date}</p>
          <h1 className="text-3xl font-black text-gray-900 md:text-4xl">
            {context.name}
          </h1>
          <p className="mt-4 text-gray-600">
            共 {context.photos.length} 張照片，點擊照片可放大瀏覽。
          </p>
        </header>
        <section
          aria-label={`${context.name}照片`}
          className="lightgallery-grid"
        >
          <LightGallery
            closeOnTap={true}
            plugins={[lgThumbnail, lgZoom]}
            thumbnail={true}
            download={false}
            addClass={"my-gallery"}
            zoom={true}
          >
            {context.photos.map((item, index) => (
              <a
                key={item}
                href={item}
                data-src={item}
                aria-label={`放大瀏覽第 ${index + 1} 張照片`}
                className="group block cursor-zoom-in overflow-hidden rounded-xl bg-gray-100 shadow-sm transition duration-200 hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-btnbg/40 motion-reduce:transition-none"
              >
                <div className="relative h-full">
                  <ImageWithPlaceholder
                    src={item}
                    alt={context.name + " 圖片 " + (index + 1)}
                    className="h-full w-full"
                    aspectRatio="4/3"
                    imgClassName="transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <Icon
                    className="absolute bottom-3 right-3 rounded-full bg-gray-900/75 p-2 text-white shadow-md transition-colors group-hover:bg-btnbg motion-reduce:transition-none"
                    icon={zoomIn}
                    width="38"
                    height="38"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </LightGallery>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
