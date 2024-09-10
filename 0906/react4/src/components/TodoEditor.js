import React, { useState, useRef, useContext } from "react";
import "./TodoEditor.css";
import { TodoContext } from "../App";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext);
  const inputRef = useRef();
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    //값이 입력되면 다시 input을 초기화
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✒️</h4>
      <div className="editor-wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="염동훈의 할일"
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
