import { useState } from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import DataWrapper from "./components/DataWrapper";
import TextInput from "./components/TextInput";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const mockTodo = [
  "Typescript 복습하기",
  "Next.js 예습하기",
  "Node.js 공부하기",
];

function App() {
  const [todos, setTodos] = useState(mockTodo);
  const [todo, setTodo] = useState("");
  const onAdd = () => {
    if (todo === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };
  const onDelete = (currTodo: string) => {
    const filteredTodos = todos.filter((todo) => todo !== currTodo);
    setTodos(filteredTodos);
  };
  return (
    <Container>
      <DataWrapper todoList={todos} onDelete={onDelete} />
      <TextInput value={todo} setTodo={setTodo} />
      <Button label="추가" color="#000" onClick={onAdd} />
    </Container>
  );
}

export default App;
