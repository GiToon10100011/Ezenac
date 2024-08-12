const content = "Hi! 😁 I'm Toon, \n Front-End Developer. \n Greetings XD";

const text = document.querySelector(".text");
let i = 0;

// const typing = () => {
//   let txt = content[i++];
//   text.innerHTML += txt === "\n" ? "<br>" : txt;
//   if (i > content.length) {
//     text.textContent = "";
//     i = 0;
//   }
// };

// // 1초에 한번씩 typing이라는 함수가 실행되도록 함.
// setInterval(typing, 100)

const typing = () => {
  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br>" : txt;
    setTimeout(typing, 100);
  } else {
    cursor.style.animation = "none";
    cursor.style.display = "none";
  }
};

// 1초에 한번씩 typing이라는 함수가 실행되도록 함.
typing();
