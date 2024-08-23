// const displayHello = async () => {
//   console.log("hello");
// }

// console.log(displayHello());

const whatsYourFavorite = () => {
  const fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));
};

const displaySubject = (subject) => {
  return new Promise((resolve, reject) => resolve(`Hello ${subject}`));
};

whatsYourFavorite().then(displaySubject).then(console.log);

//async, await
//await => 예약어(특정 요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어)
//await 예약어는 절대로 혼자서 독립적 사용이 불가함.
//async 함수 내부에서만 반드시 사용할 수 있음.

const whatsYourFavorite2 = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject2 = async (subject) => {
  return `Hello, ${subject}`;
};

//1빠따로 컴온
const init = async () => {
  //2빠따로 실행
  const response = await whatsYourFavorite2();
  //3빠따로 실행
  const result = await displaySubject2(response);
  console.log(result);
};

init();
