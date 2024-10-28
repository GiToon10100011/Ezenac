import React, { createContext, useState } from "react";

//자식요소들에게 보내줄 값에 대한 정의 역할

//보내줄 값에 대한 타입 정의
interface ITodoListContext {
  todoList: string[];
  onAdd: (todo: string) => void;
  onDelete: (todo: string) => void;
}

//기본값을 정의
export const todoListContext = React.createContext<ITodoListContext>({
  todoList: [],
  onAdd: (todo: string): void => {},
  onDelete: (todo: string): void => {},
});

interface ITodoListContextProvider {
  children: JSX.Element | JSX.Element[];
}

const mockTodo = [
  "Typescript 복습하기",
  "Next.js 예습하기",
  "Node.js 공부하기",
];

//실제 자식요소들에게 값을 전달할 역할을 할 컴포넌트 함수 정의
const TodoListContextProvider = ({ children }: ITodoListContextProvider) => {
  const [todoList, setTodoList] = useState(mockTodo);

  const onAdd = (todo: string) => {
    setTodoList([...todoList, todo]);
  };

  const onDelete = (currTodo: string) => {
    const filteredTodos = todoList.filter((todo) => todo !== currTodo);
    setTodoList(filteredTodos);
  };

  return (
    //다시 제대로 된 값들을 객체축약법으로 재할당시켜서 전송 
    <todoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </todoListContext.Provider>
  );
};

export default TodoListContextProvider;
