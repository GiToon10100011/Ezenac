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

// IntroVid
const intro = document.querySelector(".intro_video");

const introVid = intro.querySelector("video");

introVid.addEventListener("ended", () => {
  intro.classList.add("active");
  setTimeout(() => {
    intro.style.display = "none";
  }, 600);
});

// Changing Modes
const all = document.querySelectorAll("*");

const lnb = document.querySelector(".lnb");
const modes = lnb.querySelectorAll("li");

// Set arrayIndex
let initialCount = 0;

// Videos
const vids = ["Intro1.mp4", "Intro2.mp4", "Intro3.mp4"];

// Logos
const logo = document.querySelector(".logo a img");
const footerLogo = document.querySelector(".sns_logo img");
const logos = ["Logo1.png", "Logo2.png", "Logo3.png"];

//Main Background
const mainBg = document.querySelector(".intro");
const mainBgs = ["Intro1.jpg", "Intro2.jpg", "Intro3.jpg"];

// About Image
const aboutImg = document.querySelector(".photo img");
const aboutImgs = ["about1.jpg", "about2.jpg", "about3.jpg"];

// Ranking Images
const rankingImg = document.querySelectorAll(".up-image img");
const rankingImgs = {
  nintendo: {
    img: ["N_ranking1.avif", "N_ranking2.avif", "N_ranking3.avif"],
  },
  ps: {
    img: ["P_ranking1.jpg", "P_ranking2.jpg", "P_ranking3.jpg"],
  },
  xbox: {
    img: ["X_ranking1.jpg", "X_ranking2.jpg", "X_ranking3.jpg"],
  },
};
const rankingImgsKeys = ["nintendo", "ps", "xbox"];

// PointColors
const colors = ["rgb(230, 0, 18)", "rgb(3, 0, 152)", "rgb(15, 124, 15)"];
const classes = ["hoverNintendo", "hoverPs", "hoverXbox"];

// gnb MouseoverEvent
gnbA.forEach((a) => {
  a.addEventListener("mouseover", () => {
    a.classList.add(classes[0]);
  });
});

//gnb MouseoutEvent
gnbA.forEach((a) => {
  a.addEventListener("mouseout", () => {
    a.classList.remove(classes[0]);
  });
});

let colorStyle = [];
let backgroundStyle = [];

// Append all selected Elements
all.forEach((el) => {
  const fontColor = getComputedStyle(el);

  const bgColor = getComputedStyle(el);
  if (fontColor.color === colors[0]) {
    colorStyle.push(el);
  }

  if (bgColor.backgroundColor === colors[0]) {
    backgroundStyle.push(el);
  }
});

// ChangeModesEvent
modes.forEach((mode, index) => {
  mode.addEventListener("click", () => {
    console.log(index);
    // VideoEvent
    introVid.setAttribute("src", `./images/${vids[index]}`);
    introVid.load();
    intro.style.display = "block";
    intro.classList.remove("active");
    introVid.play();

    // Change Logos
    logo.setAttribute("src", `./images/${logos[index]}`);
    footerLogo.setAttribute("src", `./images/${logos[index]}`);

    // Change Images
    aboutImg.setAttribute("src", `./images/${aboutImgs[index]}`);
    rankingImg.forEach((img, i) => {
      const test = rankingImgsKeys[index]
      img.setAttribute("src", `./images/${rankingImgs[test].img[i]}`);
      console.log(rankingImgs[0]);
    });

    // Change Backgrounds
    mainBg.style.background = `linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent), url(./images/${mainBgs[index]}) center/cover no-repeat`;

    // Change the appended array Elements' Color
    colorStyle.forEach((c) => {
      c.style.color = colors[index];
    });
    backgroundStyle.forEach((c) => {
      c.style.backgroundColor = colors[index];
    });

    gnbA.forEach((a) => {
      a.addEventListener("mouseover", () => {
        classes.forEach((cl, i) => {
          if (i !== index) {
            a.classList.remove(cl);
          }
        });
        a.classList.add(classes[index]);
      });
      a.addEventListener("mouseout", () => {
        a.classList.remove(classes[index]);
      });
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
