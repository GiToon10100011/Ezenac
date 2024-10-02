import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { resultData } from "../resultData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Contents = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  button {
    align-self: stretch;
  }
`;

const Title = styled.div`
  font-size: 52px;
  margin: 20px 0 10px;
  color: dodgerblue;
  font-weight: 600;
  backdrop-filter: blur(10px);
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  width: 500px;
  text-align: center;
  line-height: 30px;
  &.desc {
    font-size: 18px;
  }
`;

const Result = () => {
  const [resultDataState, setResultDataState] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const matchedMbti = resultData.find((data) => data.best === mbti);
    setResultDataState(matchedMbti);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>결과는?!</Header>
      <Contents>
        <Title>{resultDataState.name}</Title>
        <LogoImg>
          <img src={resultDataState.img} alt={resultDataState.name} />
        </LogoImg>
        <Desc>😍 {resultDataState.name}은 어떤 유형일까요? 😍</Desc>
        <Desc className="desc">{resultDataState.detail}</Desc>
        <Button onClick={handleClickButton}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
