import React from "react";
import styled from "styled-components";
import { lightTheme } from "../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

const ItemBox = styled.div`
  border: 2px solid ${({ theme }) => theme.accentColor};
  border-radius: 8px;
  padding: 10px 20px;
`;

const Home = ({ theme }) => {
  return (
    <Wrapper>
      <ItemBox>Home</ItemBox>
    </Wrapper>
  );
};

export default Home;
