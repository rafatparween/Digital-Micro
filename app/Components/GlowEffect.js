'use client';

import React from "react";
import clsx from "clsx";

export const GlowEffect = ({ className, fill }) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Golden Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-300 bg-[200%] animate-golden-shimmer opacity-70 blur-2xl"></div>

      {/* Light Motion Animation */}
      <div className="absolute inset-0 bg-yellow-300 opacity-30 blur-[120px] animate-light-motion"></div>

      <svg
        className={clsx(
          "animate-[spotlight_3s_infinite] pointer-events-none absolute z-[1] h-[39%] w-[238%] lg:w-[184%] opacity-80",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill || "gold"}
            fillOpacity="0.35"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
