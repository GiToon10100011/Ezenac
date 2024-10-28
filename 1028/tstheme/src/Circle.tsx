import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ICircle>`
  background: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ICircle {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "World!" }: ICircle) => {
  const [count, setCount] = useState<number | string>(1);
  setCount("JS");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text ?? "Circle"}
    </Container>
  );
};

export default Circle;
