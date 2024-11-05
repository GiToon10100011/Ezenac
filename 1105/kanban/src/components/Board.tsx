import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { LegacyRef, useRef } from "react";
import { useForm } from "react-hook-form";
import { ITodo, todoAtom } from "../atoms";
import { useSetRecoilState } from "recoil";

interface IBoardProps {
  todos: ITodo[];
  boardId: string;
}

interface IAreaProps {
  $isDraggingOver: boolean;
  $isDraggingFromThis: boolean;
}

interface IFormProps {
  todo: string;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 520px;
  height: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
  /* background: royalblue; */
  background: ${({ $isDraggingFromThis, $isDraggingOver }) =>
    $isDraggingOver ? "pink" : $isDraggingFromThis ? "crimson" : "royalblue"};
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const Board = ({ todos, boardId }: IBoardProps) => {
  const setTodos = useSetRecoilState(todoAtom);
  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const handleOnAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };

  const { register, setValue, handleSubmit } = useForm<IFormProps>();
  const onValid = ({ todo }: IFormProps) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos((prev) => {
      return {
        ...prev,
        [boardId]: [...prev[boardId], newTodo],
      };
    });
    setValue("todo", "");
  };
  return (
    <>
      <Wrapper>
        <Title>{boardId}</Title>
        {/* <input ref={inputRef} type="text" placeholder="Add Todo" /> */}
        {/* <button onClick={handleOnAddTodo}>Add</button> */}
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("todo", { required: true })}
            type="text"
            placeholder={`Add Task to ${boardId}`}
          />
        </Form>
        <Droppable droppableId={boardId}>
          {(drop, snapshot) => (
            <Area
              $isDraggingOver={snapshot.isDraggingOver}
              $isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
              ref={drop.innerRef}
              {...drop.droppableProps}
            >
              {todos.map((todo, index) => (
                <DraggableCard
                  key={todo.id}
                  todoId={todo.id}
                  todoText={todo.text}
                  index={index}
                />
              ))}
              {drop.placeholder}
            </Area>
          )}
        </Droppable>
      </Wrapper>
    </>
  );
};

export default Board;
