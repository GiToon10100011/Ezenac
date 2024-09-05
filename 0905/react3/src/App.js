import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  //컴포넌트 자체만을 관리하기 위한 current값을 false로 최로로 초기화 시킴.
  const didMountRef = useRef(false);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // useEffect(() => {
  //   console.log("Update", count, text);
  // }, [count, text]);

  // useEffect(() => {
  //   console.log("Component Update");
  // });

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      console.log("component update");
    }
  });

  useEffect(() => {
    console.log("component mount");
  }, []);

  // useEffect(() => {
  //   const blinker = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("CleanUp");
  //     clearInterval(blinker);
  //   };
  // });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
