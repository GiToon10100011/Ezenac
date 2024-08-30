const coverWrapper = document.querySelector(".coverWrapper");
const contentWrapper = document.querySelector(".contentWrapper");
const header = document.querySelector("header");
const dimmed = document.querySelector(".dimmed");
const coverTitle = document.querySelector(".coverTitle");
const coverHeight = innerHeight;
coverWrapper.style.height = `${coverHeight}px`;
contentWrapper.style.marginTop = `${coverHeight}px`;

const percent = (scroll, height) => {
  return ((scroll / height) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const documentHeight = document.body.scrollHeight;
  const per = percent(scroll, documentHeight);
  const progress = document.querySelector(".bar");
  progress.style.width = `${per}%`;

  if (scroll >= coverHeight) header.classList.add("fixed");
  else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scroll/1.4}px`;
    coverWrapper.style.backgroundPosition = `center ${-scroll}px`;
    dimmed.style.background = `rgba(0, 0, 0, ${0.9 - scroll / 1000})`;
  }
});
