const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("Stop!");
        });
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();

const likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("박필립스피자 주문");
  else reject("꺼져");
});
