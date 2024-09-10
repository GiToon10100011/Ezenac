import React, { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { TodoContext } from "../App";

const TodoList = () => {
  const storeData = useContext(TodoContext);
  //이런식으로도 디폴트 값 지정이 가능하다. 이걸 더 애용하자. 
  const { todo = [] } = storeData;
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const unDoneCount = totalCount - doneCount;
    //키와 프로퍼티 이름을 같게해서 축약
    return { totalCount, doneCount, unDoneCount };
  }, [todo]);

  //실행이므로 괄호를 붙여줘야함.
  const { totalCount, doneCount, unDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List ⭐</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 일 : {doneCount}</div>
        <div>미완료된 일 : {unDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchBar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list-wrapper">
        {/* {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))} */}
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
