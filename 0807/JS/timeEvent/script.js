//JS 현시점의 날짜 정보 데이터를 생성해주는 함수 
//년, 월, 일, 시, 분, 초
const today = new Date();
// 현재 시간의 시만 가져옴
const hrs = today.getHours();

const container = document.querySelector(".container");
const newImg = document.createElement("img");

container.appendChild(newImg);

newImg.src = (hrs < 12) ? " ./images/morning.jpg" : "./images/afternoon.jpg"