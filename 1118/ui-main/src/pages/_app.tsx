import "@/styles/globals.css";
import GlobalLayout from "@/components/global-layout";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactNode } from "react";

//NextPage라는 타입이 반드시 존재해야함.
type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};
//이거 그럼 interface로 만들어놓고 extends로 해도 가능함? 가능하지 않을까 싶다고 함

export default function App({
  pageProps,
  Component,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
