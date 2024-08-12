const open = document.querySelector("#open");

const close = document.querySelector("#close");

const modal = document.querySelector(".modal");

open.addEventListener("click", () => {
  open.classList.add("active");
  modal.classList.add("active");
});

close.addEventListener("click", () => {
  open.classList.remove("active");
  modal.classList.remove("active");
});