import { IBookData } from "@/types";
import React from "react";
import style from "@/styles/bookPage.module.css";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );
  const book: IBookData = await response.json();

  const {
    id: bookId,
    title,
    subTitle,
    description,
    author,
    coverImgUrl,
    publisher,
  } = book;
  return (
    <>
      <div className={style.container}>
        <div
          className={style.coverImgContainer}
          style={{ backgroundImage: `url("${coverImgUrl}")` }}
        >
          <img src={coverImgUrl} alt={title} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
};

export default Page;
