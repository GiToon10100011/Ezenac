//Fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true, // Enable auto-scrolling
  scrollHorizontally: true, // Enable horizontal scrolling
  slidesNavigation: true, // Show navigation dots for horizontal slides
  controlArrows: true, // Show control arrows for slides
});

//test
console.log(fullpage_api);

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
