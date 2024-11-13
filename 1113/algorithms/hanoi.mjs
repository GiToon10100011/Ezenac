//3개의 블럭, 시작지점은 A, 도착지점은 C, 중간다리는 B
const hanoi = (count, from, to, bridge) => {
  if (count === 0) return;

  hanoi(count - 1, from, bridge, to);
  console.log(`원반 ${count}을 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, bridge, to, from);
};

hanoi(3, "A", "C", "B");

const hanoi = (3, A, C, B) => {
  if (3 === 0) return;

  hanoi(3 - 1, A, B, C);
  console.log(`원반 ${3}을 ${A}에서 ${C}로 이동`);
  hanoi(3 - 1, B, C, A);
};

const hanoi = (2, A, B, C) => {
  if (2 === 0) return;

  hanoi(2 - 1, A, C, B);
  console.log(`원반 ${2}을 ${A}에서 ${B}로 이동`);
  hanoi(2 - 1, C, B, A);
};

const hanoi = (2, B, C, A) => {
  if (2 === 0) return;

  hanoi(2 - 1, B, A, C);
  console.log(`원반 ${2}을 ${B}에서 ${C}로 이동`);
  hanoi(2 - 1, A, C, B);
};

const hanoi = (1, A, C, B) => {
  if (1 === 0) return;

  hanoi(1 - 1, A, C, B);
  console.log(`원반 ${1}을 ${A}에서 ${C}로 이동`);
  hanoi(1 - 1, B, C, A);
};

const hanoi = (1, C, B, A) => {
  if (1 === 0) return;

  hanoi(1 - 1, C, A, B);
  console.log(`원반 ${1}을 ${C}에서 ${A}로 이동`);
  hanoi(1 - 1, A, B, C);
};

const hanoi = (1, B, A, C) => {
  if (1 === 0) return;

  hanoi(1 - 1, B, C, A);
  console.log(`원반 ${1}을 ${B}에서 ${A}로 이동`);
  hanoi(1 - 1, C, A, B);
};

const hanoi = (1, B, A, C) => {
  if (1 === 0) return;

  hanoi(1 - 1, B, C, A);
  console.log(`원반 ${1}을 ${B}에서 ${A}로 이동`);
  hanoi(1 - 1, C, A, B);
};



