const path = anime.path(".svg path");
anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  duration: 10000,
  easing: "linear",
  loop: true,
});
