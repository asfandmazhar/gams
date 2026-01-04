"use client";

import React, { useState } from "react";
import { Music, Ai, Software } from "@/components/icons/icons";

const icons = {
  music: Music,
  ai: Ai,
  software: Software,
};

export default function CategoryRow({ num, icon, child, date }) {
  const IconComponent = icons[icon];
  const [value, setValue] = useState(child);

  return (
    <tr className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]">
      <td className="p-4">{num}</td>
      <td className="p-6 flex items-center gap-2">
        {IconComponent && (
          <IconComponent className="scale-150 hover:-rotate-12 hover:gradient-text text-2xl mt-1 cursor-pointer" />
        )}
      </td>
      <td className="p-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-box w-full"
        />
      </td>
      <td className="p-4 uppercase whitespace-nowrap">{date}</td>
      <td className="p-4 whitespace-nowrap space-x-2">
        <button className="danger-link">Delete</button>
      </td>
    </tr>
  );
}
