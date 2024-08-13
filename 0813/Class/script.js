//Class : 자바스크립트 안에서 반복적으로 사용될 특정요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으로 class를 사용

//교보문고 FE => 매일 신간책이 들어오면 객체 데이터로 만들어서 BE 서버에 데이터를 등록할 수 있도록 지원하라는 미션을 받았다고 가정
//신간책이 300권 들어옴 내일은 500권..
//이딴식으로 하나씩 다 만들지 말고 클래스를 써서 템플릿화를 하자!
const newBook1 = {
  title: "당신이 누군가를 죽였다",
  author: "히가시노 게이고",
  price: 17820,
  category: "미스터리 스릴러",
};

//Class를 생성하는 2가지 방법
//1. 생성자 함수
//절대 화살표 함수를 안쓴다.(this가 필수불가결함.)
//반드시 함수의 이름 대문자로 제작
//new Object, Array, Date

function Book(title, author, price, category) {
  //온점 표기법을 활용해서 title의 키에 매개변수 값을 집어넣음
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

// 생성자함수를 호출 할때 반드시 new예약어를 사용
const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노 게이고",
  17820,
  "미스터리 스릴러"
);

console.log(book1);

//2. Class 명령어를 사용해서 클래스를 선언함
