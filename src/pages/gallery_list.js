import * as React from "react";
import { graphql } from "gatsby";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const GalleryList = ({ data }) => {
  return (
    <div className="bg-blue-300">
      <AppHeader title="iOS Club 活動相簿" />
      {Navbar()}
      <div className="container p-3 md:p-0 mx-auto break-all bg-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-center my-24 font-bold">活動相簿</h1>
          <div className="flex gap-y-10 flex-col items-center">
            {data.allGalleryJson.edges.map((item, index) =>
              galleryItem(item.node)
            )}
          </div>
        </div>
        <div className="h-12"></div>
      </div>
      <Footer />
    </div>
  );
};

const galleryItem = (node) => {
  return (
    <div className="box-border grid md:grid-cols-2 h-fit md:h-72 w-full md:w-3/5 rounded-md shadow-lg border border-gray-400">
      <div className="py-2 px-8 w-full h-full flex flex-col justify-items-center gap-4 md:gap-0 md:justify-evenly">
        <h2 className="mt-4 text-xl font-bold text-center">{node.name}</h2>
        <div className="font-bold text-gray-700">時間：{node.date}</div>
        <div className="font-bold text-gray-700">地點：{node.location}</div>
        <a href={"/gallery/" + node.date + " " + node.name} className="w-32">
          <div className="text-center p-1 bg-red-500">查看更多</div>
        </a>
        <div className="h-1 hidden md:block" /> {/*space*/}
        <img
          className="w-full pb-5 object-cover md:hidden self-center"
          src={node.mainPhoto}
        />
      </div>
      <div className="h-full w-full hidden md:flex flex-row justify-center items-center">
        <img
          className="h-5/6 w-10/12 p-2 object-scale-down"
          src={node.mainPhoto}
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
        }
      }
    }
  }
`;

export default GalleryList;
