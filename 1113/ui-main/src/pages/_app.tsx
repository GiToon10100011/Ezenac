import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleNavigateTest = () => {
    router.push("/test")
  };
  return (
    <>
      <header>
        <Link href={"/"}>Home</Link>
        &nbsp;
        <Link href={"/search"}>Search</Link>
        &nbsp;
        <Link href={"/book"}>Book</Link>
        <div>
          <button onClick={handleNavigateTest}>/test로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
