"use client";

import { useState } from "react";
import { Filter } from "@/components/icons/icons";
import Input from "@/components/ui/site/Input";
import Button from "@/components/ui/site/button/BorderButton";
import { FilterModal } from "./FilterModal";

export function SearchAndFilters({ searchQuery, onSearchChange }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <>
      <div className="flex gap-2 md:gap-4 mb-8">
        <Input
          placeholder="Search order ID..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          inputClass="w-full placeholder:!text-sm !text-sm -mx-1"
          className="!py-4 !px-6"
          iconSize="w-4 h-4"
        />

        <div
          className="flex items-center gap-2 cursor-pointer bg-[var(--muted-color)]/30 px-4 md:px-6 rounded-full transition-colors duration-200"
          onClick={() => setIsFilterModalOpen(true)}
        >
          <Filter className="h-4 w-4 cursor-pointer" />
          <Button
            buttonName={"Filters"}
            className={"cursor-pointer !text-sm"}
          />
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </>
  );
}
