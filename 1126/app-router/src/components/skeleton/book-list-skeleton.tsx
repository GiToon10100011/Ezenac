import React from "react";
import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  return new Array(count).fill(<BookItemSkeleton />);
};

export default BookListSkeleton;
