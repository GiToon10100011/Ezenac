//await를 사용하기 위해 사용
const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //resolve가 실행되긴 해야하니까 그냥 아무런 의미가 없는 빈문자열을 인자값으로 줌.
      resolve("");
    }, ms);
  });
};

export default delay;
