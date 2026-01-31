import { record } from "./logic.js";
import { addTask, getTasks } from "./state.js";
import { saveData } from "./storage.js";


// DOM elements
const form = document.querySelector("#taskForm");
const titleInput = document.querySelector("#taskInput");
const prioritySelect = document.querySelector("#prioritySelect");
const taskList = document.querySelector(".notify");

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const priority = prioritySelect.value;

  const task = record(title, priority);

  if (task === null) {
    alert("Please enter a task title");
    return;
  }
  addTask(task);
  saveData();
  render();

  titleInput.value = "";
  prioritySelect.selectedIndex = 0;
});

// Render tasks
function render() {
  const tasks = getTasks();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const item = document.createElement("div");
    item.innerText = `${index + 1}. ${task.title} (${task.priority})`;
    taskList.appendChild(item);
  });
}

export { render };
