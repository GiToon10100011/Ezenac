const ul = document.querySelector("ul");
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElements = col * row;

for (let i = 0; i < allElements; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

const tl = anime.timeline({
  targets: "li",
  loop: true,
  direction: "alternate",
  delay: anime.stagger(100, { grid: grid, from: "center" }),
});

tl.add({
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutQuart", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { grid: grid, from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: grid, from: "center", axis: "y" }),
  rotate: anime.stagger([0, 1024], { grid: grid, from: "center", axis: "x" }),
});
