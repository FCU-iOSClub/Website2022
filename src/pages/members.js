import * as React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";
import { Icon } from "@iconify/react";

const MembersPage = (props) => {
  const members = props.data.allMemberJson.edges;
  // Google Ads 轉換追蹤
  useGoogleAdsConversion();
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader
        title="iOS Club 歷屆幹部"
        description="iOS Club 的歷屆幹部介紹。"
      />
      <Navbar />
      <div className="xl:mx-24 bg-white font-serif px-2 md:px-0">
        <div className="h-32" /> {/* 空白 */}
        <h1 className="text-5xl text-center font-bold">iOS Club 歷屆幹部</h1>
        <MemberImage src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/d8d429d7-327a-4b4c-71c4-080c6af10900/public" />
        {/* 閱讀更多區塊 */}
        <div
          className="flex flex-col items-center my-10 md:my-24"
          style={{ backgroundColor: "#F5E3E3" }}
        >
          <p
            className="font-serif pt-10 text-center w-full text-xl font-bold"
            style={{ color: "#A87B7B" }}
          >
            往下看更多
          </p>
          <div className="h-9" />
          <div className="pb-8 animate-bounce">
            <Icon icon="akar-icons:triangle-fill" color="#A87B7B" rotate={2} />
          </div>
        </div>
        <div className="h-4 " /> {/* 空白 */}
        {/* 歷屆 list */}
        <div>
          {members.map((item, index) => {
            const { node } = item;
            return (
              <div className="flex flex-col" key={index}>
                <a href={"/members/" + node.url}>
                  <h2 className="text-4xl text-center font-bold">
                    {node.name}
                  </h2>
                </a>
                <a href={"/members/" + node.url}>
                  <div className="block relative">
                    <MemberImage src={node.image} />
                    <div
                      className="bg-iospink truncate text-center py-3 px-6 rounded-md break-words w-fit absolute right-0 md:right-48 xl:left-2/3 bottom-10"
                      href="/gallery_list"
                    >
                      {node.startDate + " - " + node.endDate}
                    </div>
                  </div>
                </a>
                <div className="h-16" /> {/* 空白 */}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MemberImage = (props) => {
  const { src } = props;
  return (
    <div className="justify-center py-12 w-full">
      <ImageWithPlaceholder
        src={src}
        alt="歷屆幹部封面"
        className="w-full md:w-2/3 lg:w-1/2 m-auto rounded-lg shadow-lg"
        imgClassName="object-cover rounded-lg"
        aspectRatio="4/3"
      />
    </div>
  );
};

export const qldata = graphql`
  query MyQuery {
    allMemberJson(sort: { endDate: DESC }) {
      edges {
        node {
          id
          name
          url
          description
          image
          startDate
          endDate
        }
      }
    }
  }
`;

export default MembersPage;
