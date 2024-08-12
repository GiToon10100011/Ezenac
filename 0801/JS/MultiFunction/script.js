//자바스크립트를 잘할 수 있는 법
//1. 배열을 명확하게 이해하고 사용할 수 있어야한다.
//2. 반복문을 적재적소에 사용할 수 있어야한다.
//3. 내가 원하는 기능을 구현할 수 있는 함수를 만들 수 있다.

//CallBack 1
let count = 0;
const callback = () => {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

callback();

const timer = setInterval(callback, 50);

//CallBack 2
//map함수는 배열안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이후 다시 해당 아이템들을 모아서 새로운 배열로 생성한다. forEach와 매한가지로 2번째 인자값은 인덱스값을 가져온다.
const arr = [10, 20, 30];
const newArr = arr.map((item, index) => (item + 5) * index);

console.log(newArr);

//CallBack 3
setTimeout(() => {
  // setTimeout을 일으키는 주최자를 찾아옴
  console.log(this);
}, 300);

// this 객체, CallBack 4
const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((item) => {
  console.log(this);
});

//CallBack 5
document.body.innerHTML += `<button id = "a">Callback</button>`;

const btn = document.querySelector("#a");

//화살표 함수를 쓰게 된다면 window가 나옴, function함수를 써서 this 객체는 button 객체를 가리킴. 이때문에 function을 사용해야하는 경우가 반드시 있을거임
btn.addEventListener("click", function () {
  console.log(this);
});

//CallBack 6
//객체 안에 있는 함수의 경우, this는 function의 경우, 해당 메소드 함수(객체 내의 키가 함수의 값을 지니고 있다면 메소드 함수라 불린다.)의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면 window를 찾아옴.
const obj = {
  vals: [1, 2, 3],
  //화살표 함수를 쓰게 된다면 window가 나옴, function함수를 써서 this 객체는 button 객체를 가리킴. 이때문에 function을 사용해야하는 경우가 반드시 있을거임
  logValues: function () {
    console.log(this);
  },
};

obj.logValues();

//객체 안에 메소드 형식으로 정의한 함수는 외부에 별도로 존재하는 함수의 콜백 함수로 사용되면 window를 가리킨다.
const arr3 = [4, 5, 6];
arr3.forEach(obj.logValues);

//객체를 통해서 탄생된 메소드함수를 콜백함수로 사용시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법 -> this객체를 따로 변수안에 보관하면 된다!
const obj1 = {
  name: "obj1",
  func: function () {
    // 객체를 가리킴
    const self = this;
    return function () {
      // 객체의 name키를 지닌 값을 가리킴
      console.log(self.name);
    };
  },
};

// 시간 함수에서 this를 쓰더라도 값이 window로 바뀌지 않음.
const callback2 = obj1.func();
setTimeout(callback2, 1000);

// 위 코드를 보다 더 효율적으로 this객체를 사용하는 법
const obj2 = {
  name: "obj2",
  func: function () {
    console.log(this.name);
  },
};

//bind 함수는 객체를 통해 파생된 메소드 함수의 부모의 값을 그대로 유지시켜주는 역할을 한다.
setTimeout(obj2.func.bind(obj2), 1500);

//콜백지옥
setTimeout(
  (name) => {
    let coffeeList = name;
    console.log(coffeeList);
    setTimeout(
      (name) => {
        coffeeList += `, ${name}`;
        console.log(coffeeList);
        setTimeout(
          (name) => {
            coffeeList += `, ${name}`;
            console.log(coffeeList);
            setTimeout(
              (name) => {
                coffeeList += `, ${name}`;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);

//콜백지옥에서 빠져나올 수 있는 콜백천국행 티켓 1 -> refactoring
let coffeeList2 = "";

const addLatte = (name) => {
  coffeeList2 += `, ${name}`;
  console.log(coffeeList2);
};

const addMocha = (name) => {
  coffeeList2 += `, ${name}`;
  console.log(coffeeList2);
  setTimeout(addLatte, 500, "카페라떼");
};

const addAmericano = (name) => {
  coffeeList2 += `, ${name}`;
  console.log(coffeeList2);
  setTimeout(addMocha, 500, "카페모카");
};

const addEspresso = (name) => {
  coffeeList2 = name;
  console.log(coffeeList2);
  setTimeout(addAmericano, 500, "아메리카노");
};

setTimeout(addEspresso, 500, "에스프레소");

//콜백지옥에서 빠져나올 수 있는 콜백천국행 티켓 2 -> Promise() => 클래스로 선언되었을 때
//이 함수가 정상적으로 실행된다면, 종료시 함수를 실행시켜줄거라고 약속한다는 느낌

// new Promise(); // new예약어 + 대문자로 시작된것을 보아 클래스로 생성된 프로토타입 함수임을 알 수 있다.

let likePizza = true;
// 피자라는 변수내에는 Promise를 통해 형성된 객체가 할당됨
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다!");
  } else {
    reject("피자는 품절되었습니다.");
  }
});

pizza.then((result) => {
  console.log(result);
});

// const obj3 = new Promise((resolve) => {

// });

// obj3.then 를 아래와 같은 형태로 간소화 시킬 수 있다.

new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName} , 카페모카`;
      console.log(name);
      resolve(name);
    }, 500);
  }).then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} , 카페라떼`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
});
