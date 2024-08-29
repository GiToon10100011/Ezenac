const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
const ctx = canvas.getContext("2d");
const origin = {
  x: 600,
  y: 600,
};
const colors = [
  "red",
  "orange",
  "yellow",
  "greenyellow",
  "green",
  "skyblue",
  "blue",
  "purple",
  "pink",
];
const alpha = 0.7;
// canvas.width = innerWidth;
// canvas.height = innerHeight;
ctx.fillStyle = "#ccc";
ctx.fillRect(origin.x, origin.y, 100, 100);

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

let index = 0;
button.addEventListener("click", () => {
  let color = randomRGB();
  ctx.globalAlpha = alpha;
  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);
  // ctx.fillStyle = colors[index];
  ctx.fillStyle = color;
  index++;
  if (index > colors.length - 1) {
    index = 0;
  }
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});
