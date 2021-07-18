import { setDataLocalStorage } from './store.js';
import { getChildren, getElement, getElements } from './tools.js';
import { Task } from './classes.js';

const listContainer = getElement('.container-list');

const refreshInformation = () => {
  const listTasks = [];
  const items = getChildren(listContainer);
  items.forEach((item, index) => {
    const newTask = new Task(item.children[1].textContent, item.children[0].checked, index);
    listTasks.push(newTask);
  });

  setDataLocalStorage(listTasks);
};

let firstElementDragging;

const dragStart = (e) => {
  firstElementDragging = e.currentTarget;
  firstElementDragging.style.opacity = '0.5';

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', firstElementDragging.innerHTML);
};
const dragEnd = (e) => {
  e.currentTarget.style.opacity = '1';
};

const dragOver = (e) => {
  e.preventDefault();
};

const drop = (e) => {
  e.stopPropagation();
  const secondElementDrop = e.currentTarget;

  if (firstElementDragging !== secondElementDrop) {
    firstElementDragging.innerHTML = secondElementDrop.innerHTML;
    secondElementDrop.innerHTML = e.dataTransfer.getData('text/html');
    refreshInformation();
  }
};

const addListenerDragDrop = (listTasks) => {
  listTasks.forEach((task) => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
    task.addEventListener('dragover', dragOver);
    task.addEventListener('drop', drop);
  });
};

export const refreshDragDropTarget = () => {
  const targets = getElements('.item');
  addListenerDragDrop(targets);
};
