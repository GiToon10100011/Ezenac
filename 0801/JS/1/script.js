//함수 선언
//함수의 매개변수가 반드시 필요한 것은 아니다.
//함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값을 삽입해야함.

//일반 함수 || function 함수
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  // console.log(`1부터 ${n}까지 더하면 ${sum}`);
}

// calcSum(Number(prompt("숫자를 입력해주세요")));

//익명 함수
const calcSum2 = function () {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}`);
};

//화살표 함수
const calcSum3 = () => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}`);
};

// function sum(a,b){
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`)
//   console.log(result);
// }

// sum(10, 20)

const num = Number(prompt("숫자를 입력해주세요"));

function calculus(n) {
  let sum = 0;
  if (isNaN(n)) {
    alert("숫자만을 입력해주세요");
    location.reload();
  } else {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    alert(`1부터 ${n}까지 더하면 ${sum}입니다.`);
  }
  return sum;
}

console.log(`1부터 ${num}까지 더하면 ${calculus(num)}입니다.`);

// calculus(num);
//(a, b, c = 10)으로 하면 a, b, c 모두 10의 값을 줄 수도 있다. 
function multiply(a = 1, b = 2, c = 3) {
  console.log(a * b * c);
}

multiply(2, 4);

//올리브영 프론트엔드 개발자
//회원가입 => 이름, 나이, 피부타입

document.body.innerHTML += `<button id = "btn">Click</button>`

const button = document.querySelector("#btn");
console.log(button);

const btnClick = () => {
  alert("클릭");
}

button.addEventListener("click", btnClick);