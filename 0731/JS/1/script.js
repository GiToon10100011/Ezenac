const button = document.querySelector("button");

const body = document.querySelector("#result");

const curr = 2024;
const calc = () => {
  const birth = Number(prompt("태어난 년도를 입력해주세요"));

  if (isNaN(birth)) {
    alert("잘못 입력하셨습니다.");
  } else {
    body.innerHTML = `당신의 나이는 ${curr - birth + 1}세`;
  }
};

button.addEventListener("click", calc);
