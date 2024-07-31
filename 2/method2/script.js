//프롬프트를 3개 호출해서 하는 방법

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

//3. 전개연산자를 사용해서 배열내의 최댓값을 저장함. 
const max = Math.max(...numbers);

//4. 숫자를 내림차순으로 정렬
const sortedNumbers = numbers.sort((a, b) => b - a);

//5. 합계를 저장할 변수 선언
let sum = 0;

//6. 첫번째값을 제외한 나머지 요소들을 더해줄 반복문
for (let i = 0; i < sortedNumbers.length; i++) {
  if (i === 0) {
    continue;
  }
  sum += sortedNumbers[i];
}

// 7. 집계된 합계와 최댓값이 같은지 검사
max >= sum ? console.log("NO") : console.log("YES");
