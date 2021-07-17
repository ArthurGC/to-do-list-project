import { getDataLocalStorage, setDataLocalStorage } from './modules/store.js';
import { getElementValue } from './tools.js';

class task {
    constructor(description, status, index) {
        this.description = description;
        this.status = status;
        this.index = index;
    }
}

export const addTask = () => {
    let listTasks = getDataLocalStorage();
    let inputValue = getElementValue('.input-task');
    let newTask = new task(inputValue, false, listTasks.length)
    listTasks.push(newTask);
    setDataLocalStorage(listTasks);
}
