// 프로토타입 함수 Date를 받았으므로 today는 객체가 됨.
const today = new Date();
const year = today.getFullYear(); //년도
const month = today.getMonth()+1; //월
const date = today.getDate(); //일
const day = today.getDay(); //요일
console.log(month); // 월만 0부터 시작함. 따라서 값은 7 (+1을 붙이기 전 기준)
console.log(day); //미국은 일요일부터 한주가 시작되므로 일요일부터 오늘(목요일)의 거리를 계산(윈도우의 기본 캘린더 참조)하면 4. 값은 4이므로 day를 다룰때는 switch문으로 요일을 계산해주는것이 중요하다.

document.write(`<h1>오늘 날짜</h1>`)
document.write(`현재 월 : ${month}월`)
document.write(`<br>`)
document.write(`현재 일 : ${date}일`)

//밀리초 변환 
//1s => 1000ms
//1m => 60000ms
//1hr => 60000*60 = 3600000ms
//1d => 3600000*24 = 86,400,000ms

const lastDate = new Date(year, 11, 31);
const diffDate = lastDate - today;
console.log(diffDate); //12487177476ms
const result = Math.round(diffDate / (24*60*60*1000));

alert(`Until Crisis - D+${result}`);