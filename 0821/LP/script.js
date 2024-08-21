const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;

lists.forEach((list, index) => {
  const pic = list.querySelector(".pic");
  console.log(pic);
  list.style.transform = `rotate(${45 * index}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/ydhprofile.jpg")`;
});
