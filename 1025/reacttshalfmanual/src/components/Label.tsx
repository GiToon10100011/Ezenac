import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 18px;
`;

interface ILabelProps {
  counter: number;
}

const Label = ({ counter }: ILabelProps) => {
  return <Container>{counter}</Container>;
};

export default Label;
