import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return <div>동훈이의 {id}번째 Diary Page</div>;
};

export default Diary;
