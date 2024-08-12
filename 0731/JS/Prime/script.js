const num = Number(prompt("숫자를 입력하세요"));
let isPrime;

if (num === 1) {
  document.write("1은 소수가 아닙니다.");
} else if (num === 2) {
  document.write("2는 소수입니다.");
  isPrime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }

  if (isPrime) {
    document.write(`${num}은 소수입니다.`);
  } else {
    document.write(`${num}은 소수가 아닙니다.`);
  }
}
