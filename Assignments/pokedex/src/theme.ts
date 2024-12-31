import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const theme: DefaultTheme = {
  colors: {
    background: "#333",
  },
  fonts: {
    bits: "VT323",
  },
};

export const GlobalStyles = createGlobalStyle`
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

  ${reset}

  body{
    background: conic-gradient(from 90deg at 3px 3px,#1eca92 90deg,#049a6d 0) 
    0 0/20px 20px;
    font-family: ${({ theme }) => theme.fonts.bits};
  }
`;
