const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  //nums[i] + 1 => 어떤 숫자인지를 체크
  if ((i + 1) % 3 === 0) continue;
  const angle = (i + 1) * (Math.PI / 6); // 원은 360, 360/12 = 30, 30은 radian으로 따지면 6분의 파이
  const x = 132 + 132 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2; //142 = 보더가 8px, 총 사이즈는 300, 300/2 - 8을 해서 142가 나옴, 하지만 시계에 너무 딱 맞아서 살짝 줄여서 132

  const y = 132 - 132 * Math.abs(Math.cos(angle));

  if (i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
    nums[i].style.top = `${y}px`;
  else nums[i].style.bottom = `${y}px`;

  // nums[0].style.left = `${x}px`
  // nums[0].style.top = `${y}px`
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");
const digitalClock = document.querySelector(".digital-clock");

const clock = () => {
  const currentTime = new Date();
  let second = currentTime.getSeconds();
  let secondAngle = second * 6; //1분은 60초, 원은 360, 360//60 -> 6
  let secondAngleValue = `rotate(${secondAngle}deg)`;
  console.log(currentTime);
  secondPointer.style.transform = secondAngleValue;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;
  minutePointer.style.transform = minuteAngleValue;

  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
    //각을 2번 쪼갬..
  let hourAngleValue = `rotate(${hourAngle}deg)`;
  hourPointer.style.transform = hourAngleValue;

  if(hour === 0) hour = 12;
  else if(hour > 12){
    hour -= 12;
    period = "오후";
  }

  second = second < 10 ? `0${second}` : second;
  minute = minute < 10 ? `0${minute}` : minute;
  hour = hour < 10 ? `${hour}` : hour;

  digitalClock.innerText = `염동훈님의 나이 : ${hour}${minute}${second}살`;
};

setInterval(clock, 1000);
