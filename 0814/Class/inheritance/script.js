//생성자 함수를 만드는 동일한 개념(무조건 대문자로 시작)
const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독!");
    return str;
  };
};

//인스턴스 객체 book1을 생성
const book1 = new Book("자바스크립트", 648, false);
console.log(book1.finish());

//인스턴스 객체의 프로토타입을 확인
console.log(book1.__proto__);
console.log(Book.prototype);
console.log(Date.prototype);

function Newbook(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}

Newbook.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};

const nbook1 = new Newbook("타입스크립트", 648, false);
console.log(nbook1.finish());

function Book2(title, price) {
  this.title = title;
  this.price = price;
}

Book2.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book2 = new Book2("뽀로로", 10000);
book2.buy();

function TextBook(title, price, major){
  Book2.call(this, title, price)
  this.major = major;
}

TextBook.prototype.buyTextBook = function(){
  console.log(`${this.major}전공서적, ${this.title}을 구매하였습니다!`);
}

Object.setPrototypeOf(TextBook.prototype, Book2.prototype);

const book3 = new TextBook("잘될거야!", 20000, "인생");

book3.buy();
book3.buyTextBook();

// function Book() {

// }

//상속에 대한 개념
