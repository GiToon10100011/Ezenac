import "./App.css";
import styled, { css } from "styled-components";

const baseShadow = css`
  box-shadow: ${({ color }) => `0 10px 6px ${color || "red"}`};
`;

// const baseShadow = (props) => `
//   box-shadow: 0 10px 6px ${props.color || "red"};
// `;

const font = ({ color, size, family }) => `
  color: ${color};
  font-size: ${size || "1rem"};
  font-family: ${family || "serif"}
`;

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
  /* ${(props) => baseShadow(props)} */
  ${font({ color: "green", size: "2rem" })}
`;

function App() {
  return (
    <>
      <Container color="purple">Styled Components</Container>
    </>
  );
}

export default App;
