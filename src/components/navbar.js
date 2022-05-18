import * as React from "react";
import { Icon } from "@iconify/react";

const menuItems = [
  {
    name: "首頁",
    url: "/",
    icon: "uil:home",
  },
  {
    name: "社團課程",
    url: "/course",
    icon: "akar-icons:book",
  },
  {
    name: "社團活動",
    url: "/club_activities",
    icon: "uil:calender",
  },
  {
    name: "社團相簿",
    url: "/gallery_list",
    icon: "uil:image",
  },
];

const Navbar = () => {
  const mobileChild = (
    <nav className="flex justify-between fixed px-6 py-3 bg-gray-100 w-full font-bold shadow-md z-50">
      <a href="/" className="w-fit text-2xl">
        iOS Club
      </a>
      <div className="flex gap-2">
        {menuItems.map((item, index) => (
          <div
            className="p-2 bg-iosbgblue rounded-xl hover:bg-blue-200"
            onClick={() => (location.href = item.url)}
          >
            <Icon icon={item.icon} color="#4f7096" />
          </div>
        ))}
      </div>
    </nav>
  );
  const desktopChild = (
    <nav className="fixed flex py-4 text-lg px-3 md:px-8 text-solid w-screen top-0 bg-white shadow-md z-50">
      <a href="/" className="font-bold">
        iOS Club
      </a>
      <ul className="md:px-24 lg:px-60 xl:px-80 flex flex-grow justify-between space-x-10">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="hover:underline underline-offset-8">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div>Join Us</div>
    </nav>
  );
  return (
    <div>
      <div className="block md:hidden">{mobileChild}</div>
      <div className="hidden md:block">{desktopChild}</div>
    </div>
  );
};

export default Navbar;
