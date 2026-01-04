import Link from "next/link";
import React from "react";

export default function Button({
  buttonName,
  href,
  icon: Icon,
  className = "",
  onClick,
}) {
  if (href) {
    return (
      <Link href={href} className={`${className} glass-btn`}>
        {Icon && (
          <Icon className="w-4 md:w-5 h-4 md:h-5 fill-[var(--navigation-font-color)]/70" />
        )}
        {buttonName && <span>{buttonName}</span>}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glass-btn justify-items-center-safe ${className}`}
    >
      {Icon && (
        <Icon className="w-4 md:w-5 h-4 md:h-5 fill-[var(--navigation-font-color)]/70" />
      )}
      {buttonName && <span>{buttonName}</span>}
    </button>
  );
}
