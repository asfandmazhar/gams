import Link from "next/link";
import React from "react";

export default function NavButton({ buttonName, href, className, onClick }) {
  if (href) {
    return (
      <Link href={href} className={`${className} nav-btn`}>
        <span>{buttonName}</span>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${className} nav-btn`}
      type="button"
    >
      <span>{buttonName}</span>
    </button>
  );
}