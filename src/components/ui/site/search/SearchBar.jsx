"use client";
import { useState } from "react";
import Input from "../Input";
import { Cross } from "@/components/icons/icons";
import Container from "@/components/site/layout/Container";
import Link from "next/link";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  };

  return (
    <div>
      <Container>
        <div className="flex items-center w-full gap-3 md:gap-8">
          <Input
            type="text"
            value={term}
            onChange={handleChange}
            placeholder="Search..."
            className="w-full placeholder:text-xl placeholder:text-[var(--muted-color)]"
          />
          <Link href={"/"} className="cursor-pointer">
            <Cross
              className={"w-7 md:w-8 lg:w-10 h-7 md:h-8 lg:h-10 fill-gray-400"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}
