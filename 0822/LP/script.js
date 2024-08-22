const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audios = frame.querySelectorAll("audio");
const deg = 45;
let num = 0;

lists.forEach((list, index) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * index}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/ydhprofile.jpg")`;
  
  const pause = list.querySelector("ul li:nth-child(1)");
  const play = list.querySelector("ul li:nth-child(2)");
  const load = list.querySelector("ul li:nth-child(3)");
  
  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });

  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });

  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").load();
    e.target.closest("article").querySelector("audio").play();
  });

});

const initMusic = () => {
  for(let audio of audios){
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  }
}

initMusic();

let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  for (let list of lists) {
    list.classList.remove("on");
  }

  lists[index].classList.add("on");
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active === 0 ? (active = len) : active--;
  activation(active, lists);
});
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active === len ? (active = 0) : active++;
  activation(active, lists);
});

