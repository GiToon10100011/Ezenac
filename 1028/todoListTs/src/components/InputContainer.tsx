import React, { useState } from "react";
import styled from "styled-components";
import ShowInputButton from "./ShowInputButton";
import TodoInput from "./TodoInput";

const Container = styled.div``;

// interface IInputContainer {
//   onAdd: (todo: string) => void;
// }

const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onClose = () => {
    // onAdd(todo);
    setShowTodoInput(false);
  };

  const showAddTodo = () => {
    setShowTodoInput((current) => !current);
  };

  return (
    <Container>
      {showTodoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton showTodoInput={showTodoInput} onClick={showAddTodo} />
    </Container>
  );
};

export default InputContainer;
