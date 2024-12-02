/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { revalidatePath } from "next/cache";

export const deleteReviewAction = async (_: any, formData: FormData) => {
  const reviewId = formData.get("reviewId");

  if (!reviewId) {
    return {
      status: false,
      error: "삭제할 리뷰가 없습니다.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
      { method: "delete", next: { tags: [`delete-review-${reviewId}`] } }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidatePath("");
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      error: `리뷰 삭제에 실패했습니다: ${error}`,
    };
  }
};
