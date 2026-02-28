import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import IosClubLogoSvg from "../../static/iOSClub_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRounded, setIsRounded] = useState(true); // true = rounded-full, false = rounded-3xl
  const [scrolled, setScrolled] = useState(false);
  const openTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    if (!isOpen) {
      // 展開：先讓圓角變化，再展開選單
      setIsRounded(false);
      openTimerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 300); // 300ms
    } else {
      // 收合：立即關閉選單，圓角同步恢復
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      setIsOpen(false);
      setIsRounded(true);
    }
  };

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
    };
  }, []);

  const glassClass = scrolled ? "navbar-glass-scrolled" : "navbar-glass";
  const mobileGlassClass = isOpen ? "navbar-glass-mobile-open" : glassClass;

  const mobileChild = (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] font-bold z-50 overflow-hidden transition-[border-radius] duration-300 ${isRounded ? "rounded-full" : "rounded-3xl"} ${mobileGlassClass}`}
    >
      <div className="flex justify-between px-5 py-3 w-full">
        <a href="/" className="flex items-center gap-3 w-fit text-2xl group">
          <div className="w-9 h-9 rounded-full bg-white/30 border border-white/55 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] flex items-center justify-center transition-all duration-300 group-hover:bg-white/50">
            <ImageWithPlaceholder
              src={IosClubLogoSvg}
              alt="iOS Club Logo"
              className="w-6 h-6"
            />
          </div>
          <span className="text-gray-800 font-semibold tracking-tight">
            iOS Club
          </span>
        </a>
        <div className="place-self-center">
          <button
            className="block md:hidden focus:outline-none bg-white/25 hover:bg-white/45 border border-white/45 rounded-full p-2 transition-all duration-300 active:scale-90 shadow-sm"
            onClick={handleMenuToggle}
            aria-label={isOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Icon
              icon={isOpen ? "akar-icons:cross" : "bx:menu"}
              className="w-6 h-6 text-gray-700"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="navbar-glass-dropdown liquid-menu-enter w-full left-0 py-3 px-4"
        >
          <ul className="mb-3">
            {menuItems.map((item, index) => (
              <li key={index} className="mx-1 my-0.5">
                <a
                  href={item.url}
                  className="flex items-center text-gray-700 hover:text-cyan-600 font-medium text-lg py-2.5 px-4 rounded-full hover:bg-white/45 border border-transparent hover:border-white/40 transition-all duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-1 pb-2">
            <JoinUsButton fullWidth />
          </div>
        </div>
      )}
    </nav>
  );
  const desktopChild = (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] flex items-center justify-between font-bold py-3 px-5 z-50 rounded-full ${glassClass}`}
    >
      <a href="/" className="flex items-center gap-3 font-bold text-2xl group">
        <div className="w-9 h-9 rounded-full bg-white/30 border border-white/55 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:bg-white/50 group-hover:scale-105">
          <ImageWithPlaceholder
            src={IosClubLogoSvg}
            alt="iOS Club Logo"
            className="w-6 h-6"
          />
        </div>
        <span className="text-gray-800 tracking-tight">iOS Club</span>
      </a>

      <ul className="flex flex-1 items-center px-8 lg:px-20 text-center gap-1">
        {menuItems.map((item, index) => (
          <li key={index} className="flex-1">
            <a
              href={item.url}
              className="inline-flex items-center justify-center w-full gap-1.5 text-lg font-medium text-gray-700 hover:text-cyan-700 px-2 py-2 rounded-full hover:bg-white/45 border border-transparent hover:border-white/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <JoinUsButton />
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

const JoinUsButton = ({ fullWidth = false }) => (
  <button
    className={`relative overflow-hidden text-white text-base font-semibold ${fullWidth ? "w-full" : "w-fit"} px-10 py-2.5 rounded-full transition-all duration-300 active:scale-95
      bg-gradient-to-b from-[#5a6fa0] to-[#445484]
      border border-white/25
      shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_4px_14px_rgba(68,84,132,0.45)]
      hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_6px_20px_rgba(68,84,132,0.60)]
      hover:from-[#6a80b4] hover:to-[#5264a0]`}
    onClick={() => {
      window.open("https://forms.gle/uJSNB8ccYRu5SZQ59", "_blank");
    }}
  >
    Join Us
  </button>
);

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
  {
    name: "教學資源",
    url: "/swift_res",
    icon: "uil:image",
  },
];
