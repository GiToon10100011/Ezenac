const trigger = document.querySelector(".triggerBtn");

const menu = document.querySelector(".menu");


trigger.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("active");
})