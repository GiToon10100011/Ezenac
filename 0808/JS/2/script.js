const userDate = prompt(
  "만 보 걷기를 시작한 날짜를 입력해주세요!",
  "2024-06-14"
);

const days = document.querySelector(".days");

console.log(days);

const currentDate = new Date();
const firstDay = new Date(userDate);

const passedTime = currentDate.getTime() - firstDay.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

days.innerText = `${passedDate}일`;
