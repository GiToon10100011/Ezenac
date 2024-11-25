import React, { ReactNode, Suspense } from "react";
import SearchBar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  //서버컴포넌트지만 동적으로 값을 받아와야함.(SearchBar은 클라이언트 컴포넌트)
  return (
    <>
      {/* <div>{new Date().toLocaleTimeString()}</div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
};

export default Layout;
