//mouseover & mouseout
let o = 0;

const overoutOut = document.querySelector("div.out.overout");
overoutOut.addEventListener("mouseover", function(){
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText  = "mouseover";
  pItems[3].innerText = ++o;
})

const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function(){
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover"
  pItems[1].innerText = ++o;
})

//mouseenter & mouseleave
let e = 0;

const enterLeaveOut = document.querySelector("div.out.enterleave");
enterLeaveOut.addEventListener("mouseenter", function(){
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText  = "mouseenter";
  pItems[3].innerText = ++e;
})

const enterLeaveIn = document.querySelector("div.in.enterleave");
enterLeaveIn.addEventListener("mouseenter", function(){
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
})