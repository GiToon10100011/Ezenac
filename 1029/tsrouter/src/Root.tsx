import React from "react";
import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
