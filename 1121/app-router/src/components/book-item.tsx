import Link from "next/link";
import { IBookData } from "../types";
import style from "@/styles/book-item.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: IBookData) => {
  return (
    <>
      <Link href={`/book/${id}`} className={style.container}>
        <img src={coverImgUrl} alt={title} />
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
