document.open();
for(let i = 1; i <= 3; i++){
  for(let k = 1; k <= 2; k++){
    document.write(`${i}행 ${k}열 `);
  }
  document.write("<br>")
}

for(let a = 2; a <= 9; a++){
  document.write(`<h2>[구구단 ${a}단]</h2>`)
  for(let b = 1; b <= 9; b++){
    document.write(`${a} x ${b} = ${a*b}<br>`)
  }
}