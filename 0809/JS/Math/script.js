//Math 수학객체 => 함수
let num = 2.6234
let maxNum = Math.max(10, 15, 8, 30)
let minNum = Math.min(10, 5, 18, 30)
let roundNum = Math.round(num); //반올림
let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num); //그냥 무조건 올림
let rndNum = Math.trunc(Math.random() * 45);
let piNum = Math.PI //원주율(원의 둘레와 지름이 비례하는 정도의 값)


document.write(maxNum , "<br/>" , minNum, "<br>", roundNum, "<br>", floorNum, "<br>", ceilNum, "<br>", rndNum, "<br>", piNum);

