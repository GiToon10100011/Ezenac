import React from "react";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✒️</h4>
      <div className="editor-wrapper">
        <input placeholder="염동훈의 할일" />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
