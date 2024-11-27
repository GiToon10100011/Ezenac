import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>Settings Header</div>
      {children}
    </>
  );
};

export default Layout;
