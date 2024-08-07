const modes = document.querySelectorAll(".navigation div");
const frame = document.querySelector("#contentFrame");
const bgVideo1 = document.querySelector(".background video:first-child");
const bgVideo2 = document.querySelector(".background video:nth-child(2)");
console.log(bgVideo2);
const bgVideo3 = document.querySelector(".lastVideo");

const gek = document.querySelector(".background img");

const menus = document.querySelector(".menus");

const heading = document.querySelector(".heading");

const outerBox = document.querySelector(".outerbox");
const wrapper = outerBox.querySelector(".wrapper");

bgVideo1.addEventListener("play", () => {
  gek.classList.add("active");
});

gek.addEventListener("click", () => {
  const logoBox = document.querySelector(".logoBox");
  bgVideo1.style.display = "none";
  logoBox.style.display = "none";
  bgVideo2.autoplay = true;
  bgVideo2.play();
});

bgVideo2.addEventListener("ended", () => {
  bgVideo2.style.display = "none";
  bgVideo3.autoplay = true;
  bgVideo3.play();
  setTimeout(() => {
    wrapper.classList.add("active");
    heading.classList.add("active");
  }, 1600);
});

bgVideo3.addEventListener("ended", () => {
  bgVideo3.setAttribute("src", "./contents/persona_intro2.mp4");
  bgVideo3.loop = true;
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

