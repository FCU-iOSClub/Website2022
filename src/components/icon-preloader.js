import * as React from "react";
import { Icon } from "@iconify/react";

// Preload the most-used icons across the site to avoid first-paint delays.
// Shared by gatsby-ssr.js and gatsby-browser.js so server and client render the same markup.
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
  "mdi:numeric-1-box",
  "mdi:close",
  "mdi:numeric-2-box",
  "mdi:lightbulb-on",
  "mdi:cog",

  // boxicons
  "bx:menu",

  // uil (used in navbar)
  "uil:home",
  "uil:calender",
  "uil:image",
];

const IconPreloader = () => (
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

export default IconPreloader;
