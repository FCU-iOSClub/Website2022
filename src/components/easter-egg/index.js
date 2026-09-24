import * as React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import VideoModal from "./video-modal";
import HoldImage from "./hold-image";

const HOLD_DELAY = 150;

const EasterEgg = ({ egg, children }) => {
  const [active, setActive] = useState(false);
  const holdTimer = useRef(null);
  const isHold = egg.type === "image";

  const show = useCallback(() => setActive(true), []);
  const hide = useCallback(() => {
    clearTimeout(holdTimer.current);
    setActive(false);
  }, []);
  const press = useCallback(() => {
    clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(show, HOLD_DELAY);
  }, [show]);

  useEffect(() => () => clearTimeout(holdTimer.current), []);

  const triggerProps = isHold
    ? {
        onPointerDown: press,
        onPointerUp: hide,
        onPointerLeave: hide,
        onPointerCancel: hide,
        onContextMenu: (e) => e.preventDefault(),
        onDragStart: (e) => e.preventDefault(),
        onKeyDown: (e) => e.key === " " && !e.repeat && press(),
        onKeyUp: (e) => e.key === " " && hide(),
      }
    : { onClick: show };

  return (
    <>
      <button
        type="button"
        className={`group relative block w-full cursor-pointer ${
          isHold ? "select-none [-webkit-touch-callout:none]" : ""
        }`}
        {...triggerProps}
      >
        {children}
        {egg.hint && (
          <span className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1 font-bold text-iostextblue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {egg.hint}
          </span>
        )}
      </button>
      {isHold ? (
        <HoldImage src={egg.src} active={active} />
      ) : (
        active && <VideoModal src={egg.src} onClose={hide} />
      )}
    </>
  );
};

export default EasterEgg;
