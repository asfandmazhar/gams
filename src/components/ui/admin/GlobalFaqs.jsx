"use client";

import React, { useState } from "react";
import { Cross } from "@/components/icons/icons";

export default function GlobalFaqs({
  data = [],
  className,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="my-4 mb-10 font-bold !text-[var(--navigation-font-color)]">
        Faq's
      </h2>
      {data.map((faq, index) => (
        <div
          key={index}
          className={`flex flex-col glass-effect glass-effect rounded-xl h-auto px-4 py-4 md:px-8 md:py-6 cursor-pointer ${className}`}
          onClick={() => toggleFaq(index)}
        >
          <div className="flex justify-between items-center gap-2">
            <h4 className="!text-[var(--navigation-font-color)]">
              {faq.title}
            </h4>
            <div>
              <Cross
                className={`w-4 h-4 md:w-6 md:h-6 fill-[var(--navigation-font-color)] transition-transform transform duration-300 text-base md:text-xl ${
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
              <p className="!text-[var(--navigation-font-color)]/70">
                {faq.description}
              </p>
            )}

            {faq.points && (
              <ul className="list-disc list-inside space-y-2">
                {faq.points.map((point, i) => (
                  <li
                    className="text-sm md:text-base !text-[var(--navigation-font-color)]/70"
                    key={i}
                  >
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
