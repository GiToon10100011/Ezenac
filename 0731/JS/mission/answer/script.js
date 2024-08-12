//form 요소 내에 입력된 값은 절대 전역요소로 찾아올 수 없음. 이벤트가 발생된 이후에만 가져올 수 있음

const btn = document.querySelector(".btn");


const calc = () => {
  const price = document.querySelector("#price");
  const rate = document.querySelector("#rate");
  const priceValue = price.value;
  const rateValue = rate.value / 100;
  const result = priceValue - priceValue * rateValue;

  document.querySelector(".bottomInfo p").innerText = `상품의 원래 가격은 ${priceValue}원이고, 할인률은 ${rateValue*100}% 입니다. ${priceValue*rateValue}원을 절약한 ${result}원에 구매할 수 있습니다.`
};

btn.addEventListener("click", calc);
