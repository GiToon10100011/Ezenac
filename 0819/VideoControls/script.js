const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type = 'range']");

const play = () => {
  playButton.innerText = "| |";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
}

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec < 10 ? sec = `0${sec}` : sec;
  min < 10 ? min = `0${min}` : min;
  hour < 10 ? hour = `0${hour}` : hour;

  return `${hour}:${min}:${sec}`
}

const updateTime = () => {
  const current = document.querySelector(".current");
 
  current.innerText = formatting(video.currentTime);
  const duration = document.querySelector(".duration")
  duration.innerText = formatting(video.duration);
}

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
volumeBar.addEventListener("change", setVolume)