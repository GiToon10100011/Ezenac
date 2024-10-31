import { useForm } from "react-hook-form";
import { atom } from "recoil";
import styled from "styled-components";

interface ITodoForm {
  todo: string;
}

const todoAtom = atom({
  key: "todo",
  default: [],
});

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoList = () => {
  const { register, handleSubmit, setValue } = useForm<ITodoForm>();
  const handleVaild = () => {
    setValue("todo", "");
  };

  return (
    <>
      <Container>
        <Title>TodoList</Title>
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
        <ul>
          <li>React 복습</li>
          <li>스타벅스 가기 </li>
        </ul>
      </Container>
    </>
  );
};

export default TodoList;
