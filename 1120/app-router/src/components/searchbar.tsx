"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={search} type="text" onChange={handleSearch} />
        <input type="submit" value={"검색"} />
      </form>
    </div>
  );
};

export default SearchBar;
