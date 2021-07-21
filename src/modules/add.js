import { getDataLocalStorage, setDataLocalStorage } from './store.js';
import { getElementValue, getElement } from './tools.js';
import { renderTaskDom } from './render.js';
import { refreshDragDropTarget } from './drag-drop.js';
import { refreshDescriptions } from './description.js';
import { Task } from './classes.js';

export const addTask = (event) => {
  if (event.keyCode === 13) {
    const listTasks = getDataLocalStorage();
    const input = getElement('.input-task');
    const inputValue = getElementValue('.input-task');
    const newTask = new Task(inputValue, false, listTasks.length);
    listTasks.push(newTask);
    setDataLocalStorage(listTasks);
    input.value = '';
    renderTaskDom();
    refreshDragDropTarget();
    refreshDescriptions();
    return listTasks;
  }
  return false;
};

module.exports = addTask;
