import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoList from "./components/TodoList";

const GlobalStyles = createGlobalStyle`
  ${reset}

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

  body{
    font-family: "poppins";
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
}

export default App;
