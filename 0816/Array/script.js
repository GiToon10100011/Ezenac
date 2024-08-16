//문자열 && 배열
//1) 둘다 length
//2) 둘다 index(0부터시작)

//ES6문법이 적용되기 전
const str = "Hello, everyone";
// const arr = str.split("");

//후
const arr = [...str];
console.log(arr);

const str2 = arr.join("");
console.log(str2);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstChar = string[0].toUpperCase();

// const [a, ...rest] = [...string];

// console.log(a);

// const remainStr = string.slice(1);
// const result = firstChar + remainStr;

// const result2 = [string[0].toUpperCase(), ...string.slice(1)].join("");

// document.write(result2);

//자료구조 & 알고리즘
//생성자 함수
let arr2 = new Array();
arr2[0] = "first";
arr2[1] = "second";

console.log(arr2);

let obj = new Object();

//변수 // 빈배열 할당 및 선언

let season = [];
season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";

console.log(season);

// 3) 직접 배열을 선언, 할당
const pets = ["dog", "cat", "lion"];
console.log(pets);

let pets2 = ["dog", "cat", "mouse"];

pets[0] = "hamster";

const colors = ["red", "green", "blue", "white", "black"];

// for(let i = 0; i < colors.length;){
//   console.log(colors[i]);
// }

//for은 초기값, 범위, 증감연산자도 줘야하는 귀찮음이 있음
// for(let color of colors){

// }

colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}] : ${color}`);
});

const vegetable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];
const cheese = ["모짜렐라", "슈레드"];
const meatBurger = vegetable.concat(meat, "빵");

//전개연산자
const cheeseBurger = [...vegetable, ...cheese, "빵"];
console.log(cheeseBurger);

let numbers = [6, 9, 3, 21, 18];
console.log(numbers, numbers.reverse());

let week = ["sun", "mon", "tue"];
let values = [5, 20, 3, 11, 4, 15];
//1. 배열 선언 시, 변수명을 복수형으로 가져감
//2. 일반 for문 선언 시, 블록변수를 0으로 시작
//3. 배열을 담는 변수를 선언할때, const인가 let인가 염두해두기 => 배열의 특정 메소드 함수들 => 새로운 배열을 생성해주는 메소드 함수들이 존재하기 때문에
//4. 빈배열을 생성 => push || shift로 값을 추가하는 행위가 은근 많기에 let 사용

console.log(week);
console.log(week.sort((a, b) => a - b));
console.log(values);
console.log(values.sort((a, b) => a - b));

//sort => 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });

values.sort((a, b) => a - b);

console.log(values);

let animals = ["lion", "bear", "bird"];

console.log(animals);
animals.pop();
console.log(animals);
animals.push("tiger");
console.log(animals);

let fruits = ["apple", "pear", "banana"];
fruits.shift();
console.log(fruits);
fruits.unshift("cherry");
console.log(fruits);

let subjects = ["html", "css", "javascript", "react", "typescript"];

console.log(subjects.splice(2));

let week2 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(week2.splice(1, 5, "holiday"));
week2.splice(4, 0, "holiday");
console.log(week2);

let colors2 = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2));
console.log(colors.slice(1, 4));