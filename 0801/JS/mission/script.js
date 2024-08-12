document.body.innerHTML = `<button class = "btn">Info</button>`;

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const userName = prompt("이름을 입력해주세요.");
  const userAge = Number(prompt("나이를 입력해주세요"));
  alert(`안녕하세요 ${userName}님 나이가 ${userAge}세 이네요!`);
});
