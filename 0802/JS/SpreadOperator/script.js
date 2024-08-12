//함수에서 만날 수 있는 전개연산자 구문
const fruits = ["apple", "banana", "grape"];
//매개변수로 전개연산자를 사용하면 배열내의 요소들을 펼쳐서 늘여놓음(전개시킴)
console.log(...fruits); // apple banana grape

function addNum(a, b) {
  return a + b;
}

addNum(1, 3);

console.log(addNum(1, 3));


// 사용자가 얼마나 많은 값을 입력할지 예측이 불가할때 함수의 매개변수에 전개 연산자를 사용한다. 
function addNum(...numbers) {
  let sum = 0;
  for(let number of numbers){
    sum += number;
  }
  return sum;
}

console.log(addNum(1, 3, 7, 4));


//전개연산자 구문은 무조건 매개변수들 중 마지막에 나와야한다.
//전개 연산자 앞에 매개변수를 넣는다면 그 매개변수는 전개연산자 내의 값들의 처음부터 순서대로 가져온다.
function displayFavorites(first, second, ...fruits){
  const str = `가장 좋아하는 과일은 ${first}이고, 그 다음엔 ${second}, 그 다음으로는 ${fruits[fruits.length-1]} 입니다!`
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));