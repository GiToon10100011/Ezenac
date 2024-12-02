import Link from "next/link";
import { IBookData } from "../types";
import Image from "next/image";
import style from "@/styles/book-item.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: IBookData) => {
  return (
    <>
      <Link href={`/book/${id}`} className={style.container}>
        <Image
          src={coverImgUrl}
          width={80}
          height={105}
          alt={`도서 ${title}의 표지 이미지`}
        />
        <div>
          <div className={style.title}>{title}</div>
          <div className={style.subtitle}>{subTitle}</div>
          <br />
          {/* <div className={style.description}>{description}</div>
          <br /> */}
          <div className={style.author}>
            {author} | {publisher}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BookItem;
