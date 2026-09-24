import * as React from "react";

const HoldImage = ({ src, active }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-150 ${
      active ? "opacity-100" : "opacity-0"
    }`}
  >
    <img src={src} alt="" className="max-h-full max-w-full rounded-lg" />
  </div>
);

export default HoldImage;
