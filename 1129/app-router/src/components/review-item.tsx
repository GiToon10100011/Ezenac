import React from "react";
import style from "@/styles/review-item.module.css";
import { IReviewData } from "@/types";
import ReviewItemDeleteButton from "./review-item-delete-button";

const ReviewItem = ({
  id,
  content,
  author,
  createdAt,
  bookId,
}: IReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className={style.delete_btn}>
          <ReviewItemDeleteButton reviewId={id} bookId={bookId}/>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
