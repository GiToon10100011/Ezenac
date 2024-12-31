import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Header />
    </>
  );
};

export default Layout;
