import React from "react";
import { Icon } from "@iconify/react";

const communityList = [
  {
    name: "E-mail",
    icon: "fluent:mail-48-filled",
    href: "mailto:iosclubtw@gmail.com",
  },
  {
    name: "Facebook",
    icon: "akar-icons:facebook-fill",
    href: "https://www.facebook.com/FCU.iOSClub",
  },
  {
    name: "Instagram",
    icon: "akar-icons:instagram-fill",
    href: "https://www.instagram.com/fcu.iosclub/",
  },
  {
    name: "Threads",
    icon: "akar-icons:threads-fill",
    href: "https://www.threads.net/@fcu.iosclub",
  },
  {
    name: "Line 社群",
    icon: "bi:line",
    href: "https://line.me/ti/g2/Hcrx-jxTUDGItqDEo0R63w?utm_campaign=default&utm_medium=link_copy&utm_source=invitation",
  },
  {
    name: "Discord",
    icon: "akar-icons:discord-fill",
    href: "https://discord.com/invite/z2VPCNFupv",
  },
];

const Footer = () => {
  return (
    <div className="bg-footerbg w-full py-24 px-12 font-serif">
      <div className="grid grid-cols-1 flex-col md:grid-cols-4 justify-center gap-8 md:gap-24 md:px-16">
        <div>
          <p className="font-bold text-gray-900">iOS Club</p>
          <p className="text-gray-100 my-6">Feng Chia University</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-gray-900">Our Activities</p>
          <a href="/course" className="text-gray-100">
            社團課程
          </a>
          <a href="/gallery_list" className="text-gray-100">
            活動相簿
          </a>
          <a href="/club_activities" className="text-gray-100">
            社團活動
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-gray-900">Our Club</p>
          <a href="/members" className="text-gray-100">
            歷屆社團幹部
          </a>
          <a href="/contest" className="text-gray-100">
            競賽得獎
          </a>
          <a href="/companion" className="text-gray-100">
            相關單位
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold flex flex-row text-gray-900">Community</p>
          {communityList.map((item, index) => (
            <a href={item.href} className="text-gray-100" key={index}>
              <Icon icon={item.icon} className="inline pr-1" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="pt-12 text-gray-100 text-center flex flex-col md:flex-row justify-center items-center">
        <p>iOS Club 2016 - 2025</p>
        <p className="px-2 py-3">©</p>
        <p>All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
