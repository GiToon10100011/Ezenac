// Search Modal
const search = document.querySelector(".fa-magnifying-glass");
const modal = document.querySelector(".modal-search");
const items = document.querySelectorAll(".close, section");
search.addEventListener("click", () => {
  modal.classList.add("active");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

// Search Bar
const searchBar = document.querySelector(".search input[type='text']");
searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = 1;
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "";
});

//Accordion Event
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".accordion .title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});
