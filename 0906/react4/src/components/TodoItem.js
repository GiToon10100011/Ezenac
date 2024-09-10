import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div id={id} className="TodoItem">
      <div className="checkbox-col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title-col">{content}</div>
      <div className="date-col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn-col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
