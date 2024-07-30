const inputStr = prompt("숫자 3개를 입력해주세요(각 숫자의 끝마다 쉼표를 사용해서 구분해주세요)");

const numbersStr = inputStr.split(",");

const numbers = numbersStr.map((number) => {
  return Number(number);
})

if(numbers.some((number) => number >= 100)){
  alert("100이하의 숫자를 입력해주세요");
  window.location.reload();
} else{
  const numbersSorted = numbers.sort((a, b) => a - b);
  
  console.log(numbersSorted[0]); 
  
  const body = document.querySelector("body");
  body.innerHTML = `<div style = "font-size : 200px;">가장 작은 수는 : ${numbersSorted[0]}</div>`;
}



