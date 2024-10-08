import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #000;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "DRAW" && result !== "") {
    result = result === "WIN" ? "LOSE" : "WIN";
  }
  return (
    <Wrapper>
      <Title style={{color : result === "WIN" ? "dodgerblue" : ""}}>{title}</Title>
      <Img src={item?.img} />
      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
