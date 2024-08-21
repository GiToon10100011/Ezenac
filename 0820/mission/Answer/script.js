const userId = document.querySelector("#userId");
const result = document.querySelector(".result");

const userDatas = [
  { id: 123, name: "곰" },
  { id: 1021, name: "사자" },
  { id: 6021, name: "여우" },
];

const findUser = (userValue) => {
  const targetData = userDatas.find((data) => data.id === userValue);

  if (targetData === undefined || targetData === null) {
    result.innerText = "유저 검색결과 없음";
  } else {
    result.innerText = targetData.name;
  }
};

userId.addEventListener("keyup", (e) => {
  let userValue = Number(e.target.value);
  if (isNaN(userValue)) result.innerText = "숫자가 아닙니다!";
  else findUser(userValue);
});
