const stars = document.querySelectorAll(".fa-star");

const ratingImg = document.querySelector("img");

const imgs = [
  "star-lv1.png",
  "star-lv2.png",
  "star-lv3.png",
  "star-lv4.png",
  "star-lv5.png",
];

const print = document.querySelector(".print");

const quotes = [
  "별로에요",
  "아쉬워요",
  "나쁘지 않아요",
  "괜찮아요",
  "맘에들어요",
];

stars.forEach((star, index, arr) => {
  star.addEventListener("click", () => {
    arr.forEach((el, i) => {
      el.classList.remove("active");
      if (i <= index) {
        el.classList.add("active");
        // ratingImg.setAttribute("src", `./img/${imgs[index]}`);
      }
      // if(i <= index){
      //   el.classList.add("active");
      // } else{
      //   el.classList.remove("active")
      // }
    });

    let message = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로에요";
        imageURL = "../img/star-lv1.png"
        break;
      case 1:
        message = "보통이에요";
        imageURL = "../img/star-lv2.png"
        break;
      case 2:
        message = "맘에들어요";
        imageURL = "../img/star-lv3.png"
        break;
      case 3:
        message = "아주좋아요";
        imageURL = "../img/star-lv4.png"
        break;
      case 4:
        message = "최고에요";
        imageURL = "../img/star-lv5.png"
        break;
      
    }

    print.innerHTML = `<img src = "${imageURL}"/> ${message}`;
  });
});
