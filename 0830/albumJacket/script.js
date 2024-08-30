//공식이니 그냥 외워라!
const contentAll = document.querySelectorAll(".contentWrapper img");
let x = 0;
let targetX = 0;
const speed = 0.1;
const shadow = contentAll[0];
const human = contentAll[1];
const date = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  //30% 만큼만 움직여라
  shadow.style.transform = `translateX(${targetX / 35}px)`
  date.style.transform = `translateX(${targetX / 20}px)`
  human.style.transform = `translateX(${-targetX / 20}px)`
  textImg.style.transform = `translateX(${-targetX / 10}px)`
  window.requestAnimationFrame(loop);
}

loop();
