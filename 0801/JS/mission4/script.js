let userNum = [];
for (let i = 0; i < 2; i++) {
  userNum.push(Number(prompt(" 숫자 2개를 순차적으로 입력해주세요")));
}

let first = [];

for (let j = 0; j <= userNum[0]; j++) {
  if (userNum[0] % j === 0) {
    first.push(j);
  }
}

const max = Math.max(...userNum);

console.log(max);

let second = [];

for (let i = 0; i <= userNum[1]; i++) {
  if (userNum[1] % i === 0) {
    second.push(i);
  }
}

const firstMax = Math.max(...first);

const secondMax = Math.max(...second);

console.log(firstMax, secondMax);

let result = [];
for (let i = 0; i <= max; i++) {
  if (firstMax % i === 0 && secondMax % i === 0) {
    result.push(i);
  } else {
    continue;
  }
}

console.log(result);

const final = Math.max(...result);

console.log(final);
