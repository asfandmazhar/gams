import Link from "next/link";
import React from "react";

export default function BorderButton({ buttonName, href, className, onClick }) {
  if (href) {
    return (
      <Link href={href} className={`${className}`}>
        <span>{buttonName}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${className}`} type="button">
      <span>{buttonName}</span>
    </button>
  );
}
