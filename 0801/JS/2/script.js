function hello() {
  return "안녕";
}

function bye() {
  return "잘가";
}

function userCheck(name, callback) {
  console.log(`${name}님`, callback());
}

userCheck("전진우", hello);
userCheck("전진우", bye);

const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};


// 고차함수
console.log(`${init()(30, 20)}`, init());