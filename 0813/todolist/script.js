//1. 사용자로부터 input태그를 통해 입력값을 받는다.
//2. 입력값이 확인되면, ul 태그 자식요소로 하나씩 추가해준다.
//3. ul 태그 자식요소 중 삭제 버튼을 클릭했을 때, 버튼을 포함하고 있는 부모 요소를 확인 후 같이 삭제해준다.
//4. 사용자가 입력한 값이 영구적으로 보관될 수 있도록 localStorage를 활용해서 값을 저장시킨다.
//5. 사용자가 값을 입력하면 다이렉트로 ui 화면에 출력되는 것이 아니라, 이제부터는 localStorage안에 저장된 값을 찾아와서 ui 화면에 출력시키도록 한다.
//6. 삭제버튼을 클릭한다면, 직접적으로 ui 화면 내 값을 삭제해주는것이 아니라 localStorage 값을 먼저 삭제 후 삭제가 업데이트 된 값을 ui 화면에 출력시켜준다.

const form = document.querySelector("form");
const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");

let todos = [];

//브라우저에서 객체를 못 읽어들이기 때문에 json파일의 형식으로 문자열 변환을 해주는 프로세스가 필요하다.
const save = () => {
  localStorage.setItem(`todos`, JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id !== Number(target.id));
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo.text}</span><button>삭제</button>`;

    const button = li.querySelector("button");
    button.addEventListener("click", delItem);

    ul.appendChild(li);
    li.id = todo.id;
  }
};

//브라우저를 처음 켰을때 로컬스토리지의 값이 있다면 화면상에 출력시키는 함수
const init = () => {
  //다시 불러올때 객체의 형태로 가져와야 하므로 parse 함수를 사용한다.
  const userTodos = JSON.parse(localStorage.getItem(`todos`));
  //데이터가 없는 상황에서 가져오게 된다면 배열의 형태를 띠지 않으므로 해당 값이 존재할때만 실행되도록 조건문을 부착
  if(userTodos){
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

init();
form.addEventListener("submit", handler);
console.log(todos);

//Local Storage
//1. 저장하는 방법
localStorage.setItem("Hello", "World");

//2. 가져오는 방법
const myData = localStorage.getItem("Hello");
console.log(myData);

//3. 삭제하는 방법
localStorage.removeItem("Hello");

//Session Storage
