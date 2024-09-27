import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  position: relative;
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

const boxVariants = {
  hover: { scale: 1.2 },
  click: { rotate: 360, borderRadius: "50%" },
};

function App() {
  const x = useMotionValue(0); // X-axis motion value
  const y = useMotionValue(0); // Y-axis motion value
  let velocityX = 400; // Initial horizontal velocity
  let velocityY = 400; // Initial vertical velocity
  const boundary = 200; // Half the width and height of the BiggerBox

  const biggerBoxRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    // Update position based on velocity and time delta
    const newX = x.get() + velocityX * (delta / 1000);
    const newY = y.get() + velocityY * (delta / 1000);

    // Bounce off the boundaries by reversing velocity
    if (newX >= boundary || newX <= -boundary) {
      velocityX *= -1; // Reverse direction horizontally
    }
    if (newY >= boundary || newY <= -boundary) {
      velocityY *= -1; // Reverse direction vertically
    }

    // Set new position values
    x.set(newX);
    y.set(newY);
  });

  console.log(biggerBoxRef.current);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            style={{ x, y }}
            drag
            dragElastic={0}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover={"hover"}
            whileTap={"click"}
            onDragEnd={(event, info) => {
              // Set the velocity based on drag speed
              velocityX = info.velocity.x;
              velocityY = info.velocity.y;
            }}
            dragTransition={{ power: 0 }}
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default App;
