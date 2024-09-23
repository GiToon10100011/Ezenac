import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../utils";

const New = () => {
  const navigate = useNavigate();
  const fnc = useContext(DiaryDispatchContext);
  const { onCreate } = fnc;

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    const { date, emotionId, content } = data;
    onCreate(date, content, emotionId);
  };

  useEffect(() => {
    setPageTitle("일기 작성")
  }, [])

  return (
    <div>
      <Header
        leftChild={<Button title={"< 뒤로가기"} onClick={goBack} />}
        title="새 일기 쓰기"
        rightChild={<Button title={"홈 >"} onClick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
