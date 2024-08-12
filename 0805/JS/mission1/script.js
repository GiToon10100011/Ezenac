const btn = document.querySelector("input[type = 'button']");
console.log(btn);

const details = document.querySelector(".details");

btn.addEventListener("click", () => {
  details.classList.toggle("active");
})