// window.addEventListener("load", () => alert("즐거운 화요일"));

const overout = document.querySelectorAll(".overout");

let i = 0;

overout.forEach((item, index) => {
  if(index === 0){
    item.addEventListener("mouseover", function(){
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("p:last-of-type").innerText = `염동훈님의 나이는 : ${++i}세`;
    });
    item.addEventListener("mouseout", function() {
      this.querySelector("p:first-of-type").innerText = "mouseout"

    })
  }
})

