import React from "react";

//1. 버튼을 클릭하게 된다면, 해당 버튼에 입력된 값을 찾아온다.
//2. 찾아온 해당값을 현재 카운트 영역으로 출력한다.
//State가 필요, useState

const Controller = ({ handleSetCount }) => {
  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div>
  );
};

export default Controller;
