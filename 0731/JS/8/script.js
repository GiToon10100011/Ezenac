document.open();
// document.write(`<table border = 1>`);
let num = 1;
let t = `<table border = 1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let j = 1; j <= 5; j++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}

t += `</table>`;
document.write(t);
