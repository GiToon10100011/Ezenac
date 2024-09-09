import React, { useState, useReducer } from "react";

//acttion객체를 받아오고 완성되어진 값은 state에 담겨져서 넘겨준다.
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
      break;
    case "DECREASE":
      return state - action.data;
      break;
    case "RESET":
      return 0
    default:
      return state;
  }
};

const TestComp = () => {
  // const [count, setCount] = useState(0);

  // const onIncrease = () => {
  //   setCount((count + 1));
  // };
  // const onDecrease = () => {
  //   setCount((count - 1));
  // };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
