import BookItem from "@/components/book-item";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { IBookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";

// 특정 페이지의 유형을 강제로 static || dynamic 페이지로 설정하도록 하는 옵션들
// 1. auto
// 2. force-dynamic
// 3. force-static
// 4. error
export const dynamic = "force-dynamic";

const RecoBooks = async () => {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    }
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
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
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
    <div>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
