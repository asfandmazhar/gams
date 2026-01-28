import React from "react";
import Link from "next/link";

const formatNumber = (num = 0) => {
  if (num < 10) return `0${num}`;
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return num.toLocaleString();
};

export default function Card({
  heading,
  total = 0,
  link,
  icon: Icon,
  totalAdmin = 0,
  totalUser = 0,
}) {
  return (
    <Link href={link} className="glass-btn !rounded-xl py-8 group space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="!text-base capitalize !text-[var(--navigation-font-color)]">
          {heading}
        </h3>

        {Icon && (
          <Icon className="w-4 md:w-5 h-4 md:h-5 scale-150 transition-transform group-hover:-rotate-12 group-hover:fill-[var(--navigation-font-color)]/70" />
        )}
      </div>

      <h2 className="uppercase !text-[var(--navigation-font-color)]">
        {formatNumber(total)}
      </h2>

      {totalAdmin > 0 || totalUser > 0 ? (
        <span className="text-sm text-[var(--navigation-font-color)]/50">
          {totalAdmin > 0 &&
            `${totalAdmin.toLocaleString()} Admin${totalAdmin > 1 ? "s" : ""}`}
          {totalAdmin > 0 && totalUser > 0 && " • "}
          {totalUser > 0 &&
            `${totalUser.toLocaleString()} User${totalUser > 1 ? "s" : ""}`}
        </span>
      ) : (
        <span className="text-sm text-[var(--navigation-font-color)]/50">
          Total: {total.toLocaleString()}
        </span>
      )}
    </Link>
  );
}
