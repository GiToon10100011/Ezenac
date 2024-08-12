const pic = document.querySelector(".pics");
const pics = pic.querySelectorAll("img");

pics.forEach((items) => {
  items.addEventListener("click", function () {
    pics.forEach((sibling) => {
      if (sibling !== pics) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");
    const desc = document.querySelector(".desc");
    const contents = desc.querySelectorAll(".content");

    contents.forEach((content) => {
      content.classList.add(".active");
    });

    const targetId = items.getAttribute("data-alt");
    const targetContent = document.getElementById(targetId);
    if (targetContent){
      targetContent.classList.add("active");
    } 
  });
});
