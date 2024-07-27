// Trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbA = gnb.querySelectorAll("a");

trigger.addEventListener("click", () => {
  trigger.classList.toggle("active");
  trigger.classList.toggle("color");
  trigger.classList.toggle("move");
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

// Multiple Images & Text
const rankingImg = document.querySelectorAll(".up-image img");
const rankingTxt = document.querySelectorAll(".down-desc h3");

const productImg = document.querySelectorAll(".myslider div .console img");

const multipleImgsTextKeys = ["nintendo", "ps", "xbox"];
const multipleImgsText = {
  nintendo: {
    img: ["N_ranking1.avif", "N_ranking2.avif", "N_ranking3.avif"],
    rankingText: [
      "The Legend of Zelda, TotK",
      "Super Mario Odyssey",
      "Splatoon 3",
    ],
    productImgs: [
      "N_console1.avif",
      "N_console2.avif",
      "N_console3.avif",
      "N_console4.avif",
      "N_console5.avif",
      "N_console6.avif",
      "N_console7.avif",
      "N_console8.avif",
    ],
    characterImgs: [
      "N_character1.avif",
      "N_character2.avif",
      "N_character3.avif",
      "N_character4.avif",
      "N_character5.avif",
      "N_character6.avif",
      "N_character7.avif",
      "N_character8.avif",
    ],
  },
  ps: {
    img: ["P_ranking1.jpg", "P_ranking2.jpg", "P_ranking3.jpg"],
    rankingText: ["Horizon Zero Dawn", "Marvel Spiderman 2", "Uncharted 4"],
    productImgs: [
      "P_console1.webp",
      "P_console2.webp",
      "P_console3.webp",
      "P_console4.webp",
      "P_console5.webp",
      "P_console6.webp",
      "P_console7.webp",
      "P_console8.webp",
    ],
    characterImgs: [
      "P_character1.png",
      "P_character2.png",
      "P_character3.png",
      "P_character4.png",
      "P_character5.png",
      "P_character6.png",
      "P_character7.png",
      "P_character8.png",
    ],
  },
  xbox: {
    img: ["X_ranking1.jpg", "X_ranking2.jpg", "X_ranking3.jpg"],
    rankingText: ["Halo Infiinite", "Forza Horizon 5", "Minecraft"],
    productImgs: [
      "X_console1.jpg",
      "X_console2.jpg",
      "X_console3.jpg",
      "X_console4.jpg",
      "X_console5.jpg",
      "X_console6.jpg",
      "X_console7.jpg",
      "X_console8.jpg",
    ],
    characterImgs: [
      "X_character1.png",
      "X_character2.png",
      "X_character3.png",
      "X_character4.png",
      "X_character5.png",
      "X_character6.png",
      "X_character7.png",
      "X_character8.png",
    ],
  },
};

const callActionbg = document.querySelector(".callaction");
const callActionBgs = [
  "callaction01.jpg",
  "callaction02.jpg",
  "callaction03.jpg",
];

const characterImg = document.querySelectorAll(".item .img_container img");

// Multiple Texts

// PointColors
const colors = ["rgb(230, 0, 18)", "rgb(3, 0, 152)", "rgb(15, 124, 15)"];
const classes = ["hoverNintendo", "hoverPs", "hoverXbox"];
const productTitles = document.querySelectorAll(".product_title");

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
    introVid.setAttribute("src", `./images/${vids[index]}`);
    introVid.load();
    intro.style.display = "block";
    intro.classList.remove("active");
    introVid.play();

    // Change Logos
    logo.setAttribute("src", `./images/${logos[index]}`);
    footerLogo.setAttribute("src", `./images/${logos[index]}`);

    // Change Images & Text
    const keys = multipleImgsTextKeys[index];

    aboutImg.setAttribute("src", `./images/${aboutImgs[index]}`);
    rankingImg.forEach((img, i) => {
      img.setAttribute("src", `./images/${multipleImgsText[keys].img[i]}`);
    });

    console.log(multipleImgsText[keys].productImgs);
    for (let i = 0; i < multipleImgsText[keys].productImgs.length; i++) {
      console.log($(`.myslider div .console img[${i}]`));
      $(`.myslider div .console img[${i}]`).attr(
        "src",
        `./images/${multipleImgsText[keys].productImgs[i]}`
      );
    }

    // let consoleImgsIndex = [];

    // $(".console-img").each(function(i) {
    //   if(i < 8){
    //     consoleImgsIndex.push(i);
    //   }

    // $(this).attr("src", `./images/${multipleImgsText[keys].productImgs[i]}`);
    // console.log(this);
    // console.log(index);
    // console.log(i);

    // });

    rankingTxt.forEach((text, i) => {
      text.innerText = multipleImgsText[keys].rankingText[i];
    });

    characterImg.forEach((img, i) => {
      img.setAttribute("src" , `./images/${multipleImgsText[keys].characterImgs[i]}`)
    })

    // Change Backgrounds
    mainBg.style.background = `linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent), url(./images/${mainBgs[index]}) center/cover no-repeat`;

    callActionbg.style.background = `url(./images/${callActionBgs[index]}) center/cover no-repeat`;
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
    trigger.classList.add("color");
    trigger.classList.add("move");
  } else {
    header.classList.remove("active");
    Top.classList.remove("active");
    trigger.classList.remove("color");
    trigger.classList.remove("move");
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
