import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
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
  height: 200vh;
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
  position: absolute;
`;

function App() {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  // const transformer = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238,  178, 0))",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);

  return (
    <>
      <GlobalStyles />
      <Wrapper style={{ background: gradient }}>
        <button onClick={() => x.set(200)}>눌러봐~</button>
        <Box
          style={{ x, scale, rotateZ }}
          drag="x"
          dragSnapToOrigin
        />
      </Wrapper>
    </>
  );
}

export default App;
