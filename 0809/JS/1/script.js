//1. 정적으로 고정되어있는 아이템 요소의 위치를 이동
//position: absolute
//2. 삼각비, 본초선, 동경, 빗변, 삼각함수, sin, cos, tan

const character = document.querySelector(".character");
const age = document.querySelector(".age");
console.log(age);

let degree = 0;

const loop = () => {
  const rotation = (degree * Math.PI) / 180; //60분법을 래디안으로 변환시키는 공식
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation); //화면의 중간으로 이동 시키기위해 절반으로 쪼갬
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation); //화면의 중간으로 이동 시키기위해 절반으로 쪼갬
  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;
  age.style.left = `${targetX}px`;
  age.style.top = `${targetY}px`;

  degree += 1;

  requestAnimationFrame(loop);
};

loop();
