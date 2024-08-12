const num = Number(prompt("가산할 수를 작성해주세요."));
//읽을게 없는데 defer을 사용해서 내가 수동으로 문서를 열지 않는 이상 write가 적용되지 않음. 
document.open();
const calc = (n) => {
  let sum = 0;
  for(let i = 0; i <= n; i++){
    sum += i;
  }
  console.log(sum);
  document.write(sum);
}

calc(num);