import Link from "next/link";
import React from "react";

export default function Button({ buttonName, href, className, onClick }) {
  
  if (href) {
    return (
      <Link href={href} className={`${className} btn-secondary`}>
        <span>{buttonName}</span>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${className} btn-secondary`}
      type="button"
    >
      <span>{buttonName}</span>
    </button>
  );
}
