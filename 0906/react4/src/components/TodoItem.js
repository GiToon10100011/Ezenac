import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate }) => {
  return (
    <div id={id} className="TodoItem">
      <div className="checkbox-col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title-col">{content}</div>
      <div className="date-col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn-col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
