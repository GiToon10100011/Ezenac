import BookItem from "@/components/book-item";
import { IBookData } from "@/types";
import delay from "@/util/delay";
import React, { Suspense } from "react";
import Loading from "./loading";

// export const dynamic = "force-static"

const SearchResult = async ({ q }: { q: string }) => {
  // const { q } = await searchParams;
  //의도적으로 시간을 지연시킴
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  );
  const searchBooks: IBookData[] = await response.json();
  if (!response.ok) {
    return <div>오류가 발생했습니다..</div>;
  }
  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  return (
    <Suspense key={(await searchParams).q || ""} fallback={<Loading />}>
      <SearchResult q={(await searchParams).q || ""} />
    </Suspense>
  );
};

export default Page;
