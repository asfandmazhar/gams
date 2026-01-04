import React from "react";

export default function LanguageRow({ num, languages, date }) {
  return (
    <tr className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]">
      <td className="p-4">{num}</td>
      <td className="p-4">
        <input
          type="text"
          defaultValue={languages}
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
