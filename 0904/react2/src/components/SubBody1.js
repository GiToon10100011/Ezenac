import { useState } from "react";

const SubBody1 = () => {
  // const handleOnClick = (e) => {
  //   console.log(e.target.name);
  // };

  //초깃값 설정
  // const [state, setState] = useState(0);

  // const onIncrease = () => {
  //   setState(state + 1);
  // };

  // const [text, setText] = useState("");

  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };

  // const [date, setDate] = useState("");

  // const handleOnChange = (e) => {
  //   setDate(e.target.value);
  //   console.log(e.target.value);
  // };

  // const [option, setOption] = useState("");

  // const handleOnChange = (e) => {
  //   setOption(e.target.value);
  // };

  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea onChange={handleOnChange}></textarea>
      {/* <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
        <option key={"4번"}>4번</option>
        <option key={"5번"}>5번</option>
      </select>
      <div>{option}</div> */}
      {/* <input type="date" value = {date} onChange={handleOnChange} />
      <div>{date}</div> */}
      {/* <input onChange={handleOnChange} />
      <div className="print">{text}</div> */}
      {/* <h2>{state}</h2>
      <button onClick={onIncrease}>+</button> */}
      {/* <button name="A버튼" onClick={handleOnClick}>
        A Button
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B Button
      </button>
      <button onClick = {handleOnClick}>클릭하세요</button> */}
    </div>
  );
};

export default SubBody1;
