const labels = document.querySelectorAll(".btn span");
const container = document.querySelector(".items");
const titles = container.querySelectorAll("h1");
const btns = container.querySelectorAll("button");

labels[0].classList.add("active");
titles[0].classList.add("content");
btns[0].classList.add("content");

let tabsInterval;
let initialIndex = 0;

labels.forEach((items, index) => {
  items.addEventListener("click", () => {
    items.classList.add("active");

    titles.forEach((title, i) => {
      title.classList.add("content");
      if (index !== i) {
        title.classList.remove("content");
      }
    });

    btns.forEach((btn, i) => {
      btn.classList.add("content");
      if (index !== i) {
        btn.classList.remove("content");
      }
    });

    container.style.left = `-${100 * index}%`;

    labels.forEach((label, i) => {
      if (index !== i) {
        label.classList.remove("active");
      }
    });

    clearInterval(tabsInterval);
  });
});

const updateTabs = (initialIndex) => {
  container.style.left = `-${100 * initialIndex}%`;
  labels.forEach((label, i) => {
    label.classList.add("active");
    if (initialIndex !== i) {
      label.classList.remove("active");
    }
  });

  btns.forEach((btn, i) => {
    btn.classList.add("content");
    if (initialIndex !== i) {
      btn.classList.remove("content");
    }
  });

  titles.forEach((title, i) => {
    title.classList.add("content");
    if (initialIndex !== i) {
      title.classList.remove("content");
    }
  });
};

tabsInterval = setInterval(() => {
  updateTabs(initialIndex);
  initialIndex++;

  if (initialIndex > 4) {
    initialIndex = 0;
  }
}, 3500);
