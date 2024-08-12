//1. 프롬프트로 사용자에게 숫자 3개를 입력받는다.
const inputStr = prompt(
  "교통비, 식대, 음료비 3개를 입력해주세요(각 숫자의 끝마다 쉼표를 사용해서 구분해주세요)"
);

//2. 숫자만을 남기기 위해 쉼표 이하는 짤라서 배열에 보관.
const numbersStr = inputStr.split(",");

//3. 숫자만 남은 배열의 요소들을 각각 Number함수를 사용하여 모두 숫자로 변환시켜서 새로운 배열 생성
const numbers = numbersStr.map((number) => {
  return Number(number);
});

//4. reduce()는 첫번째값은 이전의 배열의 합산값, 두번째는 현재의 요소를 말한다. 마지막값은 초기값으로, 현재는 0이다. 따라서 0 + 배열의 현재 요소를 더함 
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

if(total > 10000){
  alert("예산관리 잘해주세요!")
} else{
  alert("예산관리 잘하셨어요!")
}

