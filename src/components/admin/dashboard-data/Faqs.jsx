"use client";

import { useState } from "react";

export default function Faqs({ placeholder, faqDescription }) {
  const [faqs, setFaqs] = useState([{ title: "", description: "" }]);

  const handleAddFaq = () => {
    setFaqs([...faqs, { title: "", description: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  return (
    <div className="flex mt-4 flex-wrap gap-4 w-full">
      <button className="input-box glass-effect !rounded-xl text-center cursor-pointer !text-xl">
        +
      </button>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="p-4 border border-[var(--muted-color)]/10 rounded-xl space-y-4 shadow-sm w-full"
        >
          <input
            type="text"
            value={faq.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            placeholder={placeholder}
            className="input-box w-full glass-effect !rounded-xl"
          />
          <textarea
            value={faq.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="text-lg capitalize bg-transparent w-full resize-none px-7 py-4 glass-effect rounded-xl p-2"
            placeholder={faqDescription}
            rows={3}
          />
        </div>
      ))}
    </div>
  );
}
