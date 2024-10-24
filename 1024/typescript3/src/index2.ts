const func = (a: number, b: number): number => {
  return a + b;
};

const func1 = (name = "익명"): void => {
  console.log(name);
};

func1("염동훈");

const self1 = (name = "사용자", height?: number): void => {
  if (typeof height === "number") {
    console.log(`${name}님의 키는 ${height}cm 입니다.`);
  }
};

const getItem = (...args: number[]) => {
  let sum = 0;
  args.forEach((it) => (sum += it));
};

getItem(1, 2, 3);

type Add = (a: number, b: number) => number;

//타입 별칭 생성 후 함수 시그니처를 적용
const add0:Add = (a, b) => a + b;
const add1:Add = (a, b) => a - b;
const add2:Add = (a, b) => a / b;
const add3:Add = (a, b) => a * b;
const add4:Add = (a, b) => a % b;


