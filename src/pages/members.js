import * as React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AppHeader from "../components/header";
import { Icon } from "@iconify/react";

const MembersPage = (props) => {
  const members = props.data.allMemberJson.edges;
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader title="iOS Club 歷屆幹部" />
      <Navbar />
      <div className="xl:mx-24 bg-white font-serif px-2 md:px-0">
        <div className="h-32" /> {/* 空白 */}
        <h1 className="text-5xl text-center font-bold">iOS Club 歷屆幹部</h1>
        <MemberImage src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/29cfacb6-0dec-4375-5a2c-c8ac3080bb00/public" />
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
          {members.map((item, _) => {
            const { node } = item;
            return (
              <div className="flex flex-col">
                <a href={"/members/" + node.url}>
                  <h2 className="text-4xl text-center font-bold">
                    {node.name}
                  </h2>
                </a>
                <a href={"/members/" + node.url}>
                  <MemberImage src={node.image} />
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
      <img
        src={src}
        className="rounded-lg shadow-lg object-cover w-full md:w-2/3 lg:w-1/2 m-auto"
      />
    </div>
  );
};

export const qldata = graphql`
  query MyQuery {
    allMemberJson(sort: { order: DESC, fields: endDate }) {
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
