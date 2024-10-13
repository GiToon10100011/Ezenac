import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

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
    font-family: "Playfair Display";
  }

  /* Variables */
  :root{
    --point-color: #b3813b;
    --sub-point-color: #2e1707;
  }
`;

export default GlobalStyles;
