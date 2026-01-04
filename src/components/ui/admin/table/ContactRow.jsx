"use client";

import React, { useState } from "react";

export default function ContactRow({ num, email, title, message, date }) {
  const [text, setText] = useState(message); // ✅ state to control textarea

  return (
    <tr className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]">
      <td className="p-4">{num}</td>
      <td className="p-4 lowercase whitespace-nowrap">{email}</td>
      <td className="p-4 capitalize whitespace-nowrap">{title}</td>
      <td className="p-4 capitalize whitespace-nowrap">
        <textarea
          cols={30}
          rows={4}
          className="bg-[var(--admin-bg-gray)] rounded-xl p-4"
          value={text} // ✅ controlled input
          onChange={(e) => setText(e.target.value)} // ✅ update state
        />
      </td>
      <td className="p-4 capitalize whitespace-nowrap">{date}</td>
      <td className="p-4 whitespace-nowrap space-x-2">
        <button className="danger-link">Delete</button>
      </td>
    </tr>
  );
}
