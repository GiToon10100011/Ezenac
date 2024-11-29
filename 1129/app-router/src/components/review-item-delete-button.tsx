"use client";
import { deleteReviewAction } from "@/actions/delete-review-action";
import React, { useActionState, useEffect, useRef } from "react";

const ReviewItemDeleteButton = ({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) => {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = () => {
    if (window.confirm("삭제하시겠습니까?")) formRef.current?.requestSubmit();
    else return;
  };

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);
  return (
    <form ref={formRef} action={formAction}>
      <input type="text" name="reviewId" value={reviewId} hidden readOnly />
      <input type="text" name="bookId" value={bookId} hidden readOnly />
      {isPending ? <div>...</div> : <div onClick={handleSubmit}>삭제하기</div>}
    </form>
  );
};

export default ReviewItemDeleteButton;
