import { IBookData } from "@/types";

const fetchBooks = async (q?: string): Promise<IBookData[]> => {
  let url = "http://localhost:12345/book";
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
