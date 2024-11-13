import { useRouter } from "next/router";
import React from "react";

const Book = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);
  return <div>Book: {id && id?.length > 0 && id[0]}</div>;
};

export default Book;
