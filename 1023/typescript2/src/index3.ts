//대수타입
//리터럴타입으로 넘버라는 타입을 지니게 됨.
let num1: number = 10;
let num2: 10 = 10;
//upcasting
num1 = num2;
//downcasting
// num2 = num1;

//타입스크립트에 기본적으로 내장되어있는 내장타입

interface Ianimal {
  name: string;
  color: string;
}

let animal: Ianimal = {
  name: "고양이",
  color: "white",
};

interface Idog extends Ianimal {
  breed: string;
}

let dog: Idog = {
  name: "강아지",
  color: "black",
  breed: "시고르자브종",
};

animal = dog;
// dog = animal;

interface IBook {
  name: string;
  price: number;
}

let book: IBook;

interface IProgrammingBook {
  name: string;
  price: number;
  skill: string;
}

let programmingBook: IProgrammingBook = {
  name: "TS",
  price: 33000,
  skill: "TypeScript",
};

book = programmingBook;
// programmingBook = book;

//초과 프로퍼티 검사
let book3: IBook = programmingBook;

//대수타입
//복수의 타입을 합성하거나 교차한 형태의 타입을 새롭게 만든 것 -> union타입(합집합의 형태)

let a: string | number;
a = 1;
a = "Hello";

type IDog = {
  name: string;
  color: string;
};

type IPerson = {
  name: string;
  language: string;
};

type Union = IDog | IPerson;

let union1 = {
  name: "",
  color: "blue",
  language: "jp",
};

let union2: Union = {
  name: "",
  language: "",
};

let union4: Union = {
  name: "",
  language: "",
};

// let union3: Union = {
//   color: "",
//   language: "",
// };

type Intersection = IDog & IPerson;
let intersection: Intersection = {
  color: "",
  name: "",
  language: "",
};

interface IPerson2 {
  name: string;
  age: number;
}

let person2: IPerson2 = {} as IPerson2;
person2.name = "";
person2.age = 20;

type Dog = {
  name: string;
  color: string;
};

//당연히 오류 발생
// let dog2: Dog = {
//   name: "염동훈",
//   color: "black",
//   breed: "귀요미",
// };

let dog2: Dog = {
  name: "염동훈",
  color: "black",
  breed: "귀요미",
} as Dog;

//타입단언을 실행시키려면 다음의 조건을 충족해야한다.
let number = 10 as never;
let number2 = 10 as unknown;
let number3 = 10 as unknown as string;

let number4: 10 = 10 as const;

number4 = 10;

//타입 가드
// const func = (value: number | string) => {
//   value.toFixed(2);
//   value.toUpperCase();
// };
const func = (value: number | string) => {
  if (typeof value === "number") value.toFixed(2);
  else if (typeof value === "string") value.toUpperCase();
};
