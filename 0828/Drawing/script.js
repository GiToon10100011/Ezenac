const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let startX;
let startY;
let lineWidth = 2;
// let lineColor = "#000";
let isDrawing = false;

// toolbar.querySelector("#lWidth").addEventListener("change", function(){
//   lineWidth = this.value;
// })
// toolbar.querySelector("#stroke").addEventListener("change", function(){
//   lineColor = this.value;
//   ctx.strokeStyle = lineColor;
// })

toolbar.addEventListener("change", (e) => {
  if(e.target.id === "stroke") ctx.strokeStyle = e.target.value;
  if(e.target.id === "lWidth") lineWidth = e.target.value;
})

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
})

canvas.addEventListener("mousemove", (e) => {
  if(!isDrawing) return;
  else{
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
    ctx.stroke();
  }
})

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
})

toolbar.querySelector("#reset").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})