const member1 = ["HTML", "Node", "React"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React"];

const result = document.querySelector("#result");

let subjects = [...member1, ...member2, ...member3];
console.log(subjects);

// subjects = new Set(subjects);
// console.log(subjects);

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);

// ${[...resultList].map((subject) => (subject = `<li>${subject}</li>`))}

result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}

</ul>
`;

console.log(resultList);