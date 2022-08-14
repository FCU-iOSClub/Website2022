import * as React from "react";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";

const Gallery = (props) => {
  const { node, prevUrl, nextUrl } = props.pageContext;

  return (
    <div className="bg-iosbgblue">
      <AppHeader title={"歷屆幹部 - " + node.name} />
      <Navbar />
      <div className="md:px-0 container mx-auto break-all bg-white font-serif">
        <div className="h-32" /> {/* 空白區 */}
        <h1 className="text-4xl text-center font-bold">{node.name}</h1>
        <div className="h-8" /> {/* 空白區 */}
        {/* 上、下一屆 */}
        <div className="flex flex-wrap justify-between text-iospink md:px-16 text-xl font-medium gap-y-4">
          {prevUrl ? (
            <a href={prevUrl} className="flex items-center">
              <Icon icon="ant-design:caret-left-outlined" color="#ecadad" />
              上一屆幹部介紹
            </a>
          ) : (
            <div />
          )}
          {nextUrl ? (
            <a href={nextUrl} className="flex items-center">
              下一屆幹部介紹
              <Icon icon="ant-design:caret-right-outlined" color="#ecadad" />
            </a>
          ) : (
            <div />
          )}
        </div>
        <div className="h-16" /> {/* 空白區 */}
        <div className="px-2 md:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-16">
          {node.members.map((member) => {
            return <MemberCard member={member} />;
          })}
        </div>
        <div className="h-8" /> {/* 空白區 */}
        <div className="flex flex-wrap justify-between text-iospink md:px-16 text-xl font-medium gap-y-4">
          {prevUrl ? (
            <a href={prevUrl} className="flex items-center">
              <Icon icon="ant-design:caret-left-outlined" color="#ecadad" />
              上一屆幹部介紹
            </a>
          ) : (
            <div />
          )}
          {nextUrl ? (
            <a href={nextUrl} className="flex items-center">
              下一屆幹部介紹
              <Icon icon="ant-design:caret-right-outlined" color="#ecadad" />
            </a>
          ) : (
            <div />
          )}
        </div>
        <div className="h-8" /> {/* 空白區 */}
        <div className="flex justify-items-center">
          <p className="my-8 m-auto">
            <a
              className="w-fit py-3 px-6 rounded-full break-words bg-transparent border border-gray-700 hover:bg-btnbg text-gray-800 hover:text-white"
              href="/members"
            >
              <nobr>返回歷屆幹部</nobr>
            </a>
          </p>
        </div>
        <div className="h-8" /> {/* 空白區 */}
      </div>
      <Footer />
    </div>
  );
};

const MemberCard = (props) => {
  const { member } = props;
  const tempImg =
    "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/827f1788-4157-497b-0ecb-6168f73db400/public";
  return (
    <div className="border-2  border-iosbgblue rounded-lg p-6">
      <img
        src={member.image.length === 0 ? tempImg : member.image}
        className="w-full object-cover mx-auto rounded-full"
      />
      <h3 className="text-2xl font-bold py-4">
        {member.position + " " + member.name}
      </h3>
      <hr className="border-1 border-iosbgblue" />
    </div>
  );
};

export default Gallery;
