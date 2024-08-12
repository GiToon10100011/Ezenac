document.write(`<h1>컴퓨터 가위.바위.보 맞추기 게임!🤞</h1>`);

const game = prompt("가위.바위.보 중 선택하세요", "가위");

let gameNum = "";

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 입력하셨어요!");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);
document.write(
  `<img style = "width : 200px" src="./game/math_img_${com}.png">`
);

if (gameNum === com) {
  document.write(`무사히 노인을 퇴치했습니다!`);
} else {
  document.write(`노인의 폭풍 잔소리에 당하셨습니다..`);
}
