import React, { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { IBookData } from "@/types";
import { useRouter } from "next/router";
import Head from "next/head";

const Search = () => {
  const router = useRouter();
  const [books, setBooks] = useState<IBookData[]>();
  const q = router.query.q;
  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);
  return (
    <>
      <Head>
        <title>박필립스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="박필립스" />
        <meta
          property="og:description"
          content="박필립스가 좋아하는 도서들을 만나보세요"
        />
      </Head>
      <div>
        {books?.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
