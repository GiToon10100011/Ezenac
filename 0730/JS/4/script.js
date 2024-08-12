let x = 10;
let y = 4;

x--;
y++;
// let result = x + y;
// console.log(result); 14
// result = x - y;
// console.log(result); 6
// result = x * y;
// console.log(result); 40
// result = x / y;
// console.log(result); 2.5
// result = x % y;
// console.log(result); 2

console.log(--x);

let str = "<table border = '1'>";
str += "<tr>";
str += "<td>1</td><td>2</td>";
str += "</tr>";
str += "</table>";

const body = document.querySelector("body");
body.innerHTML = str;

const userInput = prompt("이름 입력");

if (userInput === null) {
  alert("취소했습니다");
} else {
  alert(`${userInput}님 환영합니다`);
}

const score = Number(prompt("점수"));

if (score !== null) {
  if (score > 90) {
    alert("A학점");
  } else if (score >= 80) {
    alert("B 학점");
  } else {
    alert("C 학점");
  }
}

const num1 = 10;
const num2 = 20;

// let small;

small = num1 < num2 ? num1 : num2;

console.log(small);