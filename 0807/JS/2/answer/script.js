const trigger = document.querySelector("button");

const menu = document.querySelector("#nav");

console.log(trigger, menu);

trigger.addEventListener("click", () => {
  menu.classList.toggle("active");
  trigger.classList.toggle("active");
});
