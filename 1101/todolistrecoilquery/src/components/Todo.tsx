import React, { ChangeEvent } from "react";
import { EnumTodoState, ITodo, todoAtom } from "../atoms";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

const Container = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  width: 300px;
  justify-content: space-between;
`;
const Button = styled.button`
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

//mango의 값을 persimmon으로 바꾸고 싶으면?
const food = ["pizza", "mango", "kimchi", "kimbab"];
const front = ["pizza"];
const back = ["kimbab"];
const final = [...front, "persimmon", ...back];

//혹은 slice
const target = 1;
const frontslice = food.slice(0, 1);
const backslice = food.slice(target + 1);
const finalslice = [...frontslice, "persimmon", ...backslice];

//이걸 한번에 해주는게 splice아님?

const Todo = ({ content, state, id }: ITodo) => {
  const setTodoState = useSetRecoilState(todoAtom);

  // const changeModes = (state: ITodo["state"]) => {
  //   console.log("changed to", state);
  // };

  const changeModes = (event: React.MouseEvent<HTMLButtonElement>) => {
    // const target = e.target as HTMLButtonElement;
    // console.log(target.name);
    const {
      currentTarget: { name },
    } = event;

    setTodoState((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const target = prev[targetIndex];
      const updatedTodo = { id, content, state: name as ITodo["state"] };
      const result = [
        ...prev.slice(0, targetIndex),
        updatedTodo,
        ...prev.slice(targetIndex + 1),
      ];
      return result;
    });
  };

  return (
    <Container>
      <span>{content}</span>
      <ButtonGroup>
        {state !== EnumTodoState.TODO && (
          <Button name={EnumTodoState.TODO} onClick={changeModes}>
            Todo
          </Button>
        )}
        {state !== EnumTodoState.DOING && (
          <Button name={EnumTodoState.DOING} onClick={changeModes}>
            Doing
          </Button>
        )}
        {state !== EnumTodoState.DONE && (
          <Button name={EnumTodoState.DONE} onClick={changeModes}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default Todo;
