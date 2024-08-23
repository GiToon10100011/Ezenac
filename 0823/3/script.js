//기존의 콜백함수의 단점을 최소화하고자 나온 첫번째 대안 => Promise
//Promise = 약속
//콜백함수 중 어떤 요소라도 문제가 생기면 연결되어 있는 다른 콜백함수 모두가 스탑되는 단점 존재
//그런데, 만약 콜백 함수가 많이 연결되어 있다면 어느 콜백함수에서 에러가 발생되었는지 서칭/디버깅 하기가 매우 힘듦.
//생성자함수 혹은 클래스를 통해 탄생된 프로토타입

const likePizza = true;

//producing code = 제작코드 영역
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다");
  else reject("응 안돼~");
});

//consuming code = 소비코드 영역 (실행코드 영역)
pizza.then((result) => console.log(result)).catch((err) => console.log(err)).finally(() => console.log("완료~"));
