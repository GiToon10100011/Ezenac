function showData(name, age){
  alert(`${name}님 ${age}세시네요`);
}

function getData(callback){
  const userName = prompt("이름을 입력해주세요.");
  const userAge = Number(prompt("나이를 입력해주세요"));
  callback(userName, userAge);
} 

getData(showData);
