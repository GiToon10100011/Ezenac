import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
  const count = useSelector((state) => state.count);
  return <div>염동훈: {count}세</div>;
};

export default Box;
