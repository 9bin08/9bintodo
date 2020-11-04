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

  span.innerHTML = text;

  toDoList.appendChild(li);
  li.appendChild(span);

  const toDoObj = {
    text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj);
  console.log(toDos);
}

function handleSubmit(e) {
  event.preventDefault();
  const toDoWrite = toDoText.value;
  paintTodo(toDoWrite);
  local(toDos);
  toDoText.value = "";
}

function getLoadList() {
  const getList = JSON.parse(localStorage.getItem(toDoslocal));
  if (getList === null) {
  } else {
    getList.forEach(function (toDos) {
      paintTodo(toDos.text);
    });
  }
}

function init() {
  getLoadList();
  toDoSubmit.addEventListener("submit", handleSubmit);
}

init();
