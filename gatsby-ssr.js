import React from "react";
import { Icon } from "@iconify/react";

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

export const wrapRootElement = ({ element }) => (
  <>
    <IconPreloader />
    {element}
  </>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Google tag (gtag.js)
    <script
      key="gtag-js"
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-17499456338"
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17499456338');
        `,
      }}
    />,
  ]);
};
