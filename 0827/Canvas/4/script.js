const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

//ellipse(x, y, radiusX, radiusY, rotation, 시작각도, 끝각도, 반시계 유무) 타원

ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.closePath();
ctx.strokeStyle = "#ff9900";
ctx.stroke();

ctx.beginPath();
ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
ctx.closePath();
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();