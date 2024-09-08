import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => {
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

  return (
    <div className="TodoList">
      <h4>Todo List ⭐</h4>
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

export default TodoList;
