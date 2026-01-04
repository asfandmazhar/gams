"use client";

import React, { useRef, useEffect, useState } from "react";
import Button from "../button/Button";
import { Cross } from "@/components/icons/icons";

export default function LanguageModal({
  isOpen,
  onClose,
  selectedLang,
  setSelectedLang,
}) {
  const modalRef = useRef(null);
  const [tempLang, setTempLang] = useState(selectedLang);

  const languages = [
    "English",
    "Spanish ( Español )",
    "Korean ( 한국어 )",
    "Italian ( Italiano )",
    "French ( Français )",
    "German ( Deutsch )",
    "Chinese ( 中文 )",
    "Japanese ( 日本語 )",
  ];

  useEffect(() => {
    if (isOpen) {
      setTempLang(selectedLang);
    }
  }, [isOpen, selectedLang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:items-center md:justify-center items-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--font-color)]/50"></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white p-4 md:p-6 rounded-t-2xl md:rounded-xl shadow-lg z-10 
               w-full md:w-[90%] md:max-w-xl 
               h-auto overflow-y-auto"
      >
        <div className="border-bottom relative">
          <div>
            <h3 className="text-xl mb-2 !text-[var(--font-color)]">
              Set your preferences
            </h3>
            <p className="text-gray-500 mb-4 !text-sm">
              Please set your language
            </p>
          </div>
          <div onClick={onClose} className="cursor-pointer">
            <Cross className={"w-8 h-8 absolute right-0 top-0"} />
          </div>
        </div>

        {/* Dropdown */}
        <div className="border-bottom py-4">
          <p className="text-gray-500 mb-4 !text-sm">language</p>
          <select
            value={tempLang}
            onChange={(e) => setTempLang(e.target.value)}
            className="w-full bordered rounded-md text-sm md:text-base px-3 py-2 mb-4 cursor-pointer"
          >
            {languages.map((lang, i) => (
              <option
                key={i}
                value={lang}
                className="cursor-pointer text-sm md:text-base"
              >
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 py-4">
          <Button
            onClick={onClose}
            buttonName="Cancel"
            className="!bg-[var(--muted-color)]/20 !text-[var(--font-color)] bordered"
          />
          <Button
            onClick={() => {
              console.log(`Language changed to ${selectedLang}`);
              localStorage.setItem("language", selectedLang);
              setSelectedLang(tempLang);
              onClose();
            }}
            buttonName="Confirm"
          />
        </div>
      </div>
    </div>
  );
}
