document.open();

for(let i = 2; i <= 9; i++){
  document.write(`<br/>&nbsp;&nbsp;&nbsp;&nbsp;${i}단`, "<br/><br/>");
  for(let j = 1; j <= 9; j++){
    document.write(`${i} * ${j} = ${i*j}`, "<br/>");
  };
};