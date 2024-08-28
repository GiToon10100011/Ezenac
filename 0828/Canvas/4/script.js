const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

//createLinearGradient()
//그라디언트를 적용하는데 있어서 시작점 좌표 x, y, 끝나는 지점의 x, y좌표
//그라디언트를 생성할때 사용할 수 있는 중단점 생성 함수
//addColorStop(어느 비율, 색상)
//createRadialGradient
//내부 원의 x, y좌표, 내부 원에 대한 r, 외부원에 대한 x, y, 외부 원에 대한 r

const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, "black");
linGrad.addColorStop(0.6, "white");
linGrad.addColorStop(1, "#eee");

ctx.fillStyle = linGrad;
ctx.fillRect(0, 0, 100, 200);
ctx.fillRect(0, 0, 200, 200);

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;


const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "#ccc");
radGrad.addColorStop(1, "black");

ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fillStyle = radGrad;
ctx.fill();

const img = new Image();
img.onload = function(){
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(200, 0, 200, 200)
}
img.src = "./IMG_5658.jpg";