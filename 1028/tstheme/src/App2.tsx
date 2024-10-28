import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

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

const Container = styled.div`
  background: ${({ theme }) => theme.bgColor};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;

const App = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Hello World</Title>
        <form action="http://localhost:3000">
          <input type="text" placeholder="username" onChange={onChange} />
        </form>
      </Container>
    </>
  );
};

export default App;
