const myBias = document.querySelector(".contents_body");

myBias.innerHTML = "Pick your Bias from the sidemenu!";

setTimeout(() => {
  myBias.classList.add("active");
}, 100)

const selectedBias = localStorage.getItem("bias")
if (selectedBias) {
  myBias.innerHTML = `Your Pick : ${selectedBias}`;
}

