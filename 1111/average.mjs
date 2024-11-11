//변수라는 자료구조를 활용해서 3개의 숫자의 평균값을 구함
let a = 87;
let b = 70;
let c = 100;
let avg1 = (a + b + c) / 3;

//값이 추가될 때마다 3번의 수정이 필요.. 배열이 훨씬 효율적

const array = [87, 70, 100];
let avg2 = array.reduce((curr, acc) => curr + acc) / array.length;

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

sum /= array.length;

console.log(sum);

//배열은 한번만 값을수정하면 됨
