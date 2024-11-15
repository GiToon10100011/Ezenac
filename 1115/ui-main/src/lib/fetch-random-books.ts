import { IBookData } from "@/types";

const fetchRandomBooks = async (): Promise<IBookData[]> => {
  const url = "http://localhost:12345/book/random";
  try {
    const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error();
    // }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchRandomBooks;
