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
  },
};

// Multiple Texts

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

    // Change Images & Text
    const keys = multipleImgsTextKeys[index];

    aboutImg.setAttribute("src", `./images/${aboutImgs[index]}`);
    rankingImg.forEach((img, i) => {
      img.setAttribute("src", `./images/${multipleImgsText[keys].img[i]}`);
    });
    productImg.forEach((img, i) => {
      img.setAttribute(
        "src",
        `./images/${multipleImgsText[keys].productImgs[i]}`
      );
    });

    rankingTxt.forEach((text, i) => {
      text.innerText = multipleImgsText[keys].rankingText[i];
    });

    // Function to update slider images
    const updateSliderImages = (consoleType) => {
      const newImages = multipleImgsText[consoleType].productImgs;

      // Remove all slides
      $(".myslider").slick("slickRemove", null, null, true);

      // Add new slides
      newImages.forEach((img) => {
        $(".myslider").slick(
          "slickAdd",
          `<div class="console"><img src="./images/${img}" alt="Product Image"></div>`
        );
      });

      // Apply styles to the newly added slides
      $(".myslider .console img").css({
        border: "2px solid red",
        padding: "10px",
      });
    };

    updateSliderImages(keys);

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
