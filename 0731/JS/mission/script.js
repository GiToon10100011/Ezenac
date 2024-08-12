const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const button = document.querySelector("button");
console.log(price, discount, button);

button.addEventListener("click", () => {
  const priceValue = price.value;
  const discountValue = discount.value / 100;
  const result = priceValue - (priceValue * discountValue);
  alert(`${result}원`);
});
