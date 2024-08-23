// const displayA = () => {
//   console.log("A");
// }
// const displayB = () => {
//   console.log("B");
// }
// const displayC = () => {
//   console.log("C");
// }

// displayA();
// displayB();
// displayC();

//위의 함수들을 멀티스레드의 비동기적 방식인 것 처럼 만들어보기

const displayA = () => {
  console.log("A");
};
const displayB = (callback) => {
  setTimeout(() => {
    callback();
    console.log("B"), 2000;
  });
};
const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
