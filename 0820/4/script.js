//1, Iterable => 순서대로 처리할 수 있는
//Iterable 객체 => 객체안에 담겨있는 각각의 독립적인 아이템요소를 찾아서 어떤실행을 순서대로 처리할 수 있도록 할 수 있는 객체 

// JS 안에서 Iterable 객체 => 배열, 문자열 

let hi = "hello";
for(let char of hi){
  console.log(char);
}

let charArr = [...hi];
console.log(charArr);

let[ch1, ch2] = hi;
console.log(ch1, ch2);
console.log(hi);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());

//이터러블한 객체 => 이터레이터 객체 속성
//이터레이터 객체 속성 => next()
//next() => 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수

function* fnc(){
  yield 1;
  yield 2;
  yield 3;
};

const g1 = fnc();

for(let i of g1){
  console.log(i);
}