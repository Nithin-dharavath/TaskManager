// state.js

let tasks = [];

// Add ONE task
const addTask = (task) => {
  tasks.push(task);
};

// Get ALL tasks
const getTasks = () => {
  return tasks;
};

// Replace ALL tasks (used when loading from localStorage)
const setTasks = (savedTasks) => {
  tasks = savedTasks;
};

export { addTask, getTasks, setTasks };
