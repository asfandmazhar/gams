import React from "react";
import Image from "next/image";

export default function ImageVideo({ size, className, fontSize }) {
  return (
    <label htmlFor="websiteBanner">
      <input type="file" id="websiteBanner" hidden />
      <Image
        fill
        src={"/images/image.jpg"}
        alt={"Website-Template"}
        className={`w-full h-full object-contain rounded-xl ${className}`}
        hidden
      />
      <div
        className={`flex justify-center items-center bg-[var(--admin-bg-gray)] rounded-xl hover:bg-light/10 cursor-pointer ${className}`}
      >
        <h5 className={`text-[var(--navigation-font-color)]/20 ${fontSize}`}>{size}</h5>
      </div>
    </label>
  );
}
