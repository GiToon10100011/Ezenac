const ul = document.querySelector("ul");

//3행 9열
const grid = [9, 3];
const col = grid[0];
const row = grid[1];
const allElements = col * row;

for (let i = 0; i < allElements; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

anime({
  targets: "li",
  easing: "linear",
  duration: 1000,
  //중간에서 0.5에 시작하고 바깥으로 가면 갈수록 1에 가까워지도록
  scale: anime.stagger([0.5, 1], {
    grid: [9, 3],
    from: "center",
    axis: "z",
  }),
});
