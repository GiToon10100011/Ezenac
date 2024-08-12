// const traffic = Number(prompt("교통비 입력"));
// const food = Number(prompt("식대 입력"));
// const beverage = Number(prompt("음료비 입력"));

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력"));
  arr.push(userNum);
};

// 구조 분해할당해서 각 배열의 요소를 변수로 지정함. 각 요소에 맞게 변수 이름을 지정 traffic, food, drink
// 예약어[변수이름1, 변수이름2, ...] = 배열 형태로 사용
const [traffic, food, drink] = arr;
const total = traffic + food + drink;

if(isNaN(total) || total === 0){
  alert("숫자를 입력해주세요");
} else if(total < 10000){
  alert("예산관리 잘하셨어요!");
} else{
  alert("예산관리 잘하세요..");
};


// const total = arr.reduce((a, b) => a + b);


console.log(total);

