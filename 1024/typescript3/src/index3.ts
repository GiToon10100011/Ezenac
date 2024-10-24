type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

type C = (arg: number) => void;
type D = (arg: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

let animalFunc = (animal: Animal): void => {
  console.log(animal.name);
};

type Dog = {
  name: string;
  color: string;
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
// dogFunc = animalFunc;

//함수 매개변수의 값은 거의 유일하게 다운캐스팅이 허용되는 타입

type Func2 = (a: number, b: number) => void;
type Func3 = (a: number) => void;

let func2: Func2 = (a, b) => {};

let func3: Func3 = (a) => {};

func2 = func3;
// func3 = func2;

//함수 시그니처를 실제 구현되는 함수 위에다가 사전 작성 -> 함수 오버로딩

function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 함수의 선언부
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//실제 함수의 실행
func(1);
func(1, 2);
func(1, 2, 3);

type Dog2 = {
  name: string;
  isBark: boolean;
};

type Cat2 = {
  name: string;
  isMeow: boolean;
};

type Animal2 = Dog2 | Cat2;

//객체의 키는 문자열이므로
// const warning = (animal: Animal2) => {
//   if ("isBark" in animal) console.log(animal.isBark ? "짖습니다." : "안짖습니다.");
//   else if("isMeow" in animal) console.log(animal.isMeow ? "웁니다." : "안웁니다.")
// };

const isDog = (animal: Animal2): animal is Dog2 => {
  return (animal as Dog2).isBark !== undefined;
};
const isCat = (animal: Animal2): animal is Cat2 => {
  return (animal as Cat2).isMeow !== undefined;
};

const warning = (animal: Animal2) => {
  if (isDog(animal)) console.log(animal.isBark ? "짖습니다." : "안짖습니다.");
  else if (isCat(animal)) console.log(animal.isMeow ? "웁니다." : "안웁니다.");
};
