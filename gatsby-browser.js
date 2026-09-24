import "./src/styles/global.css";
import React from "react";
import IconPreloader from "./src/components/icon-preloader";

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
