import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";

const Search = () => {
  // const router = useRouter();
  // const {
  //   query: { q },
  // } = router;
  // console.log(q);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
