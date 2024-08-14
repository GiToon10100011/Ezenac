function Book(title, pages, done = false) {
  //field영역
  this.title = title;
  this.pages = pages;
  this.done = done;

  //method영역
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);
console.log(book1);

// 1) 생성자 함수를 선언 => 프로토타입 객체 생성
// 2) 변수를 선언 && 생성자 함수를 호출 및 할당
// 3) 생성자 함수가 가지고 있던 프로토타입 객체 활성화 => 해당 변수, 인스턴스 객체
// 4) 해당 변수 => 인스턴스 객체

//객체지향 클래스 기반의 프로그래밍 언어
//객체지향 프로토타입 기반의 프로그래밍 언어

//ES의 클래스: Syntactic Sugar(코팅한 설탕? - 탕후루)

//클래스를 통해 제작하는 방법
//method 함수만 들어갈 수 있다.

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done = false ? (str = "읽는중") : (str = "완독");
    return str;
  }
}

//TS => 슈퍼셋 언어(유동성을 포기한 대신 엄격한 문법을 사용), 접근 제어자 // 추상화
//public, private, protected
// ES6 2015년 출시

//원기둥의 부피를 계산
//원기둥의 밑면 넓이 x 높이
//원 부피 : 파이 x 반지름 x 반지름

const form = document.querySelector("form");
const result = document.querySelector("#result");

//function함수로 객체 생성하는 방법
//대문자로 시작하니까 생성자함수!
// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

//클래스를 사용한 방법
class Cylinder{
  constructor(diameter, height){
    this.diameter = diameter;
    this.height = height;
  }

  getVolume = function(){
    let radius = this.diameter / 2;
    return(Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  if (
    diameter === "" ||
    height === "" ||
    isNaN(diameter) || isNaN(height)
  )
    result.innerText = `정확한 지름값과 높이 값을 입력해주세요.`;
    else{
      // 객체 생성
      const cylinder02 = new Cylinder(diameter, height);
      result.innerText = `원기둥의 부피는 ${cylinder02.getVolume()}제곱미터 입니다.`
    }
});

// const cylinder01 = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder01.getVolume()}제곱미터 입니다.`);
