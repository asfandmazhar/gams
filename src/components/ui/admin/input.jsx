"use client";

import React, { useEffect, useRef } from "react";

export default function AutoResizeTextarea({
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  const textareaRef = useRef(null);

  // Adjust height automatically
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = textarea.scrollHeight + "px"; // set new height
    }
  };

  // Run when value changes
  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => {
        onChange?.(e);
        adjustHeight();
      }}
      placeholder={placeholder}
      rows={1}
      className={`text-2xl md:text-3xl font-bold capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out ${className}`}
    />
  );
}
