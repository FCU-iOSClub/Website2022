import React from "react";
import { Icon } from "@iconify/react";

const communityList = [
  {
    name: "E-mail",
    icon: "fluent:mail-48-filled",
    href: "mailto:iosclub@mail.fcu.edu.tw",
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
    <div className="bg-blue-200 w-full py-24 px-12">
      <div className="grid grid-cols-1 flex-col md:grid-cols-4 justify-center gap-8 md:gap-24 md:px-16">
        <div>
          <p className="font-bold">iOS Club</p>
          <p className="text-gray-600 my-6">Feng Chia University</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold">Our Activities</p>
          <a href="/404" className="text-gray-600">
            行事曆
          </a>
          <a href="/404" className="text-gray-600">
            活動相簿
          </a>
          <a href="/404" className="text-gray-600">
            報名活動
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold">Our Club</p>
          <a href="/404" className="text-gray-600">
            歷屆社團幹部
          </a>
          <a href="/404" className="text-gray-600">
            合作夥伴
          </a>
          <a href="/404" className="text-gray-600">
            相關單位
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold flex flex-row">Community</p>
          {communityList.map((item, index) => (
            <a href={item.href} className="text-gray-600" key={index}>
              <Icon icon={item.icon} className="inline pr-1" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="pt-12 text-gray-600 text-center flex flex-col md:flex-row justify-center">
        <p>iOS Club 2016 - 2022</p>
        <p className="px-2 py-3">©</p>
        <p>All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
