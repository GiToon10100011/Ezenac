const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

//원 혹은 호 제작
//arc(x, y, 반지름, 시작 각도, 끝 각도, 반시계유무)

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();

// ctx.fillStyle = "cyan";
// ctx.strokeStyle = "magenta";
// ctx.fill();
// ctx.stroke();

ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.arc(250, 100, 50, 0, Math.PI, false);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.strokeStyle = "rgb(0, 0, 255)"
ctx.stroke();



