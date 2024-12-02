/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";
import delay from "@/util/delay";
import { revalidatePath } from "next/cache";

export const createReviewAction = async (_: any, formData: FormData) => {
  //해당 함수가 Server Action의 기능을 가지게 해줌
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요.",
    };
  }
  console.log("test");

  try {
    await delay(2000);
    console.log(bookId, content, author);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      { method: "POST", body: JSON.stringify({ bookId, content, author }) }
    );
    console.log(response.status);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidatePath(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다: ${error}`,
    };
  }
};
