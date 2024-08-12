// const nums = [];

// for (let i = 1; i < 20; i++) {
//   nums.push(i);
//   i += 1;
// }

// let result = [];
// let others = [];

// nums.forEach((num) => {
//   if (num > 10) {
//     result.push(num);
//   } else {
//     others.push(num);
//   }
// });

// console.log(result, others);

const userNum = Number(prompt("1이상의 숫자를 입력해주세요"));
let sum = 0;

if (userNum <= 1 || isNaN(userNum)) {
  alert("'1이상'의 '숫자'만 입력해주세요");
  location.reload();
} else {
  for (let i = 0; i <= userNum; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }
}

console.log(sum);
