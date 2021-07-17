import { getDataLocalStorage } from './modules/store.js';
import { getElement } from './tools.js';

let listContainer = getElement('.container-list');

const createTaskStructure = (task) => {
    listContainer.insertAdjacentHTML(
        'beforeend',
        `<li data-id="${task.index}" draggable="true" class="item">
        <input class="checkbox" type="checkbox" data-id="${task.index}">
        <label class="text-task" data-id="${task.index}" contenteditable=true>${task.description}</label><br>
        <i class="fas fa-trash-alt remove" data-id="${task.index}"></i>
        </li>
        `,
    );
    
    if (task.status) {
        let checkbox = getElement()
    }
}

const renderTaskDom = () => {
    let listTasks = getDataLocalStorage();
    listTasks.forEach(task => createTaskStructure(task));
}
