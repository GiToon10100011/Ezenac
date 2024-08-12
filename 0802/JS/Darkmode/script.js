const button = document.querySelector("button");
button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.contains("dark") ? button.innerText = "라이트모드로 바꾸기" : button.innerText = "다크모드로 바꾸기";
})