import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkmodeAtom } from "./atoms";

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

  body{
    font-family: "Source Sans 3";
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export interface IDarkmodeOutletContext {
  isDarkmode: boolean;
  toggleDark: () => void;
}

function App() {
  // const [isDarkmode, setIsDarkmode] = useState(true);
  // const toggleDark = () => {
  //   setIsDarkmode((current) => !current);
  // };

  const isDarkmode = useRecoilValue(isDarkmodeAtom);

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </ThemeProvider>
  );
}

export default App;
