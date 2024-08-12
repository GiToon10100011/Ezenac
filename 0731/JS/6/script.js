document.open();
// for (let i = 1; i <= 10; i++) {
//   // 다중패러다임 언어이기에 단문은 다음과 같이 사용할 수 있다.
//   if (i === 6) break;
//   document.write(i, "<br/>");
// }

// document.write("=== The End ===");

for(let i = 0; i <= 10; i++){
  if(i % 2 === 0) continue;
  document.write(i, "<br/>");
};
