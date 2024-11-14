import type { IBookData } from "@/types";
import Link from "next/link";
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
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} alt={String(id)} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
