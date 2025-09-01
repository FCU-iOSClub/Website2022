import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Icon } from "@iconify/react";
import openInNew from "@iconify/icons-ic/baseline-open-in-new";
import Pagination from "rc-pagination";
import "../css/pagination.css";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const GalleryList = ({ data }) => {
  useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Google Ads 轉換追蹤
  useGoogleAdsConversion();
  const itemCount = data.allGalleryJson.edges.length;
  const perPage = 8;
  const onPageChange = (page) => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 300)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    setCurrentPage(page);
  };

  return (
    <div className="bg-iosbgblue ">
      <AppHeader title="iOS Club 活動相簿" />
      <Navbar />
      <div className="container p-3 md:p-0 mx-auto break-all bg-white  font-serif">
        <div className="h-8" /> {/* 空白區 */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-center mt-24 font-bold">活動相簿</h1>
          <div className="h-8" /> {/* 空白區 */}
          <Pagination
            current={currentPage}
            onChange={onPageChange}
            total={itemCount}
            pageSize={perPage}
          />
          <div className="h-8" /> {/* 空白區 */}
          <div className="flex gap-y-10 flex-col items-center">
            {data.allGalleryJson.edges.map((item, index) =>
              index >= (currentPage - 1) * perPage &&
              index < currentPage * perPage
                ? galleryItem(item.node)
                : null,
            )}
          </div>
          <div className="h-8" /> {/* 空白區 */}
          <Pagination
            current={currentPage}
            onChange={onPageChange}
            total={itemCount}
            pageSize={perPage}
          />
        </div>
        <div className="h-12"></div>
      </div>
      <Footer />
    </div>
  );
};

const galleryItem = (node) => {
  return (
    <div className="box-border grid md:grid-cols-2 h-fit md:h-72 w-full md:w-3/5 rounded-md shadow-lg border border-gray-400 font-serif">
      <div className="py-2 px-8 w-full h-full flex flex-col justify-items-center gap-4 md:gap-0 md:justify-evenly">
        <h2 className="mt-4 text-xl font-bold text-center">{node.name}</h2>
        <div className="font-bold text-gray-700">時間：{node.date}</div>
        <div className="font-bold text-gray-700">地點：{node.location}</div>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          href={
            node.gdrive_url && node.gdrive_url.trim() !== ""
              ? node.gdrive_url
              : "/gallery/" + node.date + " " + node.name
          }
          target={
            node.gdrive_url && node.gdrive_url.trim() !== "" ? "_blank" : ""
          }
          rel={
            node.gdrive_url && node.gdrive_url.trim() !== ""
              ? "noopener noreferrer"
              : ""
          }
          className="w-fit"
        >
          <div className="w-fit inline-flex items-center gap-2 whitespace-nowrap py-1 px-5 rounded-full break-words bg-transparent border border-gray-700 hover:bg-btnbg text-gray-800 hover:text-white">
            {node.gdrive_url && node.gdrive_url.trim() !== "" ? (
              <Icon
                icon={openInNew}
                width="16"
                height="16"
                aria-hidden="true"
              />
            ) : null}
            <span>See More</span>
          </div>
        </a>
        <div className="h-1 hidden md:block" /> {/*space*/}
        <ImageWithPlaceholder
          src={node.mainPhoto}
          alt={node.name}
          className="w-full pb-5 md:hidden self-center"
          imgClassName="object-cover"
          aspectRatio="4/3"
        />
      </div>
      <div className="h-full w-full hidden md:flex flex-row justify-center items-center">
        <ImageWithPlaceholder
          src={node.mainPhoto}
          alt={node.name}
          className="w-10/12 py-2"
          imgClassName="object-cover"
          aspectRatio="4/3"
        />
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allGalleryJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          name
          photos
          date
          mainPhoto
          location
          gdrive_url
        }
      }
    }
  }
`;

export default GalleryList;
