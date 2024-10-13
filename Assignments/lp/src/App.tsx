import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { motion } from "framer-motion";
import MusicList from "./components/MusicList";
import MenuList from "./components/MenuList";

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

const RPMBtnContainer = styled(motion.div)`
  position: fixed;
  width: 140px;
  top: 40px;
  right: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RPMBtn = styled(motion.div)`
  position: relative;

  width: 36px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  padding: 4px;
  border-radius: 20px;
  border: 1px solid;
  transition: all 0.3s;
  cursor: pointer;
`;
const Switch = styled.div<{ fastForward: boolean }>`
  position: absolute;
  top: 4px;
  left: ${({ fastForward }) => (fastForward ? "16px" : "0")};
  margin: 0 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #000;
  transition: all 0.3s;
`;

const RPMTitle = styled.span`
  font-size: 20px;
`;
const RPMValue = styled.span<{ fastForward: boolean }>`
  &.low-speed {
    color: ${({ fastForward }) =>
      fastForward ? "#000" : "var(--point-color)"};
  }
  &.high-speed {
    color: ${({ fastForward }) =>
      fastForward ? "var(--point-color)" : "#000"};
  }
  transition: all 0.3s;
`;

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
  z-index: 100;
  transform: translateY(-50%);
`;

const MenuBtn = styled(motion.div)`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: background 0.6s;
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
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    &:last-child{
      top: 54%;
      font-size: 14px;
    }
  }
  &.on {
    span {
      display: none;
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

const menuVariants = {
  expanded: {
    width: "80vw",
    height: "80vw",
    borderRadius: "50%",
    left: -250,
  },
};

export const resetContext = React.createContext<null | IresetAllContext>(null);

export interface IrotationActionObject {
  type: string;
  data: number;
}

export interface IresetAllContext {
  resetAll: boolean;
  setResetAll: Dispatch<SetStateAction<boolean>>;
}

const reducer = (state: number, action: IrotationActionObject): number => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "MANUAL":
      return action.data;
    default:
      return state;
  }
};

function App() {
  const navigate = useNavigate();
  const [rotation, dispatch] = useReducer(reducer, 0);
  const [isPlaylistOn, setIsPlaylistOn] = useState(false);
  const [resetAll, setResetAll] = useState(false);
  const [fastForward, setFastForward] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuBg, setMenuBg] = useState<null | string>(null);

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      dispatch({ type: "DECREASE", data: 30 });
      setCurrentIdx((current) => current + 1);
      setResetAll(true);
    }
    if (e.key === "ArrowLeft") {
      dispatch({ type: "INCREASE", data: 30 });
      setCurrentIdx((current) => current - 1);
      setResetAll(true);
    }
  };

  useEffect(() => {
    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        index: String(currentIdx),
      })}`,
    });

    if (currentIdx > 11) setCurrentIdx(0);
    if (currentIdx < 0) setCurrentIdx(11);
  }, [currentIdx]);

  const menuBtnVariants = {
    menuBtn: {
      width: "50vw",
      height: "50vw",
      border: "20px solid white",
      borderRadius: "50%",
      left: -250,
      background:
        menuBg !== null
          ? `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${menuBg}) center/cover no-repeat`
          : "#fff",
    },
  };

  return (
    <>
      <resetContext.Provider value={{ resetAll, setResetAll }}>
        <GlobalStyles />
        <Wrapper tabIndex={0} onKeyUp={handleOnKeyUp}>
          <TitleContainer>
            <MainTitle>AA Music Collection</MainTitle>
            <SubTitle>Prosecutorial Prodigy.</SubTitle>
          </TitleContainer>
          <MenuBar
            animate={isPlaylistOn ? "expanded" : {}}
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            variants={menuVariants}
          >
            {isPlaylistOn && (
              <MenuList
                menuBg={menuBg}
                setMenuBg={setMenuBg}
                setIsPlaylistOn={setIsPlaylistOn}
                setRotation={dispatch}
                setCurrentIdx={setCurrentIdx}
              />
            )}
            <MenuBtn
              onClick={() => {
                setIsPlaylistOn((current) => !current);
                setResetAll(true);
              }}
              animate={isPlaylistOn ? "menuBtn" : {}}
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              variants={menuBtnVariants}
              className={isPlaylistOn ? "on" : ""}
              style={{
                background:
                  isPlaylistOn || menuBg
                    ? `url(${menuBg}) center/cover no-repeat `
                    : "",
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              {isPlaylistOn && menuBg === null && (
                <>
                  <p>"Scroll to Rotate.."</p> <p>Click again to exit</p>
                </>
              )}
            </MenuBtn>
          </MenuBar>
          <RPMBtnContainer layout>
            <RPMTitle>RPM</RPMTitle>
            <RPMValue className="low-speed" fastForward={fastForward}>
              33
            </RPMValue>
            <RPMBtn
              layout
              onClick={() => setFastForward((current) => !current)}
            >
              <Switch fastForward={fastForward} />
            </RPMBtn>
            <RPMValue className="high-speed" fastForward={fastForward}>
              45
            </RPMValue>
          </RPMBtnContainer>
          <BottomFooter>
            <PrevBtn
              onClick={() => {
                dispatch({ type: "INCREASE", data: 30 });
                setCurrentIdx((current) => current - 1);
                setCurrentIdx((current) => current - 1);
                setResetAll(() => true);
              }}
            >
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
            <NextBtn
              onClick={() => {
                dispatch({ type: "DECREASE", data: 30 });
                setCurrentIdx((current) => current + 1);
                setCurrentIdx((current) => current + 1);
                setResetAll(() => true);
              }}
            >
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
          <MusicList
            rotation={rotation}
            fastForward={fastForward}
            isPlaylistOn={isPlaylistOn}
          />
        </Wrapper>
      </resetContext.Provider>
    </>
  );
}

export default App;
