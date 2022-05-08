import * as React from "react";
import { graphql } from "gatsby";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const GalleryList = ({ data }) => {
  return (
    <div>
      <AppHeader title="iOS Club 活動相簿" />
      {Navbar()}
      <div className="container mx-auto break-all">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-center my-24 font-bold">
            iOS Club 活動相簿
          </h1>
          <div className="flex gap-y-10 flex-col items-center">
            {data.allGalleryJson.edges.map((item, index) => (
              <div className="box-border grid grid-cols-2 h-72 w-full md:w-3/5 rounded-md shadow-lg border border-gray-400">
                <div className="p-2 w-full h-full flex flex-col justify-items-center">
                  <h2 className="mt-4 text-xl font-bold text-center">{item.node.name}</h2>
                  <div className="font-bold text-gray-700">時間：{item.node.date}</div>
                  <div className="font-bold text-gray-700">地點：{item.node.location}</div>
                  <a href={ "/gallery/" + item.node.name}>
                    <div className="w-32 text-center p-1 bg-red-500">查看更多</div>
                  </a>
                </div>
                <div className="h-full w-full flex flex-row justify-center items-center">
                  <img className="h-5/6 w-10/12 p-2 object-scale-down" src={item.node.mainPhoto} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <Footer/>
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
