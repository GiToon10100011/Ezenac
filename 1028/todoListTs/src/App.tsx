import { useContext, useState } from "react";
import styled from "styled-components";
import DataWrapper from "./components/DataWrapper";
import TodoInput from "./components/TodoInput";
import Button from "./components/Button";
import ShowInputButton from "./components/ShowInputButton";
import InputContainer from "./components/InputContainer";
import TodoListContextProvider, {
  todoListContext,
} from "./contexts/TodoContext";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

function App() {
  const [showTodoInput, setShowTodoInput] = useState(false);
  return (
    <Container>
      <TodoListContextProvider>
        <DataWrapper />
        <InputContainer />
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
