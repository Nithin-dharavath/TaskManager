import { getTasks,setTasks } from "./state.js";

const STORAGE_KEY = "task_records";

const saveData = () => {
    const tasks = getTasks();
    const json = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, json);
};

const loadData = () => {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
        const tasks = JSON.parse(json);
        setTasks(tasks);
    }
};

export{saveData, loadData};