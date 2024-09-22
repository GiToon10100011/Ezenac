function checkWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    $(".trailers").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      pauseOnFocus: true,
    });
    $(window).on("load", function () {
      $(".trailers").slick("setPosition");
    });
  } else {
    $(".trailers").slick("unslick");
  }
}

// Check window size on load
setTimeout(function() {
  checkWindowSize();
}, 300);

// Listen for window resize events
window.addEventListener("resize", checkWindowSize);

const modalLogo = [...document.querySelectorAll("#modal-logo path")].reverse();

modalLogo.forEach((letter, index) => {
  letter.style.animation = `letters 0.4s ${index / 12}s ease-out both`;
});

window.addEventListener("scroll", () => {
  const mainSection = document.querySelector(".project-main1");
  if (scrollY > 0) {
    mainSection.style.height = `100px`;
  } else {
    mainSection.style.height = "100vh";
  }
});

const lumos = document.querySelector(".lumos");
const mainContent = document.querySelector(".main-content");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 1;
const lumosSize = 300;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  lumos.style.transform = `translate(${targetX - lumosSize / 2}px, ${
    targetY - lumosSize / 1.4
  }px)`;

  window.requestAnimationFrame(loop);
};

loop();

const modalLink = document.querySelector(".modal-link");

const linkSrcs = [
  "./images/totkmodal/link.avif",
  "./images/totkmodal/link-highlight.avif",
];

modalLink.addEventListener("mouseover", function () {
  this.classList.add("fade-out");
  setTimeout(() => {
    this.setAttribute("src", linkSrcs[1]);
    this.classList.remove("fade-out");
  }, 300);
});
modalLink.addEventListener("mouseout", function () {
  this.classList.add("fade-out");
  setTimeout(() => {
    this.setAttribute("src", linkSrcs[0]);
    this.classList.remove("fade-out");
  }, 300);
});

const infoSections = document.querySelectorAll(".modal-info");

const options = {
  root: null, // observes with respect to the viewport
  threshold: 0.7, // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentSection = entry.target;
      currentSection.classList.add("active");
    }
  });
}, options);

// Start observing the section
infoSections.forEach((section) => {
  observer.observe(section);
});
