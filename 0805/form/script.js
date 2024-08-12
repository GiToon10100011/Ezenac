// const button = document.querySelector("input[type = 'submit']");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click");
  // const orderName = document.querySelector("#orderName");
  // form태그는 다음과 같이 name으로 상호작용이 가능하다.
  const orderName = document.order.orderName;
  console.log(orderName.value);
});

console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function () {
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다.`);
});

const radioBtn = document.order.userAge;
console.log(radioBtn);



const radioBox = document.querySelectorAll("input[name = 'userAge']");

radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다!`);
    }
  });
});

const checkBox = document.querySelectorAll("input[name = 'userSub']");

checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    if(target.checked){
      alert(`${target.value}에 대한 알림신청이 완료되었습니다.`)
    }
  })
})
