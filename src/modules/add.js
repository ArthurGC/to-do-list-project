import { getDataLocalStorage, setDataLocalStorage } from './store.js';
import { getElementValue, getElement } from './tools.js';
import { renderTaskDom } from './render.js';
import { refreshDragDropTarget } from './drag-drop.js'
import { refreshDescriptions } from './description.js';

export class task {
    constructor(description, status, index) {
        this.description = description;
        this.status = status;
        this.index = index;
    }
}

export const addTask = (event) => {
    if (event.keyCode === 13) {
        let listTasks = getDataLocalStorage();
        let input = getElement('.input-task');
        let inputValue = getElementValue('.input-task');
        let newTask = new task(inputValue, false, listTasks.length)
        listTasks.push(newTask);
        setDataLocalStorage(listTasks);
        input.value = '';
        renderTaskDom();
        refreshDragDropTarget();
        refreshDescriptions();
    }
}
