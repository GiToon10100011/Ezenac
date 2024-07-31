//프롬프트를 하나만 써서 하는 방법

//1. 프롬프트로 사용자에게 숫자 3개를 입력받는다.
const inputStr = prompt(
  "숫자 3개를 입력해주세요(각 숫자의 끝마다 쉼표를 사용해서 구분해주세요 ex. 1, 4, 10)"
);

//2. 숫자만을 남기기 위해 쉼표 이하는 짤라서 배열에 보관.
const numbersStr = inputStr.split(",");

//3. 숫자만 남은 배열의 요소들을 각각 Number함수를 사용하여 모두 숫자로 변환시켜서 새로운 배열 생성
const numbers = numbersStr.map((number) => {
  return Number(number);
});

//4. sort로 오름차순 정리
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);

//5. slice로 첫째 요소를 제외한 나머지 요소들을 다른 배열로 분해
const otherNum = sortedNumbers.slice(1, numbers.length);

const otherSum = otherNum.reduce((acc, curr) => acc + curr);

if (numbers.some((num) => isNaN(num))) {
  alert("잘못된 값을 입력하셨습니다. 다시 시도해주세요.");
  location.reload();
} else if (sortedNumbers[0] >= otherSum) {
  console.log("NO");
  alert("그 값으로는 삼각형을 만들 수 없습니다. 다시 시도해주세요.");
  location.reload();
} else {
  console.log("YES");
  alert("삼각형을 만들었습니다.");
}
