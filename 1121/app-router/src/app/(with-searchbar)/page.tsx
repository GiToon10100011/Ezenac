import BookItem from "@/components/book-item";
import styles from "./page.module.css";
import books from "@/mock/books.json";
import { IBookData } from "@/types";

const RecoBooks = async () => {
  const response = await fetch(
    "https://park-phillips-bookstore-server-1118.vercel.app/book/random"
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다..</div>;
  }
  const allBooks: IBookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const AllBooks = async () => {
  const response = await fetch(
    "https://park-phillips-bookstore-server-1118.vercel.app/book"
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다..</div>;
  }
  const allBooks: IBookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
};

export default Home;
