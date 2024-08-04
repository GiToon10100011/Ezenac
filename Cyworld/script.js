const modes = document.querySelectorAll(".navigation div");
const frame = document.querySelector("#contentFrame");
const bgVideo = document.querySelector(".background video");

bgVideo.addEventListener("ended", () => {
  bgVideo.setAttribute("src", "./contents/persona_intro2.mp4");
  bgVideo.setAttribute("loop", true);
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
