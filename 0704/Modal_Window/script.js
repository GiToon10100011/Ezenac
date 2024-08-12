const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const modal = document.querySelector("#Modal_container");
  modal.classList.add("active");
  btn.style.display = "none";
});

const close = document.querySelector("#close");
close.addEventListener("click", () => {
  const modal = document.querySelector("#Modal_container");
  modal.classList.remove("active");
  btn.style.display = "flex";
});

const altClose = document.querySelector("#Modal_container");
close.addEventListener("click", () => {
  const modal = document.querySelector("#Modal_container");
  modal.classList.remove("active");
  btn.style.display = "flex";
});
