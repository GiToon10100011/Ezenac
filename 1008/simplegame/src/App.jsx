import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";


const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ul, li{
      list-style: none;
    }

    a{
      text-decoration: none;
      color: inherit;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #000;
    color: white;
  }
`;

const choice = {
  rock: { name: "바위", img: "/math_img_2.png" },
  scissors: { name: "가위", img: "/math_img_1.png" },
  paper: { name: "보", img: "/math_img_3.png" },
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [comChoice, setComChoice] = useState(null);
  const [gameResult, setGameResult] = useState("");

  const play = (select) => {
    setUserChoice(choice[select]);
    let comSelect = COMChoice();
    setComChoice(comSelect);
    setGameResult(judge(choice[select], comSelect));
  };

  const COMChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let resultItem = itemArray[randomItem];

    return choice[resultItem];
  };

  const judge = (user, computer) => {
    if (user.name === computer.name) {
      return "DRAW";
    } else if (user.name === "바위") {
      return computer.name === "가위" ? "WIN" : "LOSE";
    } else if (user.name === "가위") {
      return computer.name === "보" ? "WIN" : "LOSE";
    } else if (user.name === "보") {
      return computer.name === "바위" ? "WIN" : "LOSE";
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userChoice} result={gameResult} />
          <Box title={"Computer"} item={comChoice} result={gameResult} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
}

export default App;

// 컴퓨터와 하는 가위바위보 대결
// 컴퓨터는 컴퓨터대로의 선택, 나의 선택도 필요(가위바위보의 선택지를 선택할 버튼 필요)
// 출력공간 필요
// 이벤트와 콜백을 사용할 것이므로 당연히 상태관리 필요 → state 사용
