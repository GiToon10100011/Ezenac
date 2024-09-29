import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { motion } from "framer-motion";
import MusicList from "./components/MusicList";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const MainTitle = styled.h4`
  font-size: 36px;
  color: #000;
`;

const SubTitle = styled.p``;

const MenuBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 60px;
  height: 40vh;
  background: var(--point-color);
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
`;

const MenuBtn = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  span {
    position: absolute;
    height: 100%;
    width: 4px;
    background: #fff;
    &:nth-child(2) {
      right: 50%;
      transform: translate(50%);
    }
    &:last-child {
      right: 0;
    }
  }
`;

const CopyRight = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;
  opacity: 0.6;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <TitleContainer>
          <MainTitle>AA Music Collection</MainTitle>
          <SubTitle>Prosecutorial Prodigy.</SubTitle>
        </TitleContainer>
        <MenuBar>
          <MenuBtn>
            <span></span>
            <span></span>
            <span></span>
          </MenuBtn>
        </MenuBar>
        <CopyRight>2024 Designed by &copy; Toon</CopyRight>
        <MusicList></MusicList>
      </Wrapper>
    </>
  );
}

export default App;
