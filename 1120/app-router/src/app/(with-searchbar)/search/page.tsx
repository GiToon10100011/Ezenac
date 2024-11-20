import ClientComponent from "@/components/client-component";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  return (
    <div>
      Search: {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Page;
