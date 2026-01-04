import React from "react";

export default function DropdownMenu({
  isOpen,
  onClose,
  className = "",
  children,
}) {
  return (
    <div
      className={`drop-down-glass-effect absolute right-0 p-3 rounded-lg duration-150 transform bg-white shadow-lg z-50 ${
        isOpen ? "scale-100" : "scale-0 translate-x-10 -translate-y-20"
      } ${className}`}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
