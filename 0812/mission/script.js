//내 해답(실패)
// const num1 = document.querySelector("#number01");
// const num2 = document.querySelector("#number02");

// const form =document.querySelector("form");

// let winners = [];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const result = document.querySelector("#result");
//   for(let i = 0; i < num2.value; i++){
//     winners.push(Math.ceil(Math.random() * num1.value)) ;
//   }
//   result.innerText = `당첨자 : ${winners}`;
//   winners = [];
// });

//정답지
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = document.querySelector("#number01");
  const num2 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  let winner = "";
  let pickedNums = [];
  for(let i = 0; i < num2.value; i++){  
    let picked = "";


    //Set을 사용하지 않고도 중복값을 확인함. 중복되면 다시 while을 통해 반복함
    do{
      picked = Math.ceil(Math.random() * num1.value);
    } while(pickedNums.includes(picked));

    pickedNums.push(picked);
    winner += `${picked}번, `;
  }
  result.innerText = `당첨자 : ${winner}`;
})