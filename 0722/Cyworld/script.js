const modes = document.querySelectorAll(".navigation div");
const frame = document.querySelector("#contentFrame");

const frames = ["./home.html", "./game.html", "./jukebox.html"];

modes.forEach((mode, index) => {
  mode.addEventListener("click", () => {
    frame.setAttribute("src", frames[index])
    modes.forEach((item, i) => {
      if(index === i){
        item.classList.add("active");
      } else{
        item.classList.remove("active");
      }
    })
  })
})