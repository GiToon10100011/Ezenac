"use client";
import React, { useEffect, useState } from "react";
import style from "@/styles/searchbar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        <input value={search} type="text" onChange={handleSearch} />
        <input type="submit" value={"검색"} />
      </form>
    </div>
  );
};

export default SearchBar;
