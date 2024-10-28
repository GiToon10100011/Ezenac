import React, { useContext, useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import styled from "styled-components";
import Title from "./Title";
import { todoListContext } from "../contexts/TodoContext";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const Contents = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface ITodoInput {
  onClose: () => void;
}

const TodoInput = ({ onClose }: ITodoInput) => {
  const { onAdd } = useContext(todoListContext);
  const [todo, setTodo] = useState("");

  const onAddTodo = () => {
    if (todo === "") return;
    onAdd(todo);
    setTodo("");
    onClose();
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={todo} setTodo={setTodo} />
          <Button label="추가" color="#000" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default TodoInput;
