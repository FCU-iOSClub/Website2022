import * as React from "react";
import MediaQuery from "react-responsive";

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
  return (
    <div>
      <MediaQuery maxWidth={767}>{mobileChild}</MediaQuery>
      <MediaQuery minWidth={768}>{desktopChild}</MediaQuery>
    </div>
  );
};

export default Navbar;
