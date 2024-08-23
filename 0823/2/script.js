//콜백지옥
const displayLetter = () => {
  //흡사 api 가져오면 콜백 실행하는 구조
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("Stahp!!");
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
};

displayLetter();