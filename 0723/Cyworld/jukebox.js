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
