import React from "react";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: #000;
  width: 100%;
  padding: 20px;
  height: fit-content;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -160px;
    width: 140px;
    height: 100%;
    border-top: 10px solid black;
    border-bottom: 60px solid transparent;
  } */
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <HeaderTitle>National Pokedex</HeaderTitle>
    </Container>
  );
};

export default Header;
