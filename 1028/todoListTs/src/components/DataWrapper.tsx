import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
`;

const DataWrapper = () => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList />
    </Container>
  );
};

export default DataWrapper;
