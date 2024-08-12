const name = document.querySelector("#name");
const major = document.querySelector("#major");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(name.value === "" || major.value === "") {
    alert("데이터를 입력해주세요"); 
  } else{
    const table = document.querySelector("table");
    const nameVal = document.createElement("tr");
    nameVal.innerHTML = `<td>${name.value}</td> <td>${major.value}</td>` ;
    table.appendChild(nameVal);
    name.value = "";
    major.value = "";
  }
})