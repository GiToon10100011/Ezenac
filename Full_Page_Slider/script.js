const labels = document.querySelectorAll(".btn span");
const container = document.querySelector(".items");
const titles = container.querySelectorAll("h1");
const btns = container.querySelectorAll("button");

titles[0].classList.add("content");
btns[0].classList.add("content");

labels.forEach((items, index) => {
  items.addEventListener("click" , () => {
    items.classList.add("active");
    
    titles.forEach((title, i) => {
      title.classList.add("content");
      if(index !== i){
        title.classList.remove("content");
      }
    });

    btns.forEach((btn, i) => {
      btn.classList.add("content");
      if(index !== i){
        btn.classList.remove("content");
      }
    });
    
    container.style.left = `-${100*index}%`;

    labels.forEach((label, i) => { 
      if(index !== i){
        label.classList.remove("active");
      };
    });
  });
});