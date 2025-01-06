import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;
  width: 45%;
  height: 70%;
  opacity: 0.8;
  background: radial-gradient(
      circle at center,
      rgb(140, 140, 140) 2px,
      transparent 2px
    )
    rgb(188, 188, 188);
  background-size: 4px 4px;
  border-top: 2px solid ${({ theme }) => theme.colors.brightPoint};
  border-bottom: 2px solid ${({ theme }) => theme.colors.brightPoint};
`;

const ListBackground = () => {
  return (
    <>
      <Container />
    </>
  );
};

export default ListBackground;
