"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cross } from "@/components/icons/icons";
import Profile from "./Profile";

export default function Sidebar({ isOpen, onClose, onLanguageClick }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-[450px] bg-white z-[9999] shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-6 flex justify-between items-center">
          <Link href={"/"}>
            <h2 className="!text-[var(--font-color)]">Games</h2>
          </Link>
          <button onClick={onClose}>
            <Cross className="w-8 h-8" />
          </button>
        </div>
        <Profile onLanguageClick={onLanguageClick} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-40 z-[9998]"
          onClick={onClose}
        />
      )}
    </>
  );
}
