//querySelector은 모든 node를 다 뒤짐
//getElementById는 아이디를 지니고 있는 노드만 뒤짐 => 메모리효율성이 좋음.
//단, document로 반드시 지정해야 가져올 수 있다. 
const main = window.document.querySelector("main");
const profile = document.getElementById("profile");
const h1 = document.getElementsByTagName("h1");
const desc = main.querySelector("#desc");
const desc2 = main.querySelector("#desc").textContent;
const desc3 = main.querySelector("#desc").innerHTML;
const desc4 = main.querySelector("#desc").innerText;
const user = desc.querySelectorAll(".user");
const iu = desc.querySelectorAll(".user")[0];
const img = document.getElementsByClassName("image");
console.log(h1,img, iu, desc2, desc4);

//유사배열은 배열과 다른 속성을 지니고 있다.

user.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("click");
  });
});

//이때의 title은 값을 담는 변수
const title = document.querySelector("#title");

//이제 title은 노드를 담고 있으므로 객체가 됨.
title.addEventListener("click", function() {
  console.log(this);
  this.innerText = "나의 프로필";
});

const pfImg = document.querySelector("#profile img");
// 노드는 객체이므로 이렇게도 사용가능
console.log(pfImg.src);

pfImg.addEventListener("click", function() {
  this.src = "./pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
console.log(firstP);

firstP.addEventListener("click", function(){
  this.innerHTML = "이름 : <b>태연</b>"
  //css와의 충돌을 방지하기 위해 속성을 구체화하는것이 좋다.
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
})

const secondP = document.querySelector("#desc > p:nth-child(2)");
secondP.addEventListener("click", function(){
  this.classList.toggle("active");
  // !this.classList.contains("active") ? this.classList.add("active") : this.classList.remove("active");
})