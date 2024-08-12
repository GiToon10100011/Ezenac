const container = document.querySelector(".container");

const arrows = document.querySelectorAll(".arrows");

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];
const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const autoplayVideo = document.createAttribute("autoplay");

newVideo.setAttributeNode(srcVideo);
newVideo.setAttribute("src", `./videos/${videos[0]}`);
container.appendChild(newVideo);
newVideo.setAttributeNode(autoplayVideo);

newVideo.addEventListener("click", () => {
  if (newVideo.paused) {
    newVideo.play();
  } else {
    newVideo.pause();
  }
});

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "right") {
      i++;

      if (i >= videos.length) {
        i = 0;
      }
    } else if (e.target.id === "left") {
      i--;

      if (i < 0) {
        i = videos.length - 1;
      }
    }
    newVideo.setAttribute("src", `./videos/${videos[i]}`);
  });
});
