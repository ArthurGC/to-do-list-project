import { setDataLocalStorage } from './store.js';
import { getChildren, getElements } from "./tools";
import { task } from './add.js';

let listContainer = getElement('.container-list');

const refreshInformation = () => {
    let listTasks = [];
    let items = getChildren(listContainer);
    items.forEach((item, index) => {
      const newTask = new task(item.children[1].textContent, item.children[0].checked, index);
      listTasks.push(newTask);
    });

    setDataLocalStorage(listTasks);
}

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
  let secondElementDrop = e.currentTarget;

  if (firstElementDragging !== secondElementDrop) {
    firstElementDragging.innerHTML = secondElementDrop.innerHTML;
    secondElementDrop.innerHTML = e.dataTransfer.getData('text/html');
    refreshInformation();
  }
};

const addListenerDragDrop = (listTasks) => {
    listTasks.forEach(task => {
        task.addEventListener('dragstart', dragStart);
        task.addEventListener('dragend', dragEnd);
        task.addEventListener('dragover', dragOver);
        task.addEventListener('drop', drop);
    });
}

export const refreshDragDropTarget = () => {
    let targets = getElements('.item');
    addListenerDragDrop(targets);
}
