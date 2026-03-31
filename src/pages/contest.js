import * as React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const ContestPage = (props) => {
  const contests = props.data.allContestJson.edges;
  // Google Ads 轉換追蹤
  useGoogleAdsConversion();

  return (
    <div className=" bg-iosbgblue">
      {/* Header */}
      <AppHeader
        title="iOS Club - 社團競賽"
        description="社團成員們參加的各項競賽及得獎名單。"
      />
      <Navbar />
      <div className="container mx-auto break-normal font-serif bg-white shadow-lg px-3 md:px-20 lg:px-24">
        <div className="h-32" />
        {/* 空白 */}
        <h1 className="text-5xl text-center font-black">iOS Club 競賽</h1>
        <div className="h-16" />
        {/* 空白 */}
        {contests.map(({ node }, index) => (
          <div className="py-6" key={node.id || index}>
            <div className="w-full bg-ioscardblue py-3">
              <h2 className="text-xl text-center text-white font-black">
                {node.title}
              </h2>
            </div>

            {node.contents.map((row, rowIndex) => (
              <div
                className="border-b w-full py-6 grid grid-rows-1 md:grid-cols-4 text-iostextblue font-bold gap-2 items-center"
                key={rowIndex}
              >
                <p className="px-2 text-left md:text-center breck-words">
                  {row[0]}
                </p>
                <p className="px-2 text-left md:text-center breck-words">
                  {row[1]}
                </p>
                <p className="px-2 text-left md:text-center wrap-break-word">
                  {row[2]}
                </p>
                <p className="px-2 text-left md:text-center wrap-break-word">
                  {row[3]}
                </p>
              </div>
            ))}
          </div>
        ))}
        <div className="h-16" />
        {/* 空白 */}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export const qldata = graphql`
  query ContestQuery {
    allContestJson(sort: { year: DESC }) {
      edges {
        node {
          id
          year
          title
          contents
        }
      }
    }
  }
`;

export default ContestPage;
