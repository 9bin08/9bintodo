const toDoSubmit = document.querySelector(".todojs");
const toDoText = document.querySelector("input");
const toDoList = document.querySelector(".list");

const toDoslocal = "toDos";

let toDos = [];

function local() {
  localStorage.setItem(toDoslocal, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const newId = toDos.length + 1;
  li.id = newId;
  button.addEventListener("click", delToDo);
  span.innerHTML = text;
  button.innerHTML = "Del";
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);

  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj);
  local();
}

function handleSubmit(e) {
  event.preventDefault();
  const toDoWrite = toDoText.value;
  paintTodo(toDoWrite);

  toDoText.value = "";
}

function getLoadList() {
  const getList = localStorage.getItem(toDoslocal);
  if (getList !== null) {
    const parseTodo = JSON.parse(getList);
    parseTodo.forEach((toDos) => {
      paintTodo(toDos.text);
    });
  }
}
function delToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const removeDoto = toDos.filter((toDos) => {
    return toDos.id !== parseInt(li.id);
  });
  toDos = removeDoto;
}

function init() {
  getLoadList();
  toDoSubmit.addEventListener("submit", handleSubmit);
}

init();
