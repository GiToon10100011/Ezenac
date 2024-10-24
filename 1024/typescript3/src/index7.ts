// const arr: number[] = [1, 2, 3];
// const newArr = arr.map((item) => item * 2);
// console.log(newArr);

// type Map = <T>(arg: T) => void

//선언형 방식 프로그래밍 코드
// const map = (
//   arr: unknown[],
//   callback: (item: unknown) => unknown
// ): unknown[] => {};

//high level function (고급함수)
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

const arrTest = [1, 2, 3, 4, 5];

//명령형 방식
//low level function (저급함수)
const result = arrTest.map((item) => {
  item;
});
