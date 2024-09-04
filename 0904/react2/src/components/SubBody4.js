import React, { useState } from "react";
import Viewer from "./Viewer";

const SubBody4 = () => {
  let [number, setNumber] = useState(0);

  const onDecrease = () => {
    setNumber(--number);
  };

  const onIncrease = () => {
    setNumber(++number);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default SubBody4;
