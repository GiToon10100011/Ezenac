import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "염동훈 나이는 9824세",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "염동훈 바보",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "PM 염동훈 조짜기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  console.log(idRef);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      //es6 키와 값이 같을때 축약
      content,
      createdDate: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
