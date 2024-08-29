const cursor = document.querySelector(".cursorItem");

const allBtns = document.querySelectorAll("a");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.05;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();

allBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    console.log("over");
    cursor.querySelector(".circle").style.transform = "scale(0.5)";
  });
  btn.addEventListener("mouseleave", () => {
    console.log("over");
    cursor.querySelector(".circle").style.transform = "scale(1)";
  });
});
