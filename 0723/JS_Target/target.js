const button = document.querySelector("button");

const buttonAction = (e) => {
  console.log(e.currentTarget);
  console.log(e);
}
button.addEventListener("click", buttonAction);
