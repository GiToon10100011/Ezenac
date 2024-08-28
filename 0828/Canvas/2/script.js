const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0)
// })

//(이미지, 캡쳐하고자 하는 x좌표, 캡쳐하고자 하는 y좌표(캡처하고자 하는 좌표란, 이미지의 내부 공간을 선언), 너비, 높이, 출력하고자 하는 x좌표, 출력하고자 하는 y좌표(출력하고자하는 높이는 말그대로 지정한 이미지를 화면상에서 어디에 출력할것인지에 대한 좌표), 너비, 높이)
img.onload = function(){
  ctx.drawImage(img, 300, 750, 980, 350, 160, 100, 140, 175);
}
img.src = "./IMG_5658.jpg";

ctx.arc(180, 290, 100, 0, Math.PI * 2, false);
ctx.clip()