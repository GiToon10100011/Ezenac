document.body.innerHTML = `<button id = "btn">Button</button>`

const btn = document.querySelector("#btn");

const colors = ["white", "yellow", "aqua", "purple"];

let i = 0;
const changeColors = () => {
  i++;
  if(i >= colors.length) i = 0;
  document.body.style.background = `${colors[i]}`
}

btn.addEventListener("click", changeColors);