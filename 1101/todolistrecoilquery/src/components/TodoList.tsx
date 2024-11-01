import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  EnumTodoState,
  ITodo,
  todoAtom,
  todoSelector,
  todoStateAtom,
} from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import React from "react";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #000;
`;

const TodoList = () => {
  const todolist = useRecoilValue(todoSelector);

  const [todoState, setTodoState] = useRecoilState(todoStateAtom);

  const onChangeState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTodoState(event.currentTarget.value as ITodo["state"]);
  };

  return (
    <>
      <Container>
        <Title>TodoList</Title>
        <select value={todoState} onInput={onChangeState}>
          <option value={EnumTodoState.TODO}>TODO</option>
          <option value={EnumTodoState.DOING}>DOING</option>
          <option value={EnumTodoState.DONE}>DONE</option>
        </select>
        <CreateTodo />
        {todolist?.map((item) => (
          <Todo key={item.id} {...item} />
        ))}
      </Container>
    </>
  );
};

export default TodoList;
