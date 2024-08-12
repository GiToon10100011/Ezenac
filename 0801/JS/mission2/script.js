document.body.innerHTML = `<button id = "btn">Button</button>`

const btn = document.querySelector("#btn");

const colors = ["white", "yellow", "aqua", "purple"];

let clickCnt = 0;
const changeColors = () => {
  clickCnt++;
  const index = clickCnt % colors.length;
  document.body.style.background = `${colors[index]}`
  console.log(clickCnt);
}

btn.addEventListener("click", changeColors);