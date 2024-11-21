import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  return <div>book/{id} page지롱</div>;
};

export default Page;
