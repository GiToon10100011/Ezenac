// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 도우 준비");
//     callback();
//   }, 2000);
// };

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("토핑 완료");
//     callback();
//   }, 2000)
// }

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("굽기 완료");
//     callback();
//   }, 2000)
// }

// console.log("피자를 주문합니다!");

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("피자가 준비되었습니다!");
//     })
//   })
// });

//Promise로 변환~
//프로미스를 이런 형태로 쓰면 안돼!! 이러면 콜백지옥과 다를게 없음!!
const pizza = new Promise((resolve, reject) => {});

const pizza2 = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다!");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑완료");
    }, 3000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기완료");
    }, 3000);
  });
};

// pizza2()
//   .then((result) => step1(result))
//   .then((result) => step2(result))
//   .then((result) => step3(result))
//   .then((result) => console.log(result))
//   .then(() => console.log("피자가 준비되었습니다!"));

//위의 실행코드를 줄여쓸 수 있음
//이건 그냥 얘만의 문법임
pizza2()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => console.log("피자가 준비되었습니다!"));
