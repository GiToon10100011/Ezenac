
// IntroVid
const intro = document.querySelector(".intro_video");

const introVid = intro.querySelector("video");

introVid.addEventListener("ended", () => {
    intro.classList.add("active");
    setTimeout(() => {
        intro.style.display = "none";
  }, 600)
})

// Changing Modes
const all = document.querySelectorAll("*");

const lnb = document.querySelector(".lnb");
const modes = lnb.querySelectorAll("li");

let initialCount = 0;

const vids = ["Intro1.mp4", "Intro2.mp4", "Intro3.mp4"];

const logo = document.querySelector(".logo a img");
const logos = ["Logo1.png", "Logo2.png", "Logo3.png"];
const colors = ["#e60012", "#030098", "#0f7c0f"];

let colorStyle = [];


all.forEach((el) => {
  const colorS = getComputedStyle(el);
  if (colorS.color === colors[0]) {
    colorStyle.push(el);
  } 
});

console.log(colorStyle);

modes.forEach((mode, index) => {
  mode.addEventListener("click", () => {
    introVid.setAttribute("src", `./images/${vids[index]}`);
    introVid.load();
    intro.style.display = "block";
    intro.classList.remove("active");
    introVid.play();

    logo.setAttribute("src", `./images/${logos[index]}`);

    all.forEach((element) => {
      const computedStyle = getComputedStyle(element);
      if (computedStyle.color !== colors[index]) {
        colorStyle.forEach((c) => {
          c.style.color = colors[index];
        })
      }
    });
  });
});

// Header

const header = document.querySelector("header");

const Top = document.querySelector(".Top");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 50) {
    header.classList.add("active");
    Top.classList.add("active");
  } else {
    header.classList.remove("active");
    Top.classList.remove("active");
  }
});

Top.addEventListener("click", () => {
  // e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// SlickSlider
$(".myslider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

// Trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbA = gnb.querySelectorAll("a");

trigger.addEventListener("click", () => {
  trigger.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbA.forEach((a) => {
  a.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

$(".Top, .gnb a").click(function () {
  $.scrollTo(this.hash || 0, 600);
});
