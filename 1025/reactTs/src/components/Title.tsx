import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 24px;
`;

const Label = styled.h1`
  font-size: 18px;
`;

interface ITitleProps {
  label: string;
}

const Title = ({ label }: ITitleProps) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Title;
