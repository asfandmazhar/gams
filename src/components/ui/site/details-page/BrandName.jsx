import React from "react";

export default function BrandName() {
  return (
    <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-32 lg:mb-42">
      <h2 className="!text-[35px] md:!text-[50px] lg:!text-[65px]">
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Netflix
        </span>
        <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Premium
        </span>
      </h2>
      <h2>
        Global Hits, Instantly
        <br />
        Within Reach
      </h2>
      <p className="max-w-md mx-auto px-4">
        Join the world's leading streaming platform - share stories daily and
        the world watches.
      </p>
    </div>
  );
}
