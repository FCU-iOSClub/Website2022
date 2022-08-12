import * as React from "react";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";

const Gallery = (props) => {
  const { node } = props.pageContext;

  return (
    <div className="bg-iosbgblue">
      <AppHeader title={"歷屆幹部 - " + node.name} />
      <Navbar />
      <div className="container mx-auto break-all bg-white font-serif">
        <div className="h-32" /> {/* 空白區 */}
        <h1 className="text-4xl text-center font-bold">{node.name}</h1>
        <div className="h-16" /> {/* 空白區 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-16 md:px-16">
          {node.members.map((member) => {
            return <MemberCard member={member} />;
          })}
        </div>
        <div className="h-8" />
      </div>
      <Footer />
    </div>
  );
};

const MemberCard = (props) => {
  const { member } = props;
  return (
    <div className="border-2  border-iosbgblue rounded-lg p-6">
      <img src={member.image} className="w-full object-cover mx-auto" />
      <h3 className="text-2xl font-bold py-4">
        {member.position + " " + member.name}
      </h3>
      <hr className="border-1 border-iosbgblue" />
    </div>
  );
};

export default Gallery;
