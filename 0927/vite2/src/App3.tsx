import { motion } from "framer-motion";
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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: url("/49CF1D14-37A0-4CFF-9010-B147D33B90A3.jpg") center/cover
    no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: { scale: 5 },
  click: { rotate: 360, borderRadius: "50%" },
  drag: { rotate: 90000, transition: { repeat: Infinity } },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Box
          drag
          variants={boxVariants}
          whileHover={"hover"}
          whileTap={"click"}
          whileDrag={"drag"}
        />
      </Wrapper>
    </>
  );
}

export default App;
