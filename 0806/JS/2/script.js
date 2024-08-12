let i = 0;

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector("#result");
  console.log(result);

  result.innerText = `code : ${++i}, ${e.key}`

  if(e.key === "y"){
    alert("통과.");
  }
})