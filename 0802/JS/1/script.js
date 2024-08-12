let intervalIdx = 0;

function greetings() {
  intervalIdx++;
  if(intervalIdx >= 5){
    clearInterval(hi);
  }
  console.log("안녕하세요");
}

const hi = setInterval(
greetings, 2000);

let cnt = 0;

//재귀 함수 호출
let num = 0;

document.open();
const testFunc = () => {
  num++;
  document.write(num, "<br/>");
  // 반복문이 아니고 재귀함수이기 때문에 break사용불가 대신 return사용
  if(num === 10) return;
  testFunc();
};

testFunc();

//return 값을 쓰지 않으면 무의 값을 반환하고 종결시킨다는 뜻. 반환을 한다는것은 연산을 끝났다고 생각하기 때문에 return을 사용하면 연산을 끝내는것과 같은 이치가 된다.

setTimeout(() => {
  console.log("3초가 지났습니다.");
}, 3000);