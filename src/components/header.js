import * as React from "react";
import { Helmet } from "react-helmet";

const AppHeader = (props) => {
  const { title = "iOS Club", icon = "/icon.ico" } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={icon} />
      <link rel="preconnect" href="https://api.iconify.design" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://api.iconify.design" />
    </Helmet>
  );
};

export default AppHeader;
