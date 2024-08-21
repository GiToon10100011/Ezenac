const buttons = document.querySelectorAll("button");

const userDatas = [
  {name : "곰", age : 18},
  {name : "여우", age : 27},
  {name : "사자", age : 32},
  {name : "얼룩말", age : 41},
  {name : "기린", age : 56},
]

const over20 = userDatas.filter((data) => data.age >= 20)
const over30 = userDatas.filter((data) => data.age >= 30)
const over40 = userDatas.filter((data) => data.age >= 40)

const filters = [over20, over30, over40];

console.log(over20, over30, over40);
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const result = document.querySelector(".result");

    console.log((filters.map((filter) => `${filter.name} : ${filter.age}세`)))
  })
})