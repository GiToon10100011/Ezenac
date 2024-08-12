const box = document.querySelector("#box");
box.addEventListener("click", (event) => {
  console.log(event.target, event.currentTarget);
  alert(`${event.pageX}, ${event.pageY}`);
});

