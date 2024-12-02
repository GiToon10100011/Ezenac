import type { Metadata } from "next";
import Link from "next/link";
import style from "@/styles/layout.module.css";
import { ReactNode } from "react";
import { IBookData } from "@/types";

export const metadata: Metadata = {
  title: "박필립스",
  description: "박필립스가 좋아하는 도서들을 만나보세요.",
  openGraph: {
    title: "박필립스",
    description: "박필립스가 좋아하는 도서들을 만나보세요.",
    images: ["/thumbnail.png"],
  },
};

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <footer>제작 @Park Phillips</footer>;
  }

  const books: IBookData[] = await response.json();
  const bookCount = books.length;
  return (
    <footer>
      <div>제작 @Park Phillips</div>
      <div>{bookCount}개의 도서가 등록되었습니다.</div>
    </footer>
  );
};

const RootLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <html lang="ko">
      <body className={style.container}>
        <div>
          <header>
            <Link href={"/"}>Park Phillips</Link>
            <main>{children}</main>
            <Footer />
          </header>
        </div>
        {/* 실제 모달이 출력되는 위치 */}
        {modal}
        {/* 모달이 나올 수 있게하는 창구 */}
        <div id="modal-root"></div>
      </body>
    </html>
  );
};

export default RootLayout;
