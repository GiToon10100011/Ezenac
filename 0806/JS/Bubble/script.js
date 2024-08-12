//콜백함수로 들어와있지 않기 때문에 addEventListener에서 제어할 수 없고 parsing단계에서 바로 인식 돼서 클릭을 하지 않고도 p가 출력됨. => 이를 실행 컨텍스트라고 부른다.

// document.querySelector("p").addEventListener("click", console.log("p"));

document.querySelector("p").addEventListener("click", () => console.log("p"));
document
  .querySelector("section")
  .addEventListener("click", () => console.log("section"));
document
  .querySelector("div")
  .addEventListener("click", () => console.log("div"));
document.body.addEventListener("click", () => console.log("body"));

//웹 브라우저가 실행되면, html & js를 parsing(문서를 읽으면서, 실행될 수 있는 요소는 실행됨.)한다.

// function testFnc() {
//   alert("시작");
// }

// testFnc();

const elements = document.querySelectorAll("*");

elements.forEach((el) => {
  el.addEventListener(
    "click",
    (e) => {
      console.log(e.target.tagName, e.currentTarget.tagName);
    },
    //캡처링 불리언을 세번째 인자값으로 받는다
    true
  );
});
