const output = document.querySelector("#output");

const arr = [2, 1, 3, 10];

arr.sort((a, b) => {
  return b-a;
});

const arr1 = arr.map((item) => (item * 2));

output.innerText = arr;
