function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을/(를) ${this.price}원에 구매하였습니다!`);
};

const book1 = new Book("자바스크립트", 10000);
book1.buy();

function Book2(title, price, major) {
  //그냥 title, price가 무슨 역할이고 어떤 놈인지 모르기때문에 this도 가져옴으로써 어떤건지 알려줌.
  Book.call(this, title, price);
  this.major = major;
}

Book2.prototype.buyTextBook = function () {
  console.log(
    `${this.major}전공 서적, ${this.title}을(를) ${this.price}에 구매하였습니다.`
  );
};

Object.setPrototypeOf(Book2.prototype, Book.prototype);

const book2 = new Book2("자바스크립트", 90000, "컴퓨터공학");

console.log(book2);

book2.buyTextBook();
book2.buy();

//extends : implement와 다르게 비필수, class를 활용해서 상속할때 사용하는 바닐라 js 문법
//implement(TS에서만 존재) => 상속의 개념과 유사, 특정 값을 상속을 받는다면, 반드시 필수적으로 상속받은 값을 사용해야하는 조건

//클래스를 생성해서 상속받기
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book3 = new BookC("자료구조", 10000);
book3.buy();

class BookC2 extends BookC {
  constructor(title, price, major){
    super(title, price);
    this.major = major;
  }
  
  buyTextBook(){
    console.log(`${this.major}전공 서적, ${this.title}을(를) 구매했습니다.`);
  }
}

const book4 = new BookC2("알고리즘", 50000, "컴퓨터공학");

book4.buyTextBook();
book4.buy();