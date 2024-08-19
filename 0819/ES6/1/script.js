//매개변수 기본값 설정

const hello = (name = "염동훈님! 생사가", msg) => {
  console.log(`${name} ${msg}`);
};

hello("염동훈님!", "나이가 9824세시네요!");
hello();

//전개연산자
//1) 함수의 매개변수
const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5));

//2) 참조타입 변수값의 독립화(각 요소들을 펼쳐줌)
const fruits = ["apple", "banana", "cherry"];
// const favorite = fruits;
// const [favorite, ...alt] = fruits;
//원본데이터까지 변경됨.
// favorite[1] = "grape";

const favorite = [...fruits]; //새로운 배열을 만드는것과 같은 역할

favorite[1] = "grape";

console.log(fruits, favorite);

//3) 서로 다른 2개의 배열을 하나로 병합

const animal = ["bird", "cat"];
const fruits02 = ["melon", "pineapple"];

console.log(animal.concat(fruits02));
console.log([animal, fruits02]); //합해지지 않고 2차원 배열이 생성됨.
console.log([...animal, ...fruits02]);

//객체 KEY 접근방법
//대괄호 표기법
const book = {
  title: "Javascript",
  pages: 500,
};

book.published = "2024.08.19";

console.log(book);

console.log(book["title"]);

//객체 키 생성법
const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수의 키",
  [`${add(10, 30)} key`]: "계산 키",
};

console.log(obj);

//객체 축약법
let user = {
  name: "염동훈",
};

user.age = 9824;
console.log(user);

//객체 선언 시, key의 이름과 값으로 할당하고자 하는 매개변수의 이름이 동일하다는 가정하에 객체 축약이 가능하다.

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};
const user1 = makeUser("염동훈", 9824);
console.log(user1);

//객체에 심볼 키 사용법
let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2);

const id = Symbol("id");
const tel = Symbol("phone number");

const member = {
  name: "Toon",
  age: 22,
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

console.log(member);

for (let item in member) {
  console.log(`${item}`);
}

//객체 안에 있는 key값을 은폐하고자 할때 심볼을 사용한다.

console.log(member[id]);
// console.log(member[tel]());

// 4. 구조 분해 할당
//JS 컴포넌트화 => 함수 형태의 컴포넌트로 되어 있음 // 전에는 class형 컴포넌트로만 되어 있었음.

const fruits03 = ["사과", "복숭아"];
// const apple = fruits03[0];
// const peach = fruits03[1];
const [apple, peach] = fruits03;

console.log(apple, peach);

let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"];

console.log(teacher, students);

const member02 = {
  name: "Toon",
  age: 22,
};

const { name: userName, age } = member02;

console.log(userName, age);

// 5. 배열 메소드
//map, filter, reduce
//map : 배열안에 있는 아이템들에게 특정 함수 안에 있는 기능을 동일하게 실행/적용 시킴. => 새로운 배열로 다시 생성
//forEach와 다른점은 map은 배열을 새로 생성을 함.
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(newNumbers);
console.log(numbers);

const newNumbers01 = numbers.map((number, index) => {
  return index + number * 3;
});

console.log(newNumbers01);

const scores = [90, 35, 64, 88, 45, 92];

const highScores = scores.filter((score) => score > 85);
console.log(scores, highScores);

const numbers02 = [1, 2, 3, 4, 5];
let result = numbers02.reduce((acc, curr) => {
  return acc + curr;
}, 0);
// 실행문 다음의 값으로는total의 초깃값을 0으로 먼저 초기화시켜줌
console.log(result);

//total : 연산된 값을 누적 및 저장해놓는 변수의 역할
