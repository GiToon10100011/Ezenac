import "./Body.css";

const Body = ({ children }) => {
  console.log(children);
  const num = 19;
  const number1 = 1;
  const number2 = 2;
  const str1 = "안녕";
  const str2 = " 리액트";
  const bool1 = true;
  const bool2 = false;
  // return (
  //   <div>
  //     <h1>Body</h1>
  //     <h2>
  //       {name}은 {age}세, {value} <br/>
  //       {favorites}을 좋아합니다!
  //     </h2>
  //     <h2>{number1 + number2}</h2>
  //     <h2>{str1 + str2}</h2>
  //     <h2>{String(bool1 || bool2)}</h2>
  //     <h2>
  //       {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다
  //     </h2>
  //   </div>
  // );

  return (
    <div>
      <h1>{children.map((child) => child)}</h1>
    </div>
  );
};

Body.defaultProps = {
  favorite: [],
};

export default Body;
