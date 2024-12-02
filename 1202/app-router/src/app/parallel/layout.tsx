import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href={"/parallel"}>Parallel</Link>
        <Link href={"/parallel/setting"}>Parallel Settings</Link>
      </div>
      {sidebar}
      {feed}
      {children}
    </div>
  );
};

export default Layout;
