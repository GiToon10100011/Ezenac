const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#userNumber").value;
  try {
    if(input === "" || isNaN(input)) throw "숫자를 입력하세요!"

    input = Number(input);

    if(input <= 10) document.querySelector("#result").innerText = input;

    if(input > 10) throw "10보다 작은 수를 입력하세요";
  } catch(err) {
    alert(err);
  } finally {
    input = "";
  }
});
