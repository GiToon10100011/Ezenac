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
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: url("/49CF1D14-37A0-4CFF-9010-B147D33B90A3.jpg") center/cover
    no-repeat;
`;

const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 56000,
    transition: { type: "spring", delay: 0.5, mass: 0.2, damping: 1, repeat: Infinity },
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* <Box transition={{duration: 3}} animate={{ x: 100, y:100, borderRadius: "50%" }} /> */}
        {/* <Box
          transition={{
            duration: 1,
            type: "spring",
            damping: 1,
            mass: 0.2,
            
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 53600 } }
        /> */}
        <Box variants={myVars} initial="start" animate="end" />
        <motion.div></motion.div>
      </Wrapper>
    </>
  );
}

export default App;
