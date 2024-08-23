// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student2.json");
// xhr.send();

// const renderHTML = (students) => {
//   let output = "";
//   for (let student of students) {
//     output += `
//     <ul>
//     <li><h2>${student.name}</h2></li>
//     <li>별명 : ${student.nickname}</li>
//     <li>나이 : ${student.age}세</li>
//     </ul>
//     `;
//     document.querySelector("#result").innerHTML = output;
//   }
//   console.log(output);
// };

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const result = document.querySelector("#result");
//     const students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };

console.log(fetch("student2.json"));
fetch("student2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      console.log(student);
      output += `
      <ul>
      <li><h2>${student.name}</h2></li>
      <li>별명 : ${student.nickname}</li>
      <li>나이 : ${student.age}세</li>
      </ul>
    `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
