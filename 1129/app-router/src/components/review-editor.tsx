"use client";
import { createReviewAction } from "@/actions/create-review-action";
import style from "@/styles/review-editor.module.css";
import { useActionState, useEffect } from "react";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰"
          required
        />
        <div className={style.submit_container}>
          <input
            type="text"
            name="author"
            placeholder="작성자"
            disabled={isPending}
            required
          />
          <input
            type="submit"
            value={isPending ? "..." : "작성하기"}
            disabled={isPending}
            required
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
