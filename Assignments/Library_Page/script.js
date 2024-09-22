//Fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true, // Enable auto-scrolling
  scrollHorizontally: true, // Enable horizontal scrolling
  slidesNavigation: true, // Show navigation dots for horizontal slides
  controlArrows: true, // Show control arrows for slides
  anchors: [
    "home",
  ],
});

function checkWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    document.querySelector(".modal iframe").setAttribute("width", 300);
    document.querySelector(".modal iframe").setAttribute("height", 200);
  } else {
    document.querySelector(".modal iframe").setAttribute("width", 1060);
    document.querySelector(".modal iframe").setAttribute("height", 615);
  }
}

// Check window size on load
checkWindowSize();

// Listen for window resize events
window.addEventListener("resize", checkWindowSize);

// console.log(fullpage_api);
const overlay = document.querySelector(".home-inner");
const welcomeText = document.querySelector(".welcome-text");
const opacityImg = document.querySelector(".opacity-image");
const ouroboros = document.querySelector(".logo-ouroboros");

const removalDelay = () => {
  const slideNav = document.querySelector(".fp-slidesNav");
  slideNav.style.opacity = 1;
  overlay.classList.add("off");
  opacityImg.classList.add("images-reveal");
};

const animationTrigger = (e) => {
  overlay.classList.add("active");
  welcomeText.classList.add("fade");
  opacityImg.classList.add("zoomOut");

  setTimeout(() => {
    e.target.style.display = "none";
  }, 3000);

  setTimeout(removalDelay, 3800);
  setTimeout(() => {
    ouroboros.style.animation = `none`;
    ouroboros.style.animation = `rotate 20s linear infinite both`;
  }, 5500);
};

//Trailer Event
const trailerModal = document.querySelector(".trailer-modal");
const trailerTrigger = document.querySelector(".opacity-image p");
const trailerOff = document.querySelector(".bg-filter");
const trailerOff2 = document.querySelector(".trailer-close");

let isModalOn = false;

trailerTrigger.addEventListener("mouseover", () => {
  if (!isModalOn) {
    ouroboros.style.animationPlayState = "paused";
  }
});
trailerTrigger.addEventListener("mouseout", () => {
  if (!isModalOn) {
    ouroboros.style.animationPlayState = "running";
  }
});

trailerTrigger.addEventListener("click", () => {
  isModalOn = true;
  trailerModal.classList.add("on");
  ouroboros.style.animationPlayState = "paused";
});

trailerOff.addEventListener("click", () => {
  isModalOn = false;
  trailerModal.classList.remove("on");
  ouroboros.style.animationPlayState = "running";
});
trailerOff2.addEventListener("click", () => {
  isModalOn = false;
  trailerModal.classList.remove("on");
  ouroboros.style.animationPlayState = "running";
});

const welcomeImage = document.querySelector(".welcome-text img");
welcomeImage.addEventListener("click", animationTrigger);

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    fullpage_api.moveSlideRight();
  }
  if (e.deltaY < 0) {
    fullpage_api.moveSlideLeft();
  }
});

///Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  let scrollY = window.scrollY;
  if (scrollY > 60) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//trigger
const trigger = document.querySelector(".trigger");

trigger.addEventListener("click", () => {
  const gnb = document.querySelector(".gnb");
  const menus = document.querySelectorAll(".menu a");
  trigger.classList.toggle("active");
  gnb.classList.toggle("active");
  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      trigger.classList.remove("active");
      gnb.classList.remove("active");
    });
  });
});

//Slick Slider : Project
$(".project-photo").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
});

//Slick Slider : History
$(".history-slider").slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "ease-out",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 600,
        autoplaySpeed: 4000,
      },
    },
  ],
});

$(".victory").slick({
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  lazyLoad: "ondemand",
  verticalSwiping: true,
  pauseOnHover: true,
});

const abilities = document.querySelectorAll(
  ".history-slider .item foreignObject video"
);
abilities.forEach((video) => {
  video.addEventListener("mouseover", function () {
    this.play();
  });
  video.addEventListener("mouseout", function () {
    this.pause();
  });
});

// Before slide changes
$(".history-slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $(".history-slider .item .video-container").css("transform", "scale(0.9)");

    $(".history-slider .item .video-container")
      .eq(nextSlide)
      .css("transform", "scale(0.9)");
  }
);

// After slide changes
$(".history-slider").on("afterChange", function (event, slick, currentSlide) {
  $(".history-slider .item .video-container").css("transform", "scale(1)");
  abilities.forEach((video) => (video.currentTime = 0));
});

const awards = document.querySelectorAll(".victory .slick-slide div");

awards.forEach((award) => {
  award.addEventListener("mouseover", () => {
    const victory = document.querySelector(".victory");
    victory.classList.add("hovering");
  });
  award.addEventListener("mouseout", () => {
    const victory = document.querySelector(".victory");
    victory.classList.remove("hovering");
  });
});

const characters = document.querySelectorAll(".character");
const characterBg = document.querySelector(".characters-inner");

characters.forEach((character, index, arr) => {
  character.addEventListener("mouseover", () => {
    arr.forEach((item, i) => {
      if (index !== i) {
        characters[i].style.flex = 0;
        characters[i].style.opacity = 0;
      }
      if (index === characters.length - 1) {
        characterBg.style.background = `url("./images/totkmodal/bg_page_ganondorf.webp") center/cover no-repeat`;
      }
    });
    setTimeout(() => {
      const photos = document.querySelector(".photos");
      const quotes = document.querySelector(".quotes");
      photos.classList.add("active");
      quotes.classList.add("active");
    }, 2700);
  });
  character.addEventListener("mouseout", () => {
    arr.forEach((item, i) => {
      characters[i].style.flex = "";
      characters[i].style.opacity = "";
      characterBg.style.background = ``;
    });
    setTimeout(() => {
      const photos = document.querySelector(".photos");
      const quotes = document.querySelector(".quotes");
      photos.classList.remove("active");
      quotes.classList.remove("active");
    }, 2600);
  });
});

const contactTitle = [
  ...document.querySelectorAll(".merch h1 svg path"),
].reverse();

contactTitle.forEach((letter, index) => {
  letter.style.animation = `wave-animation 1.4s ${
    index / 10
  }s ease-out both alternate infinite`;
});
