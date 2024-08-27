const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200,0,0)";
//x좌표, y좌표, width, height
ctx.fillRect(10, 10, 50, 100);
ctx.fillRect(150, 10, 50, 100);
ctx.strokeRect(10, 10, 100, 50);
ctx.clearRect(8, 8, 60, 120);
console.log(ctx);
ctx.strokeStyle = "rgb(0,0,0)"
ctx.strokeRect(150, 10, 50, 100)
