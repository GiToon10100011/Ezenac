const testFnc = () => {
  alert("클릭!")
}

const inputText = document.querySelector("input[type = 'text']");
const form = document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault();
  const word = inputText.value;
  const count = word.length;
  alert(`입력하신 ${word}의 글자 수는 ${count}입니다`)
})