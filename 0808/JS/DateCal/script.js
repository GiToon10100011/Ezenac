const now = new Date();
const firstDay = new Date("2024-06-14");
const toNow = now.getTime();
const toFirst = firstDay.getTime();
const birthYear = -7800;
let currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

const passed = toNow - toFirst;
// const passedDate = Math.round(passed / (24 * 60 * 60 * 1000));

const accent = document.querySelector(".accent");

accent.innerText = `🫢 ${age}살`;

document.querySelector("#birth").innerText = `💀 ${-birthYear} B.C.`;

let future = toFirst + 100 * (24 * 60 * 60 * 1000);
let someday = new Date(future);
console.log(someday);

let month = someday.getMonth() + 1;
let date = someday.getDate();

console.log(currentYear, month, date);

const itemTitles = document.querySelectorAll(".item-title");

// date100.innerText = `${year}년 ${month}월 ${date}일`;

const age10000 = 10000;
const age100000 = 100000;
const age1000000 = 1000000;

const alarms = ["와 어떻게 아직도.. 살아있는거지?", "와 176일 뒤면 10000살이시네요! 축하드립니다~!", "10만살까진 좀 남았네요 ㅠㅠ 파이팅입니다!", "백년해로 아니고 백만해로 하시겠어요~ 늘 건강하세요 할아버님!"]

document.querySelector("#date10000").innerText = `${age10000 - age} 일`;
document.querySelector("#date100000").innerText = `${age100000 - age} 일`;
document.querySelector("#date1000000").innerText = `😨 ${age1000000 - age} 일`;

itemTitles.forEach((title, index) => {
  title.addEventListener("click" , () => {
    alert(alarms[index])
  })
})

//Function
const calcDate = () => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();

  document.querySelector(`#date${days}`).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);