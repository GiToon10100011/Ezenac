//  id 123 = name 곰
//id 1021 = name 사자
//id 6021 // name 여우

// const ids = [123, 1021, 6021]
// const names = ["곰", "사자", "여우"]

const ids = {
  123: "곰",
  1021: "사자",
  6021: "여우",
};

const test = [123, 1021, 6021, "곰", "사자", "여우"];

const idSearch = document.querySelector("#idSearch");

console.log();

idSearch.addEventListener("keyup", () => {
  const result = document.querySelector(".result");
  // Object.keys(ids).forEach((id) => {
  //   if (idSearch.value.includes(id)) {
  //     result.innerText = ids[id];
  //   } else{
  //     result.innerText = "";
  //   }
  // });
  test.find((num) => num.includes(123))
});
