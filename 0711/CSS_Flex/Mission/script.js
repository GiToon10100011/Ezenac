const toggle = document.querySelector("#toggle");
const toggleX = document.querySelector("#toggleX");
const m_gnb = document.querySelector(".mobile_container");

toggle.addEventListener("click", () => {
  m_gnb.classList.add("active");
  toggleX.classList.add("active");
  toggle.classList.add("active");
  
});

toggleX.addEventListener("click", () => {
  m_gnb.classList.remove("active");
  toggle.classList.remove("active");
  toggleX.classList.remove("active");
})