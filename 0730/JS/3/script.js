// 사용자의 몸무게가 적정체중인가?
//적정체중은 ((본인의 키)-100)*0.9 오차범위가 5
const name = prompt("이름을 입력해주세요.");
const height = parseFloat(prompt("키를 입력해주세요")).toFixed(1);
const weight = parseFloat(prompt("몸무게를 입력해주세요")).toFixed(1);

const normalWeight = (height-100)*0.9;

let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

result = result ? "적정체중입니다." : "비정상";
alert(`${name}님은 ${result}`);


