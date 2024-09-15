//Fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true, // Enable auto-scrolling
  scrollHorizontally: true, // Enable horizontal scrolling
  slidesNavigation: true, // Show navigation dots for horizontal slides
  controlArrows: true, // Show control arrows for slides
  responsiveWidth: 768,
});

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

// scrollTo
$(".menu a").click(function () {
  $.scrollTo(this.hash || 0, 600);
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
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
