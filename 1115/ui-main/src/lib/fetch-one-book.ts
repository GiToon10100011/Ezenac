import { IBookData } from "@/types";

const fetchBook = async (q: string): Promise<IBookData | null> => {
  let url = `http://localhost:12345/book/${q}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchBook;
