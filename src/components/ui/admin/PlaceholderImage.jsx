import React from "react";

export default function PlaceholderImage({ size, className, fontSize }) {
  return (
    <div
      className={`flex justify-center items-center bg-[var(--admin-bg-gray)] rounded-xl hover:bg-light/10 cursor-pointer ${className}`}
    >
      <h5 className={`text-[var(--navigation-font-color)]/20 ${fontSize}`}>
        {size}
      </h5>
    </div>
  );
}
