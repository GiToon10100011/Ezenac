// Header

const header = document.querySelector("header");

const Top = document.querySelector(".Top");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY
  if(scroll > 50){
    header.classList.add("active");
    Top.classList.add("active");
  } else{
    header.classList.remove("active");
    Top.classList.remove("active");
  }
})

// SlickSlider
$(".myslider").slick({
  dots : true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll : 3,
  autoplay : true,
  autoplaySpeed : 3000,
  responsive : [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite : true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite : true
      }
    }
  ]
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
  })
})
