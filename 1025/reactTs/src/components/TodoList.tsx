import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export interface ITodoListProps {
  todoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const TodoList = ({ todoList, onDelete }: ITodoListProps) => {
  return (
    <Container>
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          label={todo}
          onDelete={() => typeof onDelete === "function" && onDelete(todo)}
        />
      ))}
    </Container>
  );
};

export default TodoList;
