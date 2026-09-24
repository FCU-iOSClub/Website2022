import React from "react";
import IconPreloader from "./src/components/icon-preloader";

export const wrapRootElement = ({ element }) => (
  <>
    <IconPreloader />
    {element}
  </>
);

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
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
  setHtmlAttributes({ lang: "zh-Hant" });
};
