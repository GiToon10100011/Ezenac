const progressBar = document.querySelector(".bar");
const depthWrapper = document.querySelector(".depthsWrapper span");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

console.log(progressBar, depthWrapper, submarine, octopus);

const percent = (scroll, height) => {
  return ((scroll / height) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const boss = document.querySelector(".boss");
  let scroll = window.scrollY;
  const documentHeight = document.body.scrollHeight - innerHeight;
  const per = `${percent(scroll, documentHeight)}%`;

  progressBar.style.width = `${per}`;
  depthWrapper.innerText = scroll;
  boss.style.transform = ` translate(-50%, -50%) scale(${per})`;
  boss.style.opacity = per;
  submarine.style.transform = `translateX(${per})`;
  octopus.style.transform = `translateY(${-per / 2})`;
});
