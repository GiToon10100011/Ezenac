const phoneNum = document.querySelector("input[type = 'text']");

const warningMsg = document.querySelector("#warningMsg")

phoneNum.addEventListener("keyup", function(){
  const userNum = this.value;
  const trimNumber = userNum.replace(/-/g, "");
  const regexp = /^0\d{8,9}[0-9]$/.test(trimNumber);
  // const regexp = /^0[0-9]{9,10}$/.test(trimNumber);

  if(regexp === false) warningMsg.innerText = "전화번호의 형식에 맞춰서 입력해주세요!";
  else warningMsg.innerText = "";
})