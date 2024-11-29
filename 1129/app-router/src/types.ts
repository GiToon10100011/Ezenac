export interface IBookData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}

export interface IReviewData {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  bookId: number;
}
