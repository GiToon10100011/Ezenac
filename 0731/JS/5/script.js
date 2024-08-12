const students = ["David", "Julian", "Peter"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

students.forEach((student, index, arr) => {
  console.log(student, index, arr);
});

for(let student of students){
  console.log(student);
}

const theBook = {
  title : "Javascript",
  pages : 250,
  publish : "2024-07-31"
};

for(let key in theBook){
  console.log(`${key} : ${theBook[key]}`);
}

let stars = Number(prompt("별의 개수를 입력해주세요."));

document.open();
while(stars > 0){
  document.write("*");
  stars--;
}

do{
  document.write("*");
  stars--;
} while(stars > 0);


