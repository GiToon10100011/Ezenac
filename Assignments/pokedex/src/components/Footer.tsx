import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    #111111 0%,
    #2b2b2b 60%,
    #4a4a4a 80%,
    #666666 100%
  );
  height: 60px;
`;

const Footer = () => {
  return <Container></Container>;
};

export default Footer;
