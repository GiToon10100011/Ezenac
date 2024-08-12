const num01 = 1;
//변수명 선언 시, 유의사항
//1. 변수 이름으로 예약어 사용불가
//2. $, _, 영문자만 첫글자에 넣을 수 있다. 
//3. 단, 변수명 중간에는 숫자 가능
//4. 변수 선언 3가지 방식 존재
//4-1. Camel표기법 
const numberSum = 1+2;
//4-2. Snake표기법
const number_sum = 10;
//4-3. Hungarian 표기법 : 반드시 대문자로 시작
const Numbersum = 20;

// 선언한 class의 객체를 사용할때 이름을 대문자로 먼저 표기하자는거에 비롯됨

const boolean = true;

//유효하지 않은 값
const test01 = null;
//정의되지 않은 값을 말함
const test02 = undefined;

const name = "진우"
const classroom = 506;

console.log(name, classroom);

const jsBook = {
  //속성 : property
  //key : value
  title : "지옥에서 온 깃허브",
  teacher : "박세진",
  pages : 300,
};

// 객체안에 담긴 값을 찾아오기
//1. 온점 표기법
//2. 대괄호 표기법

//객체내의 값을 재할당
jsBook.title = "천국에서 온 깃허브";

let test03 = Symbol();
console.log(test03);

let id = Symbol();
const member = {
  name : "Tyler",
  [id] : 12345,
}

console.log(member[id]);

const fncTest = () => {
  console.log("click");
}

let a = 10;
let b = a;

console.log(a, b);

let obj1 = {
  c : 10,
  d : "ddd"
};

let obj2 = obj1;

console.log(obj1, obj2);

b = 15;
obj2.c = 20;

// b만 값이 바뀜
console.log(a, b);
//근데 객체는 둘다 바뀜..?
console.log(obj1, obj2);

const fruits = ["apple", "banana", "cherry"];

// 전개연산자로 원본 데이터는 바뀌지 않도록 방지함.
const fav = [...fruits];

fav[1] = "grape";

console.log(fruits);

const one = "20";
const two = 10;
const sum = one + two;

console.log(parseInt(36.7));

const num = 10;
console.log(typeof num.toString());

const gar = null;

console.log(typeof String(gar));

const json = "test.json"

prompt("자연수를 입력해주세요");

if(json){

}