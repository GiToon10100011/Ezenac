const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDate = today.getDate();

current.innerText = `오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다!`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  const resultDays = document.querySelector("#days");
  const resultHrs = document.querySelector("#hours");

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHrs = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365);

  resultDays.innerText = `현재 나이는 ${passedAges}살입니다`;

  resultHrs.innerText = `현재까지 ${passedHrs}시간이 흘렀습니다!`;

  const result = document.querySelector("#result");
  result.style.background = `radial-gradient(circle, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),url("./math_img_1.png") center/contain no-repeat`;
  result.style.color = "white";
});
