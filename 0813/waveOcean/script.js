const trigger = document.querySelector(".trigger");
const modal = document.querySelector(".modal-gnb");

trigger.addEventListener("click", function(){
  this.classList.toggle("active");
  modal.classList.toggle("active");
})