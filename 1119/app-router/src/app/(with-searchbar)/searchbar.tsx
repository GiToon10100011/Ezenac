"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input value={search} type="text" onChange={handleSearch} />
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
