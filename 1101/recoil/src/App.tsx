import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import { hourSelector, minuteAtom } from "./atoms";

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
    color: inherit;
  }
`;

function App() {
  const [mins, setMins] = useRecoilState(minuteAtom);
  const hrs = useRecoilValue(hourSelector);
  const handleOnMinsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMins(() => +e.currentTarget.value);
  };
  return (
    <>
      <GlobalStyles />
      <div>
        <input
          onChange={handleOnMinsChange}
          value={mins}
          type="number"
          placeholder="Minutes"
        />
        <input value={hrs} type="number" placeholder="Hours" />
      </div>
    </>
  );
}

export default App;
