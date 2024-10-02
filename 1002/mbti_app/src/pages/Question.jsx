import React, { useState, useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { QuestionData } from "../questiondata";

const scoreContext = React.createContext();

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 30px;
  width: auto;
  text-align: center;
  margin-bottom: 10px;
  padding: 8px 16px;
  border-bottom: 1px solid;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > button {
    width: 400px;
    height: 200px;
    font-size: 18px;
  }
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(0);

  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const now = parseInt((questionNum / QuestionData.length) * 100);

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((score) =>
      score.id === type ? { id: score.id, score: score.score + num } : score
    );

    setTotalScore(newScore);
    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti,
        })}`,
      });
    }
  };

  // const handleClickButtonA = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     //첫번째의 인덱스값만 새로운 스코어로 대체해줌
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };

  // const handleClickButtonB = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     //첫번째의 인덱스값만 새로운 스코어로 대체해줌
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };

  console.log(totalScore);

  return (
    <>
      <ProgressBar
        variant="info"
        now={(questionNum / QuestionData.length) * 100}
        label={`${now}%`}
      />
      <Wrapper>
        <Title>{QuestionData[questionNum].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton(1, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            onClick={() => handleClickButton(0, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;
