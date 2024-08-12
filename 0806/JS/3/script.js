const userId  = document.querySelector("#userId");


userId.addEventListener("focus", function() {
  this.style.backgroundColor = "crimson";
});

userId.addEventListener("blur", function() {
  this.style.backgroundColor = "white";
})