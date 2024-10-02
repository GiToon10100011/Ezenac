import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

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
  font-size: 40px;
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
  font-size: 28px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>염동훈 유형 판별기</Header>
      <Contents>
        <Title>나랑 제일 잘맞는 동훈이는?</Title>
        <LogoImg>
          <img src="/images/ydhdot.png" alt="logo" />
        </LogoImg>
        <Desc>😨 MBTI를 기반으로 하는 나랑 맞는 염동훈 찾기 😨</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
