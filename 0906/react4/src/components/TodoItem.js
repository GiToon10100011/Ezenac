import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  console.log(`${id} TodoItem Update`);
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
