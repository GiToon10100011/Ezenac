import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Label from "./components/Label";
const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => setCounter(counter - 1);
  const add = () => setCounter(counter + 1);

  return (
    <Wrapper>
      <Title>Counter App</Title>
      <Contents>
        <Button onClick={sub} label="-" />
        <Label counter={counter} />
        <Button onClick={add} label="+" />
      </Contents>
    </Wrapper>
  );
}

export default App;
