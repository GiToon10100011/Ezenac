import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    font-family: Source Sans 3;
    background: linear-gradient(135deg, #e09, #d02);
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  bottom: 240px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
  }
`;

const boxVariants = {
  initial: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

// const boxVariantsNext = {
//   initial: {
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exit: {
//     x: -500,
//     opacity: 0,
//     scale: 0,
//   },
// };

// const boxVariantsPrev = {
//   initial: {
//     x: -500,
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exit: {
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
// };

const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [isVisible, setIsVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  // const [currentDirection, setCurrentDirection] = useState("");
  const prevSlide = () => {
    setIsBack(true);
    setIsVisible((prev) => (prev === 1 ? boxArray.length : prev - 1));
    // setCurrentDirection("prev");
  };

  const nextSlide = () => {
    setIsBack(false);
    setIsVisible((prev) => (prev === boxArray.length ? 1 : prev + 1));
    // setCurrentDirection("next");
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence mode="wait" custom={isBack}>
          {boxArray.map(
            (item) =>
              item === isVisible && (
                <Box
                  custom={isBack}
                  key={isVisible}
                  // variants={
                  //   currentDirection === "prev"
                  //     ? boxVariantsPrev
                  //     : boxVariantsNext
                  // }
                  variants={boxVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                >
                  {isVisible}
                </Box>
              )
          )}
        </AnimatePresence>
        <ButtonWrapper>
          <Button onClick={prevSlide}>Prev</Button>
          <Button onClick={nextSlide}>Next</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default App;
