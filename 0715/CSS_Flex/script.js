const trigger = document.querySelector(".trigger");
const lnb = document.querySelector(".gnb > ul");
const sns = document.querySelector(".sns");

trigger.addEventListener("click" , () => {
  trigger.classList.toggle("active");
  lnb.classList.toggle("active");
  sns.classList.toggle("active");
})