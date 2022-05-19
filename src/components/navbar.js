import * as React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  withWidth();

  const mobileChild = (
    <nav className="fixed w-full h-fit bg-gray-100  font-bold shadow-md z-50">
      <div className="flex justify-between px-6 py-3 w-full">
        <a href="/" className="w-fit text-2xl">
          iOS Club
        </a>
        <div className="place-self-center">
          <button
            className="flex items-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon
              icon={isOpen ? "akar-icons:cross" : "bx:menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:px-24 lg:px-60 xl:px-80 flex flex-col justify-between gap-3 pl-5 py-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="hover:underline underline-offset-8 w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
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
