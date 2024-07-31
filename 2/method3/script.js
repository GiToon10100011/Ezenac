//프롬프트를 3개 호출해서 하는 방법 2 (가장 간략하고 쉬움)

//1. 사용자의 값을 담을 빈배열을 생성
let numbers = [];

// 2. 사용자한테서 숫자 3개를 넣고 빈 배열안에 각각의 숫자들을 push해줌.
for (let i = 0; i < 3; i++) {
  numbers.push(Number(prompt("숫자를 3번 입력해주세요.")));
  if (isNaN(numbers[i])) {
    alert("숫자만을 입력해주세요.");
    location.reload();
    break;
  }
}

//5. 숫자를 내림차순으로 정렬
const sortedNumbers = numbers.sort((a, b) => b - a);

//6. 합계를 저장할 변수 선언
let sum = sortedNumbers[1] + sortedNumbers[2];

// 7. 집계된 합계와 최댓값이 같은지 검사
sortedNumbers[0] >= sum ? console.log("NO") : console.log("YES");
