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
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #92c551;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0 4px 4px 0;
    background: #000;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  color: white;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Container>
      <HeaderTitle>National Pokedex</HeaderTitle>
    </Container>
  );
};

export default Header;
