const buttons = document.querySelectorAll("button");

const userDatas = [
  {name : "곰", age : 18},
  {name : "여우", age : 27},
  {name : "사자", age : 32},
  {name : "얼룩말", age : 41},
  {name : "기린", age : 56},
];

const over20 = userDatas.filter((data) => data.age >= 20)
const over30 = userDatas.filter((data) => data.age >= 30)
const over40 = userDatas.filter((data) => data.age >= 40)

const filters = [over20, over30, over40];

const updateList = (filteredData) => {
  let resultContent = ``;
  filteredData.forEach((data) => {
  resultContent +=  `<li>${data.name} : ${data.age}세</li>`
  })
  document.querySelector(".result").innerHTML = resultContent;
}

const onClickBtn = (e) => {
  const targetAge = e.target.dataset.age;
  const filteredData = userDatas.filter((data) => data.age >= targetAge);

  updateList(filteredData);
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    onClickBtn(e);

  });
})