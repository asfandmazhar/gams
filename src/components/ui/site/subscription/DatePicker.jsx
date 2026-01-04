"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/icons/icons";
import { DayPicker } from "react-day-picker";
import Button from "@/components/ui/site/button/Button";
import "react-day-picker/dist/style.css";

export default function DatePicker({ placeholder = "Select date", value, onChange }) {
  const [date, setDate] = useState(value);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    if (onChange) onChange(selectedDate);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="w-full rounded bordered px-3 py-2 flex items-center cursor-pointer"
        onClick={() => document.getElementById("date-picker-pop").showModal()}
      >
        <span className="flex items-center text-[var(--font-color)]/70">
          <Calendar className="mr-2 h-4 w-4 fill-[var(--font-color)]/70" />
          {date ? format(date, "PPP") : placeholder}
        </span>
      </button>

      {/* Native dialog for popup */}
      <dialog id="date-picker-pop" className="rounded-lg p-4">
        <DayPicker mode="single" selected={date} onSelect={handleSelect} />
        <Button
          onClick={() => document.getElementById("date-picker-pop").close()}
          className="mt-2 bg-[] text-white px-4 py-2 rounded-lg"
          buttonName={"Close"}
        />
      </dialog>
    </div>
  );
}
