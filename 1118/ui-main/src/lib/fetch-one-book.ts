import { IBookData } from "@/types";

const fetchBook = async (q: string): Promise<IBookData | null> => {
  const url = `https://park-phillips-bookstore-server-1118.vercel.app/book/${q}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchBook;
