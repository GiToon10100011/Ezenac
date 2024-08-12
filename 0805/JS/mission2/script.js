
const form = document.querySelector("form");

const btn = document.querySelector("input[type = 'submit']");

const inputBox = document.querySelector(".inputBox");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num01 = Number(first.value);
  const num02 = Number(second.value);

  const max = num01 > num02 ? num1 : num02;

  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num01 % i === 0 && num02 % i === 0) {
      gcd = i;
    }
  }

  inputBox.innerText = gcd;

});

const first = document.querySelector("#first");
const second = document.querySelector("#second");

console.log(gcd);
