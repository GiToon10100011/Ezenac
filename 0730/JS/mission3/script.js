const num = Number(prompt("숫자를 입력해주세요"));

if(isNaN(num)){
  alert("숫자만 입력하세요");
};

result = num % 2 === 0 ? "짝수입니다" : "홀수입니다";

alert(result);