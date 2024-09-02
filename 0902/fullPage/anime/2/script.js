anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});

anime({
  targets: ".box2",
  translateX: 300,
  translateY: 300,
  easing: "easeInQuart",
  duration: 1000,
  loop: true,
  direction: "alternate",
});

anime({
  targets: ".box3",
  translateX: {
    value: 400,
    //translateX의 속성에만 딜레이를 부여하기 위해 각 속성을 객체의 형태로 다음과같이 선언할 수 있다.
    delay: 1000,
    duration: 1000,
  },
  rotate: {
    value: 360,
    delay: 1000,
    duration: 1200,
  },
});
