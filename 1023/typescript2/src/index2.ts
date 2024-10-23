const calc = (value: number, callback: (arg: number) => void): void => {
  let add = (a: number, b: number): number => a + b;
  let multiply = (a: number, b: number) => a * b;
  let result = multiply(add(1, 2), value);
  callback(result);
};

calc(30, (result: number) => console.log(result));

// const add =
//   (a: number): ((arg: number) => number) =>
//   (b: number) =>
//     a + b;

// const result = add(1)(2);
// console.log(result);

type NumberToNumber = (arg1: number) => number;

const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };
  //실행문으로 반환하면 숫자 형태가 되므로 함수자체를 반환하여 타입이 수용되도록 함수자체를 반환함.
  return _add;
};

const result = add(1)(2);

console.log(result);

//모나드, 파이프, 커리, 람다 함수..?