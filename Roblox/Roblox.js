/* 1. 웹 브라우저에게 클릭할 이벤트 대상을 알려준다.
-> querySelector()
-> addEventListener()

2. 클릭을 했을 때, css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다.
-> classList
-> add() || remove()
-> button => 기본속성 제거 preventDefault()

2-1. 가상클래스 = filledA & filledB */

// const femaleBtn = document.querySelector("#femalebtn");
// id로 가져오는게 메모리효율성이 좋음 (엄청 큰 프로젝트 규모 기준)
const femaleBtn = document.getElementById("femaleBtn");
const maleBtn = document.getElementById("maleBtn");

femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
