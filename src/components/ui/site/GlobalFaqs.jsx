"use client";

import React, { useState } from "react";
import { Cross } from "@/components/icons/icons";

export default function GlobalFaqs({ data, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map((faq, index) => (
        <div
          key={index}
          className={`flex flex-col shadow-sm hover:shadow-lg h-auto px-4 py-4 md:px-8 md:py-6 rounded-xl cursor-pointer ${className}`}
          onClick={() => toggleFaq(index)}
        >
          <div className="flex justify-between items-center gap-2">
            <h4>{faq.title}</h4>
            <div>
              <Cross
                className={`w-4 h-4 md:w-6 md:h-6 transition-transform transform duration-300 text-base md:text-xl ${
                  openIndex === index ? "" : "rotate-45"
                }`}
              />
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openIndex === index ? "max-h-auto pt-6" : "max-h-0"
            }`}
          >
            {faq.description && (
              <p>{faq.description}</p>
            )}

            {faq.points && (
              <ul className="list-disc list-inside space-y-2">
                {faq.points.map((point, i) => (
                  <li className="text-sm md:text-base text-[var(--font-color)]/80" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
