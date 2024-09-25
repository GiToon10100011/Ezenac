import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { getFormattedDate, emotionList } from "../utils";

const LightH4 = styled.h4`
  font-weight: 500;
`;

const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 22px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 20px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/81A17E2F-4289-4088-BDF9-D9C8C1FBDC81.jpg") center/cover no-repeat;
  color: white;
  font-size: 20px;
  font-family: "Noto Serif KR";
  width: 93%;
  min-height: 700px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background: #ececec;
  font-size: 20px;
  font-family: "Noto Serif KR";
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({ initData = "", onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        //편집이므로 그때당시 작성한 글의 시간을 그대로 보존해야하므로 다음과같이 Date설정.
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
    navigate("/");
  };

  const handleGoBack = () => {
    //직전 페이지로 돌아감
    navigate(-1);
  };

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div style={{ fontFamily: "Noto Serif KR" }}>
      <EditorSection>
        <LightH4>오늘의 날짜</LightH4>
        <div>
          <Input
            style={{ fontFamily: "Noto Serif KR" }}
            type="date"
            value={state.date}
            onChange={handleChangeDate}
          />
        </div>
      </EditorSection>
      <EditorSection>
        <LightH4>동훈이의 감정</LightH4>
        <EmotionGroup>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              onClick={handleChangeEmotion}
              {...item}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </EmotionGroup>
      </EditorSection>
      <EditorSection>
        <LightH4>동훈이의 일기</LightH4>
        <div>
          <Textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </EditorSection>
      <EditorSection>
        <ButtonGroup>
          <Button title={"취소하기"} onClick={handleGoBack} />
          <Button title={"작성완료"} type={"positive"} onClick={handleSubmit} />
        </ButtonGroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
