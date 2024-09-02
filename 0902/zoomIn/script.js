const imageAll = document.querySelectorAll(".parallaxImg");
const totalNum = imageAll.length;
window.addEventListener("scroll", () => {
  let scrollValue = scrollY;
  if (scrollY < document.body.scrollHeight / 1.5) {
    imageAll.forEach((img, index) => {
      img.style.transform = `translate3d(0, 0, ${
        scrollValue / (3 * (totalNum - index))
      }px)`;
    });
  }
});
