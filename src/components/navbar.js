import * as React from "react";
import MediaQuery from "react-responsive";

const menuItems = [
  {
    name: "首頁",
    url: "/",
  },
  {
    name: "社團課程",
    url: "/404",
  },
  {
    name: "社團活動",
    url: "/club_activities",
  },
  {
    name: "社團相簿",
    url: "/404",
  },
];

const Navbar = () => {
  const mobileChild = (
    <nav className="py-3 bg-gray-100 w-full text-3xl font-bold shadow-md">
      <a href="/" className="w-full pl-8">
        iOS Club
      </a>
    </nav>
  );
  const desktopChild = (
    <nav className="flex py-4 text-lg px-3 md:px-8 text-solid sticky top-0 bg-white shadow-md">
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
      <MediaQuery maxWidth={767}>{mobileChild}</MediaQuery>
      <MediaQuery minWidth={768}>{desktopChild}</MediaQuery>
    </div>
  );
};

export default Navbar;
