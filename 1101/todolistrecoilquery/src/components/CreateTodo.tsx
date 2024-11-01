import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtom, todoStateAtom } from "../atoms";
import styled from "styled-components";

interface ITodoForm {
  todo: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<ITodoForm>();
  const setTodolist = useSetRecoilState(todoAtom);
  const state = useRecoilValue(todoStateAtom);
  const handleVaild = ({ todo }: ITodoForm) => {
    setTodolist((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: todo,
        state,
      },
    ]);
    setValue("todo", "");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(handleVaild)}>
        <input
          {...register("todo", {
            required: "Empty values cannot be accepted.",
          })}
          type="text"
          placeholder="Todo"
        />

        <input type="submit" value="Add" />
      </Form>
    </div>
  );
};

export default CreateTodo;
