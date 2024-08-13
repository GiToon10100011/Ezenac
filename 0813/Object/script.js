const book1 = {
  title: "오늘은 제한님 생일입니다.",
  level: "normal",
  study: "done",
};

//객체 안에 담겨있는 데이터를 찾아올 수 있음.
//property에 접근한다고도 부른다.
//1. 온점(8,90%)
//2. 대괄호

console.log(book1.title);
console.log(book1["level"]);

book1.study = "ready";
console.log(book1);

//객체에 다음과같이 키를 추가할 수도 있다.
book1.master = "David";
console.log(book1);

//JS 어딘가에 Class 생성자함수를 활용해서 이미 누군가가 객체를 만들어 놓았음!

//Class 생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때에는 반드시 new라는 예약어+프로토타입 함수를 사용해야한다.

//프로토타입을 통해서 생성된 값을 인스턴스 객체라고 부른다.

//굳이 따지자면 아래의 방법이 정말 정석이나, 그냥 클래스로부터 비롯되었다는 것만 이해하면 됨.
let book2 = new Object();
book2.title = "TS";
book2.author = "Anders Hejlsberg";
book2.bestSeller = "true";

//다음과같은 방법으로 건들지 직접 원본데이터를 건들지 않는다.
delete book2.bestSeller;

console.log(book2);

let book3 = new Array();

//객체 중첩
const student = {
  name: "전진우",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    average: function () {
      return (this.history + this.science) / 2;
    },
    like() {
      alert(`전진우님은 컴퓨터를 좋아합니다!`);
    },
  },
};

//function //화살표함수

console.log(student.score.history);
console.log(student.score.average());

//객체 안에 property의 일부로서 탄생된 메소드라 칭한다.

student.score.like();

const window = {
  document: {
    html: {
      head: {
        meta: "a",
        link: "./",
      },
      body: {
        h1: "안녕하세요",
        p: "반갑습니다",
      },
    },
  },
  alert() {},
  prompt() {},
  scrollY: {},
};
