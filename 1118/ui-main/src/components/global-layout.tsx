import Link from "next/link";
import { ReactNode } from "react";
import style from "../styles/global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📕 Book Lists</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer>Copyright &copy; Park Phillips</footer>
    </div>
  );
};

export default GlobalLayout;
