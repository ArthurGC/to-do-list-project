import { listTasks } from './initial.js';
import { getDataLocalStorage, setDataLocalStorage } from './store.js';
import { createElement, getElement } from './tools.js';

const listContainer = getElement('.container-list');
const fragment = document.createDocumentFragment();

const createTaskStructure = (task) => {
  const taskContainer = createElement('li');
  taskContainer.dataset.id = task.index;
  taskContainer.setAttribute('draggable', 'true');
  taskContainer.classList.add('item');

  const checkBox = createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.classList.add('checkbox');
  if (task.status) {
    checkBox.setAttribute('checked', 'true');
  }

  const description = createElement('label');
  description.setAttribute('contenteditable', 'true');
  description.classList.add('text-task');
  description.textContent = task.description;
  if (task.status) {
    description.classList.add('completed');
  }

  const iconRemove = createElement('i');
  iconRemove.classList.add('fas', 'fa-trash-alt', 'remove');

  taskContainer.appendChild(checkBox);
  taskContainer.appendChild(description);
  taskContainer.appendChild(iconRemove);
  fragment.appendChild(taskContainer);
};

export const renderTaskDom = () => {
  const list = getDataLocalStorage();
  if (list === listTasks) {
    setDataLocalStorage(list);
  }
  listContainer.innerHTML = '';
  list.forEach((task) => createTaskStructure(task));
  listContainer.appendChild(fragment);
};

export const refreshIndex = (listTasks) => {
  listTasks.forEach((task, index) => {
    task.index = index;
  });
};
