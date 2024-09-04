import React, { useState, useRef } from "react";

const SubBody5 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) textRef.current.focus();
    else{
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={textRef} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
};

export default SubBody5;
