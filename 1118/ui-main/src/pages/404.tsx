import Head from "next/head";
import React from "react";

const Error = () => {
  return (
    <>
      <Head>
        <title>박필립스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="박필립스" />
        <meta
          property="og:description"
          content="박필립스가 좋아하는 도서들을 만나보세요"
        />
      </Head>
      <h1>Page Not Found</h1>
    </>
  );
};

export default Error;
