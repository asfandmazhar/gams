"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  All,
  Music,
  Ai,
  Learning,
  Software,
  Help,
} from "@/components/icons/icons";

export default function CategoryTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const categories = [
    { name: "All", slug: "all", icon: All },
    { name: "Music", slug: "music", icon: Music },
    { name: "AI", slug: "ai", icon: Ai },
    { name: "Software", slug: "software", icon: Software },
    { name: "Reading", slug: "reading", icon: Help },
    { name: "Learning", slug: "learning", icon: Learning },
  ];

  const handleClick = (slug) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", slug);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative flex lg:justify-center items-center mt-4">
      <div className="flex gap-2 xl:gap-14 lg:px-10 py-3 border-bottom w-full lg:w-fit overflow-x-auto text-[var(--theme-color)]">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.slug}
              onClick={() => handleClick(cat.slug)}
              className={`flex flex-col items-center px-6 py-2 rounded-lg transition cursor-pointer relative
                ${
                  activeCategory === cat.slug
                    ? "bg-[var(--background-color)] text-[var(--navigation-font-color)] after:absolute after:top-[73px] lg:after:top-[81px] after:left-0 after:right-0 after:h-[3px] after:bg-[var(--navigation-font-color)]"
                    : "hover:bg-[var(--background-color)]/20 hover:fill-[var(--navigation-color)]"
                }`}
            >
              <Icon
                className={`w-6 lg:w-8 h-6 lg:h-8 ${
                  activeCategory === cat.slug
                    ? "fill-[var(--navigation-font-color)]"
                    : "fill-[var(--navigation-color)]"
                }`}
              />
              <span className="text-sm mt-1">{cat.name}</span>
              {activeCategory === cat.slug && (
                <span className="absolute -bottom-[9px] block w-12 h-[4px] bg-[var(--navigation-color)] rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
