import React, { ReactNode } from "react";
import SearchBar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
};

export default Layout;
