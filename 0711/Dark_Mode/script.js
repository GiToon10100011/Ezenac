const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    btn.innerText = "Light Mode";
  } else{
    btn.innerText = "Dark Mode";
  }
});
