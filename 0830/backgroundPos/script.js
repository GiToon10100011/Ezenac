const imageAll = document.querySelectorAll(".imageWrapper .parallaxImg");
const subpageImage = document.querySelector(".subPage .parallaxImg");

const totalNum = imageAll.length;

let scrollNum = 0;

let x = 0;
let targetX = 0;
let speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = scrollY;
  imageAll.forEach((img, index) => {
    console.log(img);
    if (index < 4) {
      img.style.transform = `translateY(${-scrollNum / (2 *(totalNum - index))}px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 50}px, ${-scrollNum / (2 *(totalNum - 4))}px)`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 150}px, ${-scrollNum / (2 *(totalNum - 5))}px)`;
  subpageImage.style.transform = `scale(1.1) translateX(${-targetX / 80}px)`;

  requestAnimationFrame(loop);
};

loop();
