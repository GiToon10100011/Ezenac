// const factorial = (n) => {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(5));

const factorial01 = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  console.log(sum);
  return sum;
};

factorial01(5);
