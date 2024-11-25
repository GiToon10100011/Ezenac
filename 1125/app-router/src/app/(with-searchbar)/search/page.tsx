import BookItem from "@/components/book-item";
import { IBookData } from "@/types";
import React from "react";

// export const dynamic = "force-static"

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
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

export default Page;
