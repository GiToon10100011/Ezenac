import { useState } from "react";
import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Home from "./components/Home";

//라이트모드: 배경 // 폰트 -> 흰색 타겟
//다크모드: 배경 // 폰트 -> 검정 타겟
// -> 배경 || 폰트 || 폰트2 등을 다 합친 패키지가 어딘가에는 저장 및 세팅이 되어야함.
//버튼은 전역요소로, 트리거가 되면 모든 페이지가 다크모드가 되어야한다.

const GlobalStyles = createGlobalStyle`
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
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    // setIsDark(!isDark)
    //추후를 위한 함수형 업데이트 채용
    setIsDark((current) => !current);
  };

  return (
    <>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Button onClick={handleTheme}>
          {!isDark ? "다크모드" : "라이트모드"}
        </Button>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
