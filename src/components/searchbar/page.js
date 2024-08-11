"use client";

import React, { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="bg-none rounded w-full flex m-auto ml-5 mt-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-1 border rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-1 bg-purple-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}
