const songs = [
  "coloryournight.mp3",
  "battlehymnofthesoul.mp3",
  "iwatodaidorm.mp3",
  "itsgoingdownnow.mp3",
  "changingseasons.mp3",
  "heartfulcry.mp3",
];

const playlist = document.querySelectorAll(".song");

const audio = document.querySelector("audio");

const loopBtn = document.querySelector(".album-controls span");
let isLooping = false;
loopBtn.addEventListener("click", () => {
  console.log(audio);
  if (isLooping === false) {
    loopBtn.innerText = "repeat_one";
    isLooping = true;
    audio.loop = true;
  } else {
    loopBtn.innerText = "repeat";
    isLooping = false;
    audio.loop = false;
  }
});

const playBtn = document.querySelector(".album-controls .play-btn i");
let isPlaying = false;
playBtn.addEventListener("click", () => {
  if (isPlaying === false) {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    isPlaying = true;
    audio.play();
  } else {
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
    isPlaying = false;
    audio.pause();
  }
});

audio.addEventListener("ended", () => {
  playBtn.classList.add("fa-play");
  playBtn.classList.remove("fa-pause");
  isPlaying = false;
});

const heartBtn = document.querySelector(".fa-heart");
heartBtn.addEventListener("click", () => {
  heartBtn.classList.toggle("active");
});

playlist.forEach((song, index, arr) => {
  song.addEventListener("click", () => {
    const albumTitle = document.querySelector(".album-title h4");
    const songTitle = song.querySelector("span:first-child");
    albumTitle.innerText = songTitle.innerText;
    audio.setAttribute("src", `../contents/${songs[index]}`);
    console.log(audio);
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    isPlaying = true;
    arr.forEach((el, i) => {
      if (index !== i) {
        el.querySelector(".img-box").classList.remove("active");
      } else {
        el.querySelector(".img-box").classList.add("active");
      }
    });
  });
});

const backward = document.querySelector(".fa-backward");

backward.addEventListener("click", () => {
  let currentIndex;
  const currentAudio = audio.getAttribute("src");
  if (currentAudio.includes("coloryournight")) {
    currentIndex = 0;
  } else if (currentAudio.includes("battlehymnofthesoul")) {
    currentIndex = 1;
  } else if (currentAudio.includes("iwatodaidorm")) {
    currentIndex = 2;
  } else if (currentAudio.includes("itsgoingdownnow")) {
    currentIndex = 3;
  } else if (currentAudio.includes("changingseasons")) {
    currentIndex = 4;
  } else if (currentAudio.includes("heartfulcry")) {
    currentIndex = 5;
  }
  console.log(currentIndex);
  if (currentIndex > 0 && currentIndex <= songs.length - 1) {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    isPlaying = true;
    currentIndex--;
    audio.setAttribute("src", `../contents/${songs[currentIndex]}`);
    console.log(audio);
    audio.play();

    const albumTitle = document.querySelector(".album-title h4");
    const songTitle = document.querySelectorAll(".song p span:first-child");
    console.log(albumTitle, songTitle);
    albumTitle.innerText = songTitle[currentIndex].innerText;

    const imgBoxes = document.querySelectorAll(".img-box");
    imgBoxes.forEach((img, index) => {
      if (index !== currentIndex) img.classList.remove("active");
      else img.classList.add("active");
    });
  }
});

const forward = document.querySelector(".fa-forward");

forward.addEventListener("click", () => {
  let currentIndex;
  const currentAudio = audio.getAttribute("src");
  if (currentAudio.includes("coloryournight")) {
    currentIndex = 0;
  } else if (currentAudio.includes("battlehymnofthesoul")) {
    currentIndex = 1;
  } else if (currentAudio.includes("iwatodaidorm")) {
    currentIndex = 2;
  } else if (currentAudio.includes("itsgoingdownnow")) {
    currentIndex = 3;
  } else if (currentAudio.includes("changingseasons")) {
    currentIndex = 4;
  } else if (currentAudio.includes("heartfulcry")) {
    currentIndex = 5;
  }
  console.log(currentIndex);
  if (currentIndex >= 0 && currentIndex < songs.length - 1) {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    isPlaying = true;
    currentIndex++;
    audio.setAttribute("src", `../contents/${songs[currentIndex]}`);
    console.log(audio);
    audio.play();

    const albumTitle = document.querySelector(".album-title h4");
    const songTitle = document.querySelectorAll(".song p span:first-child");
    console.log(albumTitle, songTitle);
    albumTitle.innerText = songTitle[currentIndex].innerText;

    const imgBoxes = document.querySelectorAll(".img-box");
    imgBoxes.forEach((img, index) => {
      if (index !== currentIndex) img.classList.remove("active");
      else img.classList.add("active");
    });
  }
});
