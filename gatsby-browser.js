import "./src/styles/global.css";
import React from "react";
import { Icon } from "@iconify/react";

// Preload the most-used icons across the site to avoid first-paint delays.
// Rendering them invisibly will trigger Iconify to fetch and cache the data early.
const preloadIcons = [
  // ant-design
  "ant-design:caret-left-outlined",
  "ant-design:caret-right-outlined",

  // logos
  "logos:youtube-icon",

  // akar-icons
  "akar-icons:triangle-fill",
  "akar-icons:calendar",
  "akar-icons:more-vertical-fill",
  "akar-icons:cross",

  // mdi
  "mdi:rfid",
  "mdi:numeric-1-box",
  "mdi:close",
  "mdi:numeric-2-box",
  "mdi:lightbulb-on",
  "mdi:cog",

  // boxicons
  "bx:menu",
];

const IconPreloader = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {preloadIcons.map((name) => (
        <Icon key={name} icon={name} />
      ))}
    </div>
  );
};

// Gatsby Browser API: wrapRootElement
// Inject a lightweight preloader so icons are requested immediately on app start.
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <IconPreloader />
      {element}
    </>
  );
};
