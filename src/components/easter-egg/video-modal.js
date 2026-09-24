import * as React from "react";
import { useEffect, useRef } from "react";

const VideoModal = ({ src, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="auto"
        className="max-h-full max-w-full rounded-lg"
        onEnded={onClose}
      >
        <track kind="captions" />
      </video>
    </div>
  );
};

export default VideoModal;
