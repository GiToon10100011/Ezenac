let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;

if(localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"))

localData.push("Choi");

console.log(localData);