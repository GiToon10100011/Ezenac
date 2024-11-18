import { IBookData } from "@/types";

const fetchBooks = async (q?: string): Promise<IBookData[]> => {
  let url = "https://park-phillips-bookstore-server-1118.vercel.app/book";
  if (q) {
    url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchBooks;
