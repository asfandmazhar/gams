import React from "react";
import Link from "next/link";

export default function Card({ heading, total, link, icon: Icon }) {
  let formattedTotal;

  if (total < 10) {
    formattedTotal = "0" + total;
  } else if (total >= 1000000) {
    formattedTotal = (total / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
  } else if (total >= 1000) {
    formattedTotal = (total / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    formattedTotal = total.toLocaleString();
  }
  return (
    <Link href={link} className="glass-btn !rounded-xl py-8 group space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="!text-base capitalize !text-[var(--navigation-font-color)]">{heading}</h3>
        {Icon && (
          <Icon className="w-4 md:w-5 h-4 md:h-5 scale-150 group-hover:-rotate-12 group-hover:fill-[var(--navigation-font-color)]/70" />
        )}
      </div>
      <h2 className="uppercase !text-[var(--navigation-font-color)]">{formattedTotal}</h2>
      <span className="text-sm text-[var(--navigation-font-color)]/50">{total.toLocaleString()}</span>
    </Link>
  );
}
