const xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200){
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerText = `${students.name}은 ${students.age}살이고, 종은 ${students.species}입니다.`;
  }
}

