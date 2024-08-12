window.onload = function () {
  let randomNum = Math.ceil(
    Math.random() * 5
  );
  document.body.style.backgroundImage = `url("./images/bg-${randomNum}.jpg")`;
};
