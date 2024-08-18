const songs = document.querySelectorAll(".albumTable_song");
for(let song of songs){
  const play = song.querySelector(".fa-play");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    console.log(e);
    e.target.closest("td").querySelector("audio").play();
  });  
  pause.addEventListener("click", () => {
    e.target.closest("td").querySelector("audio").pause();
  })
}

const loopBtn = document.querySelector(".album-controls span");
let isLooping = false;
loopBtn.addEventListener("click", () => {
  if(isLooping === false){
    loopBtn.innerText = "repeat_one";
    isLooping = true
  } else{
    loopBtn.innerText = "repeat";
    isLooping = false;
  }
})


const playBtn = document.querySelector(".album-controls .play-btn i");
let isPlaying = false;
playBtn.addEventListener("click", () => {
  if(isPlaying === false){
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    isPlaying = true;
  } else{
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
    isPlaying = false;
  }
})

const heartBtn = document.querySelector(".fa-heart");
heartBtn.addEventListener("click", () => {
  heartBtn.classList.toggle("active");
})