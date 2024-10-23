//객체 & 함수 타입 정의

const user: { id?: number; name: string } = {
  id: 1,
  name: "David",
};

// const result = user.id;

//구조적 타입 시스템을 적용

let config: {
  readonly api_key: string;
} = {
  api_key: "asdfwefzxdvjznlkgre",
};

//계속 이러한 객체를 찍어낼때마다 타입을 정의하기 힘드므로 type || interface 사용

type User = {
  id: number;
  name: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "염동훈",
  location: "Seoul",
};
let user2: User = {
  id: 1,
  name: "염동훈",
  location: "Seoul",
};
let user3: User = {
  id: 1,
  name: "염동훈",
  location: "Seoul",
};
let user4: User = {
  id: 1,
  name: "염동훈",
  location: "Seoul",
};
let user5: User = {
  id: 1,
  name: "염동훈",
  location: "Seoul",
};
let user6: User = {
  id: 1,
  name: "염동훈",
  location: "Seoul",
};

const fnc = () => {
  type User = {};
};

//인덱스 시그니처
//타입 별칭으로 어떤 타입을 정의 -> 하위 요소의 모든 타입의 형태가 동일한 경우

type CountryCodes = {
  [key: string]: string;
};

const countryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  Japan: "jp",
  UnitedKingdom: "uk",
};

interface IUser {
  id: number;
}

interface IPerson {
  name: string;
  age: number;
  etc?: boolean;
}

const person: IPerson = {
  name: "염동훈",
  age: 20,
  etc: true,
};
const person2: IPerson = {
  name: "염동훈",
  age: 20,
};

class Person1 {
  name: string;
  age: number;
}

const person3: Person1 = new Person1();
person3.name = "peter";
person3.age = 20;

// console.log(person3);

//ts에서는 해당 구문을 간소화해서 쓸 수 있음.
// class Person2 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Person2 {
  constructor(public name: string, public age: number = 20) {}
}

const person4 = new Person2("Romeo");
// console.log(person4);

interface Person5 {
  name: string;
  age: number;
}

class Person6 implements Person5 {
  constructor(public name: string, public age: number) {}
}

const person5 = new Person6("Juliet", 20);
// console.log(person5);

abstract class Person7 {
  constructor(public name: string, public age: number) {}
}

class Person8 extends Person7 {
  constructor(name: string, age: number, public location?: string) {
    super(name, age);
    this.location = location;
  }
}

const person6 = new Person8("염동훈", 97, "서울");

class Test {
  static initialValue = 1;
}

const testA = Test.initialValue;
// console.log(testA)

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user01 = {
  name: "염동훈",
  role: Role.ADMIN,
};
const user02 = {
  name: "전진우",
  role: Role.USER,
};
const user03 = {
  name: "게스트",
  role: Role.GUEST,
};

let test01: any = 10;
test01 = "H";

let test02: unknown;
test02 = 1;
test02 = () => {};

let test03 = test01;
test03 = test02;

let test04: number = 20;
// test04 = test02;

//타입 제한 적용 - unknown 사용법
if (typeof test02 === "number") test04 = test02;

const func1 = (): string => {
  return "hello";
};

const func2 = (): void => {
  console.log("World");
};

let test05: void;
test05 = func2();

test05 = undefined;

let test06: never;

const func03 = (): never => {
  while (true) {}
};

// func03()

//타입 단언 1
let obj: object = {
  name: "염동훈",
  age: 97,
};

interface INameable {
  name: string;
  age: number;
}

let name1 = (<INameable>obj).name;

//타입 단언 2
let name2 = (obj as INameable).name;
// console.log(name1, name2);

//함수의 타입정의
const add = (a: number, b: number): number => {
  return a + b;
};

type PrintMe = (name: string, age: number) => void;

const printMe: PrintMe = (name, age): void => {
  console.log(name, age);
};

printMe("염동훈", 94);

interface IGetName {
  name: string;
}

const getName = (o: IGetName | undefined) => {
  return o !== undefined ? o.name : "loading...";
};

const dataResult = getName(undefined);

console.log(dataResult);
console.log(getName({ name: "염동훈" }));
