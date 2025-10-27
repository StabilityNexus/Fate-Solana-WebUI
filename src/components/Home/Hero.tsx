"use client";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Main Title */}
      <h1 className="text-[28vw] sm:text-[24vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] 2xl:text-[14vw] font-bold font-fate fate-title leading-none mb-2 sm:mb-4">
        FATE
      </h1>
      
      {/* Subtitle */}
      <p className="dark:text-white text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 mb-6 sm:mb-8 lg:mb-10 max-w-4xl leading-relaxed">
        Perpetual Prediction Pool
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center w-full max-w-md sm:max-w-none">
        <Link href="/predictionPool/create" className="w-full sm:w-auto">
          <button
            className={`w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 rounded-full text-base sm:text-lg lg:text-xl font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${
              resolvedTheme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black focus:ring-white/20"
                : "border-black text-black hover:bg-black hover:text-white focus:ring-black/20"
            }`}
          >
            Create
          </button>
        </Link>

        <Link href="/predictionPool" className="w-full sm:w-auto">
          <button
            className={`w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 rounded-full text-base sm:text-lg lg:text-xl font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${
              resolvedTheme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black focus:ring-white/20"
                : "border-black text-black hover:bg-black hover:text-white focus:ring-black/20"
            }`}
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;