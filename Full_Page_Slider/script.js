const labels = document.querySelectorAll(".btn span");
const container = document.querySelector(".items");

labels.forEach((items, index) => {
  items.addEventListener("click" , () => {
    items.classList.add("active");
    container.style.left = `-${100*index}%`;

    labels.forEach((label, i) => { 
      if(index !== i){
        label.classList.remove("active");
      };
    });
  });
});