import { IBookData } from "@/types";
import React from "react";
import style from "@/styles/bookPage.module.css";
import { notFound } from "next/navigation";

const Booktail = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const book: IBookData = await response.json();

  const { title, subTitle, description, author, coverImgUrl, publisher } = book;
  return (
    <section>
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
    </section>
  );
};

const ReviewEditor = () => {
  //서버에서 비동기적으로 작동하는 함수정의
  const createReviewAction = async (formData: FormData) => {
    //해당 함수가 Server Action의 기능을 가지게 해줌
    "use server";
    const content = formData.get("content");
    const author = formData.get("author");
    console.log(content, author);
  };
  return (
    <section>
      <form action={createReviewAction}>
        <input type="text" name="content" placeholder="리뷰" />
        <input type="text" name="author" placeholder="작성자" />
        <input type="submit" value={"작성하기"} />
      </form>
    </section>
  );
};

//Static Parameter를 생성해주는 함수
export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className={style.container}>
      <Booktail bookId={(await params).id} /> <ReviewEditor />{" "}
    </div>
  );
};

export default Page;
