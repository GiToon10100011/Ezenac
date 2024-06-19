// // 변수 선언 const/var/let
// const hello = 'hello world';
// // 호출, 사용
// console.log(hello);

//scroll event
// e는 일종의 참조 변수 -> 이를 통해 이벤트가 어떤식으로 돌아가는지 체크 후 코드 작성

// scroll이 내려가는 순간 header, nav, gnb를 찾아오겠다
window.addEventListener("scroll", () => {
  // document = html, querySelector은 태그 가져오는 놈
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const logo = document.querySelector("#logo");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    // classList => 클래스가 있는지 확인해라
    header.classList.add("active");
    nav.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    logo.classList.add("active");
    // 반복문, classList.add는 classList에 해당 속성이 없다면 부여하라는 뜻
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    logo.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// Toggle btn Event
// 항상 dom에서 먼저 어느 대상에 기능을 먹일지 확인하고 코드 작성하기

// 전역 변수로 선언
const toggleBtn = document.querySelector(".trigger");
console.log(toggleBtn);
toggleBtn.addEventListener("click", function () {
  // this는 화살표 함수랑 사용할 수 없음.
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});
