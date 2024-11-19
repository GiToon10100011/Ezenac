const fibonacci = (num) => {
  if (num === 0 || num === 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
};

//얼마나 많은 시간이 걸렸는지로 시간복잡도를 면접에서는 판단함.
let start = new Date();
console.log(fibonacci(40));
let end = new Date();
console.log(`fibonacci실행시간: ${end - start}ms`);

const memoizationFibonacci = (n, memo) => {
  if (n === 0 || n === 1) return n;
  if (memo[n] == null) {
    memo[n] =
      memoizationFibonacci(n - 2, memo) + memoizationFibonacci(n - 1, memo);
  }
  return memo[n];
};

//얼마나 많은 시간이 걸렸는지로 시간복잡도를 면접에서는 판단함.
let memoStart = new Date();
console.log(memoizationFibonacci(40, []));
let memoEnd = new Date();
console.log(`fibonacci실행시간: ${memoEnd - memoStart}ms`);
