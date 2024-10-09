import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { motion } from "framer-motion";
import MusicList from "./components/MusicList";

const audioControlStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  color: black;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  svg{
    fill: var(--point-color);
    width: 70px;
    height: 60px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  /* background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/images/AA1-2.jpg") center/cover no-repeat; */
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

const RPMBtn = styled.div``;

const MenuBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 80px;
  height: 50vh;
  background: var(--point-color);
  left: 30px;
  top: 50%;
  z-index: 10;
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

const BottomFooter = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NextBtn = styled.span`
  ${audioControlStyles}
  svg {
    fill: var(--point-color);
    transition: all 0.3s;
  }
  &:hover svg {
    transform: translateX(4px);
  }
`;
const PrevBtn = styled.span`
  ${audioControlStyles}
  svg {
    transform: scaleX(-1);
    fill: var(--point-color);
    transition: all 0.3s;
  }
  &:hover svg {
    transform: scaleX(-1) translateX(4px);
  }
`;

const CopyRight = styled.span`
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
        <BottomFooter>
          <PrevBtn>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
            >
              <g>
                <g>
                  <path d="M10,123.8h219.1v8.4H10V123.8z" />
                  <path d="M203.9,115.4L246,128l-42.1,12.6V115.4z" />
                </g>
              </g>
            </svg>
            Prev
          </PrevBtn>
          <CopyRight>2024 Designed by &copy; CAPCOM</CopyRight>
          <NextBtn>
            Next
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
            >
              <g>
                <g>
                  <path d="M10,123.8h219.1v8.4H10V123.8z" />
                  <path d="M203.9,115.4L246,128l-42.1,12.6V115.4z" />
                </g>
              </g>
            </svg>
          </NextBtn>
        </BottomFooter>
        <MusicList></MusicList>
      </Wrapper>
    </>
  );
}

export default App;
