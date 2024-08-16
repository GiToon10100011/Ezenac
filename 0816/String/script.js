const str = "Hello YDH";
const arr = ["today", "first", "theday"];
console.log(str.length, arr.length);

//특정 위치의 문자에 접근하고자 할때, charAt()
console.log(str.charAt(5));

const counting = (string, word) => {
  let cnt = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === word) cnt += 1;
  }
  return cnt;
};

// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고 싶은 문자열은 무엇인가요?");

// const result = counting(string, word);

// document.write(`${string}에는 ${word}이(가) ${result}개 있습니다.`);

//indexOf : 특정 문자열을 인자값으로 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아옴

const str1 =
  "Good morning, everyone! Beautiful morning init? Have a nice morning";

let firstIdx = str1.indexOf("morning");
//6번째 이후로 나오는 값을 찾아와라
let secondIdx = str1.indexOf("morning", firstIdx + 1);

console.log(str1.indexOf("evening"));
console.log(str1.indexOf("morning", secondIdx + 1));

//특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있는지 확인하는 함수 startsWith(), endsWith(),includes()

const str2 = "Hello, everyone";
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("Hello,ev"));
console.log(str2.startsWith("el", 1));

console.log(str2.endsWith("one"));

//ES6 이전의 문법
console.log(str2.indexOf("every") !== -1);
console.log(str2.includes("every"));

let str3 = "  ab cd ef  ";
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

const str4 = "Good Morning."
console.log(str4.length);

console.log(str4.substring(0, 4));

console.log(str4.slice(0, 4));

//slice가 신 문법임! 음수 값을 받을 수 있다는게 substring과의 매우 큰 차이점
//끝에서 부터 가져옴
console.log(str4.slice(-5, 12));

const str5 = "Hello everybody";
console.log(str5.split(" "));
console.log(str5.split(""));
console.log(str5.split("e"));