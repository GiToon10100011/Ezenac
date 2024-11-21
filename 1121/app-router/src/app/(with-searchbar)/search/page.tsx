import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  return <div>Search: {q}</div>;
};

export default Page;
