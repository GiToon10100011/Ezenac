// 사용자에게 화씨 온도를 받아서 콘솔창에 섭씨로 변경]
// (°F - 32) × 5/9

const temp = parseFloat(prompt("온도를 입력해주세요"))
const cel = ((temp-32) * 5/9.).toFixed(2);

if(isNaN(temp)){
  alert("숫자를 입력해주세요.");
  window.location.reload();
}

console.log(cel);

const body = document.querySelector("body");
  body.innerHTML = `<div style = "font-size : 200px;">화씨온도는 : ${temp}도 <br/>섭씨온도는 : ${cel}도</div>`;