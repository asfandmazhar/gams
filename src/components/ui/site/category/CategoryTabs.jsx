"use client";

import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function CategoryTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeCategory = searchParams.get("category") || "all";

  const handleClick = (slug) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", slug);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/category/public/get/get-all-category");
      if (res.data.success) {
        setCategories(res.data.categories);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="relative flex lg:justify-center items-center mt-4">
      <div className="flex gap-2 xl:gap-14 lg:px-10 py-3 w-full lg:w-fit overflow-x-auto">
        {/* 🔹 Skeleton Loading */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-6 py-2 rounded-lg animate-pulse"
            >
              <div className="w-6 lg:w-14 h-6 lg:h-14 bg-gray-300 rounded-md" />
              <div className="w-12 h-2 bg-gray-300 rounded mt-2" />
            </div>
          ))}

        {/* 🔹 Categories */}
        {!loading &&
          categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleClick(cat.slug)}
              className={`flex flex-col items-center px-6 py-2 cursor-pointer rounded-lg transition relative
                ${
                  activeCategory === cat.slug
                    ? "bg-[var(--background-color)] text-[var(--navigation-font-color)]"
                    : "hover:bg-[var(--background-color)]/20"
                }`}
            >
              <img
                src={cat.icon}
                alt={cat.slug}
                className={`w-6 lg:w-8 h-6 lg:h-8
                  ${activeCategory === cat.slug ? "invert brightness-0" : ""}`}
              />

              <span className="text-sm mt-1">{cat.name}</span>

              {activeCategory === cat.slug && (
                <span className="absolute -bottom-[9px] block w-12 h-[4px] bg-[var(--navigation-color)] rounded-full" />
              )}
            </button>
          ))}
      </div>
    </div>
  );
}
