//1. 프롬프트로 사용자에게 숫자 3개를 입력받는다.
const inputStr = prompt(
  "숫자 3개를 입력해주세요(각 숫자의 끝마다 쉼표를 사용해서 구분해주세요)"
);

//2. 숫자만을 남기기 위해 쉼표 이하는 짤라서 배열에 보관.
const numbersStr = inputStr.split(",");

//3. 숫자만 남은 배열의 요소들을 각각 Number함수를 사용하여 모두 숫자로 변환시켜서 새로운 배열 생성
const numbers = numbersStr.map((number) => {
  return Number(number);
});

//4. 숫자 배열 중 some()함수를 사용하여 배열의 요소에 100이 넘는 숫자가 있는지 모두 검사하여 있다면 100이하의 숫자를 입력하라는 경고문을 출력하고 페이지를 강제로 새로고침한다.
if (numbers.some((number) => number >= 100)) {
  alert("100이하의 숫자를 입력해주세요");
  window.location.reload();
} else {
  //5. 만약 100이하의 숫자들만이 존재한다면 .sort함수를 사용하여 배열의 요소들을 오름차순으로 정렬을 해서 배열의 첫번째값을 사용자에게 출력해준다!
  const numbersSorted = numbers.sort((a, b) => a - b);

  console.log(numbersSorted[0]);

  const body = document.querySelector("body");
  body.innerHTML = `<div style = "font-size : 200px;">가장 작은 수는 : ${numbersSorted[0]}</div>`;
}
