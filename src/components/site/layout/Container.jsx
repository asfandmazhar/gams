import React from "react";

export default function Container({ className, children }) {
  return (
    <div className={`max-w-screen-2xl mx-auto px-6 md:px-10 ${className}`}>{children}</div>
  );
}
 