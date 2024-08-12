const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

article.forEach((items) => {
  items.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  items.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "";
  });
});