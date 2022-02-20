import * as React from "react";
import { useMediaQuery } from "react-responsive";

const menuItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/",
  },
  {
    name: "Activities",
    url: "/",
  },
  {
    name: "Contact us",
    url: "/",
  },
];

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const mobileChild = (
    <nav className="text-lg my-5 break-words">
      <div className="text-3xl text-center">iOS Club</div>
      <ul className="pt-10 flex flex-col text-center divide-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="py-2 bg-gray-100 shadow-inner">
            <a href={item.url} className="text-solid">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  const desktopChild = (
    <nav className="flex py-4 text-lg px-3 md:px-8 text-solid sticky top-0 bg-white shadow-md">
      <a href="/">iOS Club</a>
      <ul className="flex flex-grow justify-center space-x-10">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div>Join Us</div>
    </nav>
  );
  return <div>
    {isMobile ? mobileChild : desktopChild}
  </div>
};

export default Navbar;
