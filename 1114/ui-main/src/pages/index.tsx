import React, { ReactNode } from "react";
import style from "@/styles/index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";

const Home = () => {
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
