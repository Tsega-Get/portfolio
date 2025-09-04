import React, { useState, useRef } from "react";
import { technologies } from "../../constants";

import { PauseIcon, PlayIcon } from "../custom/customIcons";

const Tech: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const duplicatedTechnologies = [...technologies, ...technologies];

  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!isPaused) {
      setIsPaused(true);
    }
    if (marqueeContainerRef.current) {
      event.preventDefault();
      marqueeContainerRef.current.scrollLeft += event.deltaY * 2;
    }
  };

  return (
    // 1. New parent wrapper to establish the positioning context.
    <div className="relative w-full">
      {/* 2. This container is now ONLY for scrolling the content. */}
      <div
        className="py-12 overflow-x-auto no-scrollbar  border-b-1 border-[var(--color-secondary)]/30"
        ref={marqueeContainerRef}
        onWheel={handleWheelScroll}
      >
        <div
          className="flex flex-nowrap animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {duplicatedTechnologies.map(({ name, icon }, index) => (
            <div
              key={`${name}-${index}`}
              // className="flex-shrink-0 w-40 h-28 mx-4 flex flex-col items-center justify-center bg-[var(--color-tertiary)] rounded-xl shadow-[var(--shadow-card)]"
              className="flex-shrink-0 w-40 h-28 mx-4 flex flex-col items-center justify-center transparent rounded-xl "
            >
              <img
                src={icon}
                alt={name}
                className="w-12 h-12 object-contain mx-auto mb-2"
              />
              <p className="text-center text-sm text-[var(--color-white-100)]">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The button is now outside the scrolling div, positioned relative to the new parent. */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-1/2 -translate-y-1/2 right-8 z-10 p-4 bg-white/10 rounded-full backdrop-blur-sm shadow-[8px_4px_15px_0px_rgba(0,0,0,0.4)] hover:bg-white/20 transition-all duration-300"
        aria-label={
          isPaused ? "Play scrolling animation" : "Pause scrolling animation"
        }
      >
        {isPaused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  );
};

export default Tech;
