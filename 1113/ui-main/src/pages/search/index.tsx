import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  console.log(q);
  return <div>Search : {q}</div>;
};

export default Search;
