localStorage.removeItem("bias");

const modes = document.querySelectorAll(".navigation div");
const frame = document.querySelector("#contentFrame");
const bgVideo1 = document.querySelector(".background video:first-child");
const bgVideo2 = document.querySelector(".background video:nth-child(2)");
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
  "./about/about.html",
  "./jukebox/jukebox.html",
  "./game/game.html",
];

modes[0].classList.add("active");

const titleIndicators = ["MAIN", "ABOUT", "OST", "GAME"];

modes.forEach((mode, index) => {
  mode.addEventListener("click", () => {
    heading.classList.remove("active");
    setTimeout(() => {
      heading.classList.add("active");
    }, 200);
    heading.innerHTML = `<span>0${index + 1}</span>${titleIndicators[index]}`;

    if (index === 1) {
      heading.style.fontSize = "170px";
    } else heading.style.fontSize = "200px";
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

//setTime
setInterval(() => {
  const today = new Date();
  let hrs = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hrs < 10 ? (hrs = `0${hrs}`) : (hrs = hrs);
  mins < 10 ? (mins = `0${mins}`) : (mins = mins);
  secs < 10 ? (secs = `0${secs}`) : (secs = secs);

  const timeDisplay = document.querySelector(".clock .time");
  timeDisplay.innerText = `${hrs}:${mins}:${secs}`;

  if (hrs === "00" && mins === "00" && secs === "00") {
    updateDate(today);
  }
}, 1000);

updateDate(new Date());

function updateDate(todayDate) {
  const year = todayDate.getFullYear();
  let month = todayDate.getMonth() + 1;
  let date = todayDate.getDate();
  let day = todayDate.getDay();

  // Format month and date
  month < 10 ? (month = `0${month}`) : (month = month);
  date < 10 ? (date = `0${date}`) : (date = date);

  // Get day string
  switch (day) {
    case 0:
      day = "SUN";
      break;
    case 1:
      day = "MON";
      break;
    case 2:
      day = "TUE";
      break;
    case 3:
      day = "WED";
      break;
    case 4:
      day = "THU";
      break;
    case 5:
      day = "FRI";
      break;
    case 6:
      day = "SAT";
      break;
  }

  // Display date
  const dateDisplay = document.querySelector(".clock .date");
  dateDisplay.innerText = `${year}/${month}/${date}/${day}`;
}
const bias = document.querySelector("select");
bias.addEventListener("change", (e) => {
  const iframe = document.querySelector("iframe");
  localStorage.setItem("bias", bias.value);
  //소스를 넣어줌으로써 리로드와 같은 유사한 역할을 수행하도록 함.
  iframe.src = "./home/home.html";

  modes.forEach((mode, index) => {
    if (index !== 0) {
      mode.classList.remove("active");
    } else {
      modes[0].classList.add("active");
      heading.classList.remove("active");
      setTimeout(() => {
        heading.classList.add("active");
      }, 200);
      heading.innerHTML = `<span>01</span>${titleIndicators[0]}`;
    }
  });
});
