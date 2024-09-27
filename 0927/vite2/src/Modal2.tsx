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
  justify-content: center;
  align-items: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 50vw;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxArray = ["1", "2", "3", "4"];
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);

  const toggleModal = () => {
    setIsClicked((current) => !current);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper onClick={toggleModal}>
        <Grid>
          {boxArray.map((i) => (
            <Box key={Number(i)} layoutId={i} onClick={() => setId(i)} />
          ))}
        </Grid>
        <AnimatePresence>
          {isClicked && (
            <Overlay
              onClick={() => setId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box layoutId={id} style={{ width: 400, height: 200 }} />
            </Overlay>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
