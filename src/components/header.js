import * as React from "react";
import { Helmet } from "react-helmet";

const AppHeader = (props) => {
  const {
    title = "iOS Club",
    description = "逢甲大學 iOS Club 是全臺首個獲得 Apple 官方認證的社團，也是一個結合學術的志工性社團。每年暑假社員們會有國際交流的機會，到海外參加比賽，和不同國家的學生進行合作活動與技術交流。",
    icon = "/icon.ico",
  } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={icon} />
      <link
        rel="preconnect"
        href="https://api.iconify.design"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://api.iconify.design" />
    </Helmet>
  );
};

export default AppHeader;
