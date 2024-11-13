// const myFunc = (number) => {
//   //기저조건
//   if (number > 10) return;
//   console.log(number);
//   myFunc(number + 1);
// };

// myFunc(1);

// const myFunc = (number) => {
//   //1을 넣은채로 호출했다고 생각하자. 기저조건이 절대 부합할 수 없음, 일단 넘어감. 반환을할 수 없기 때문에 일단 myFunc2는 끝나지 않은채로 myFunc를 호출함. 이것처럼 콜스택은 stack구조임을 다시 확인할 수 있음.  (종결될때까지 먼저 콜스택에 들어온 myFunc가 반환될때까지 마지막까지 남음.)
//   if (number > 3) return;
//   console.log(1);
//   myFunc(number + 1);
// };

//funcA가 올라감

const funcA = () => {
  let a = 10;
  let b = 5;
  return a + b;
};

//funcA가 끝난 순간 funcB가 들어옴

const funcB = () => {
  let c = 10;
  let d = 5;
  return c - d;
};

funcA();
funcB();

const funcC = () => {
  let a = 10;
  let b = 5;
  return a - b;
};

const funcD = () => {
  let c = 10;
  let d = 5;
  let e = funcC();
  //funcD가 호출되면 완료되지 않은 상태로 C가 콜스택에 올라감, 즉, 먼저 들어온값이 마지막에 나갔으므로 FILO, Stack의 형태를 띠고 있음. 
  //C가 끝나면 D가 마무리됨. 
  return c + d + e;
};

//콜스택에d가 올라감. 
funcD();