let tasks = [];

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let todoList = document.getElementById("todoList");

function renderTasks() {
  todoList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tasks[i].text;
    if (tasks[i].completed) {
      span.classList.add("done");
    }
    span.addEventListener("click", function () {
      tasks[i].completed = !tasks[i].completed;
      renderTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

addTaskBtn.addEventListener("click", function () {
  let text = taskInput.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, completed: false });
  taskInput.value = "";
  renderTasks();
});
