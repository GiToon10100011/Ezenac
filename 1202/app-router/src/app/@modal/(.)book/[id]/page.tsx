/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

const Page = (props: any) => {
  return (
    <div>
      Intercepting
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  );
};

export default Page;
