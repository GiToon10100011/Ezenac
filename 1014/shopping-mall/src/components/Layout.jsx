import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar {...props} />
      <Outlet />
    </>
  );
};

export default Layout;
