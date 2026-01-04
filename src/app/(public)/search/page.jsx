"use client";

import { useState } from "react";
import SearchBar from "@/components/ui/site/search/SearchBar";

export default function SearchPage() {
  const [query, setQuery] = useState("");


  return (
    <div className="pt-6">
      <div className="mb-6">
        <SearchBar onSearch={setQuery} />
      </div>
    </div>
  );
}
