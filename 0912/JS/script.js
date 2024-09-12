//병합연산자
const numA = 10;
const numB = 20;
const numC = undefined;

console.log(numA ?? numB);

//삼항조건연산자
const strA = "안녕하세요";
typeof strA === "string" ? console.log("문자") : console.log("문자 아님");

//스위치
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("사과");
    break;
  default:
    console.log("사과 아님");
    break;
}

//Object
let objA = {};
objA.numA = 1;
objA["numB"] = 2;

let objB = new Object();

const person = {
  name: "Toon",
  age: 20,
  location: "Seoul",
};

//객체 안에 있는 key값을 배열로 반환
const keyArr = Object.keys(person);

keyArr.forEach((key) => {
  let value = person[key];
  console.log(value);
});

//구조분해할당(Destructuring assignment)
const testO = {
  name: "David",
  age: 20,
  skill: "JS",
};

// const name = testO.name;
// const age = testO.age;
// const skill = testO.skill;

const { name, age, skill } = testO;
console.log(name, age, skill);

//단락회로평가
const calcA = () => {
  console.log("A");
  return false;
};
const calcB = () => {
  console.log("B");
  return true;
};

console.log(calcA() && calcB());
console.log(calcA() || calcB());

//전개연산자
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const arrC = [...arrA, ...arrB];
console.log(arrC);

const objA2 = {
  a: 1,
  b: 2,
};

const objB2 = {
  c: 3,
};

const objC = {
  ...objA2,
  ...objB2,
};

console.log(objC);

//배열 메소드
let food = ["짜장면", "피자", "치킨"];
const newLength = food.push("탕수육");

const removedItem = food.pop();
console.log(removedItem);
console.log(food);

const newLength2 = food.unshift("갈비찜");
console.log(food, newLength2);

const removedItem2 = food.shift();
console.log(removedItem2);

const sliced = food.slice(0, 2);
console.log(sliced);

const sliced2 = food.slice(1);
console.log(sliced2);

const merged = sliced.concat(sliced2);
console.log(merged);

console.log(food.indexOf("피자"));
console.log(food.includes("마라탕"));

const arr = [
  { name: "에넬" },
  { name: "염동훈" },
  { name: "미호크" },
  { name: "검은수염" },
];

const element = arr.find((item) => item.name === "염동훈");

console.log(element);

const arr2 = [
  { name: "염넬" },
  { name: "염크스" },
  { name: "염피" },
  { name: "염자루" },
  { name: "염치" },
  { name: "염기" },
  { name: "염호크" },
  { name: "염카이누" },
  { name: "염제스" },
  { name: "염플라밍고" },
  { name: "염동훈" },
];

const filteredArr = arr2.filter((item) => item.name.includes("스"));
console.log(filteredArr);

const newArr = arr2.map((item) => item.name);
console.log(newArr);

const newArr2 = [10, 5, 7];
// newArr2.sort((a, b) => a - b);

const compare = (a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
};

newArr2.sort(compare);
console.log(newArr2);

console.log(food.join(" "));

const numArr = [1, 2, 3, 4, 5];
const result = numArr.reduce((acc, curr) => acc + curr, 0);
console.log(result);