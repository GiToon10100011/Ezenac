const lists = document.querySelectorAll(".container ul li a");

const list = document.querySelector(".container ul");
console.log(list);

const container = document.querySelector(".container")

const imgs = ["portrait-01.jpg", "portrait-02.jpg", "portrait-03.jpg", "portrait-04.jpg"]

lists.forEach((item, index) => {
  item.addEventListener("mouseenter", (e) => {
    container.style.background = `url(./img/${imgs[index]}) center/cover no-repeat`;
  })
})

list.addEventListener("mouseleave", () => {
  container.style.background = `url(./img/portrait-initial.jpg) center/cover no-repeat`;
})