const h1 = document.querySelector("h1");
window.addEventListener("scroll", function (e) {
  const progress = document.querySelector(".bar");
  let scroll = this.scrollY;
  h1.innerText = `${Math.floor((scroll / (document.body.scrollHeight - this.innerHeight)) * 100)}%`;
  progress.style.width = `${Math.floor((scroll / (document.body.scrollHeight - this.innerHeight)) * 100)}%`
});
