import React from "react";
import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
  from{
    transform: rotate(0deg);
    border-radius: 0px;
  } to{
    transform: rotate(360deg);
    border-radius: 50%;
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
`;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgColor }) => bgColor};
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

const Btn = styled.button`
  background: tomato;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: #fff;
`;

const Input = styled.input.attrs({ required: true })`
  background: tomato;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  aspect-ratio: 1;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container style={{ display: "flex" }}>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}
      <Title>Hello World</Title>
      <Btn>Log in</Btn>
      <Btn as={"a"} href="#">
        Log out
      </Btn>
      <Input required="true"></Input>
      <Box>
        <Emoji>😨</Emoji>
      </Box>
      <Emoji>🤔</Emoji>
    </Container>
  );
}

export default App;
