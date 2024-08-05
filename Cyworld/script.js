const modes = document.querySelectorAll(".navigation div");
const frame = document.querySelector("#contentFrame");
const bgVideo1 = document.querySelector(".background video:first-child");
const bgVideo2 = document.querySelector(".background video:nth-child(2)");
const bgVideo3 = document.querySelector(".background video:last-child");

const gek = document.querySelector(".background img");




const start = document.querySelector(".menus");

const heading = document.querySelector(".heading");

bgVideo1.addEventListener("play", () => {
  start.classList.add("active");
  gek.classList.add("active");
});

bgVideo.addEventListener("ended", () => {
  bgVideo.setAttribute("src", "./contents/persona_intro2.mp4");
  bgVideo.loop = true;
});

const frames = [
  "./home/home.html",
  "./game/game.html",
  "./jukebox/jukebox.html",
];

modes[0].classList.add("active");

modes.forEach((mode, index) => {
  mode.addEventListener("click", () => {
    frame.setAttribute("src", frames[index]);
    modes.forEach((item, i) => {
      if (index === i) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

const outerBox = document.querySelector(".outerbox");
const wrapper = outerBox.querySelector(".wrapper");
outerBox.addEventListener("click", () => {
  wrapper.classList.add("active");
  start.style.transitionDelay = "0s";
  start.style.opacity = "0";
});
