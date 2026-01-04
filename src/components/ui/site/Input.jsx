"use client";

import React, { useState } from "react";
import { Search } from "@/components/icons/icons";

export default function SearchInput({
  placeholder = "Search...",
  className = "",
  inputClass = "",
  onChange,
  value,
  type,
  icon = null,
  iconSize = "w-5 h-5 lg:w-6 lg:h-6",
}) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div
      className={`flex items-center w-full bg-[var(--muted-color)]/30 border-2 border-[var(--muted-color)] focus-within:border-[var(--navigation-color)] rounded-full px-6 py-3 lg:px-8 lg:py-6 ${className}`}
    >
      <div className="flex items-center gap-4 w-full">
        {icon && <icon.type className={`fill-gray-400 ${iconSize}`} />}

        <input
          type={type}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={`flex-1 w-full outline-none placeholder-gray-400 placeholder:text-base lg:placeholder:text-xl text-base lg:text-xl ${inputClass}`}
        />
      </div>
    </div>
  );
}
