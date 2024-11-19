import React, { ReactNode } from "react";
import SearchBar from "./searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
};

export default Layout;
