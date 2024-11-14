//3개의 블럭, 시작지점은 A, 도착지점은 C, 중간다리는 B
const hanoi = (count, from, to, bridge) => {
  if (count === 0) return;

  hanoi(count - 1, from, bridge, to);
  console.log(`원반 ${count}을 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, bridge, to, from);
};

hanoi(3, "A", "C", "B"); //호출순서 1 bottom

const hanoi = (3, A, C, B) => {
  if (3 === 0) return;
  hanoi(3 - 1, A, B, C); //호출순서 2
  console.log(`원반 ${3}을 ${A}에서 ${C}로 이동`); //콘솔 4번
  hanoi(3 - 1, B, C, A); //호출순서 9
};

const hanoi = (2, A, B, C) => {
  if (2 === 0) return;

  hanoi(2 - 1, A, C, B); //호출순서 3
  console.log(`원반 ${2}을 ${A}에서 ${B}로 이동`); //콘솔 2번
  hanoi(2 - 1, C, B, A); //호출순서 6
};

const hanoi = (1, A, C, B) => {
  if (1 === 0) return;

  hanoi(1 - 1, A, B, C); //호출순서 4, end
  console.log(`원반 ${1}을 ${A}에서 ${C}로 이동`); //콘솔 1번
  hanoi(1 - 1, B, C, A); //호출순서 5(전 하노이가 끝나서 나갔으므로), end
};

const hanoi = (1, C, B, A) => {
  if (1 === 0) return;

  hanoi(1 - 1, C, A, B); //호출순서 7, end
  console.log(`원반 ${1}을 ${C}에서 ${B}로 이동`); //콘솔 3번
  hanoi(1 - 1, A, B, C); //호출순서 8(전 하노이가 끝나서 나갔으므로), end
};

const hanoi = (2, B, C, A) => {
  if (1 === 0) return;

  hanoi(2 - 1, B, A, C); //호출순서 10
  console.log(`원반 ${1}을 ${B}에서 ${C}로 이동`); //콘솔 6번
  hanoi(2 - 1, A, C, B); //호출순서 13
};

const hanoi = (1, B, A, C) => {
  if (1 === 0) return;

  hanoi(1 - 1, B, C, A); //호출순서 11, end
  console.log(`원반 ${1}을 ${B}에서 ${A}로 이동`); //콘솔 5번
  hanoi(1 - 1, C, A, B); //호출순서 12, end
};

const hanoi = (1, A, C, B) => {
  if (1 === 0) return;

  hanoi(1 - 1, A, B, C); //호출순서 14, end
  console.log(`원반 ${1}을 ${A}에서 ${C}로 이동`); //콘솔 7번
  hanoi(1 - 1, B, C, A); //호출순서 15, end
};















