const lists = document.querySelectorAll(".navi li");

const list = document.querySelector(".navi");
console.log(list);

const container = document.querySelector(".photo");

lists.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {

    //getAttribute()
    let changeImage = this.dataset.image;

    container.style.backgroundImage = `url("${changeImage}")`;
  });

  item.addEventListener("mouseleave", function () {
    container.style.backgroundImage = ``;
  });
});
