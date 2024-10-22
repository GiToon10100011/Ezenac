//TS 타입

let num = 1;
num = 10;

let str: string = "String";
str = "World";

let bool: boolean = true;
bool = false;

let obj: object = {
  name: "David",
};

let sample: any = 0;
sample = "Hello";

let sample01: undefined = undefined;
sample01 = undefined;

let sample02: unknown = 10;
sample02 = "what the..";

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["염동훈", "바보", "멍청이"];
const boolArr: Array<boolean> = [true, false, true];

const mixArr: (string | number | boolean)[] = [1, "hello", true];

const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//길이와 타입이 고정된 배열
let tuple1: [number, number] = [1, 2];
tuple1.push(1);
console.log(tuple1);

const users: [string, number][] = [
  ["염동훈", 1],
  ["이승연", 2],
  ["해오름", 3],
  ["박제한", 4],
  ["박예림", 5],
  ["송채영", 6],
  ["정보경", 7],
]