import './styles.scss';

import {listContainer, createItemTask} from './modules/renderTasks.js'
import {refrestTargetDragDrop} from './modules/dragDrop.js'

const toDoTasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Brush your teeth',
    completed: true,
    index: 1,
  },
  {
    description: 'Wake up early',
    completed: false,
    index: 2,
  },
];

const displayTasks = () => {
  listContainer.innerHTML = "";
  toDoTasks.forEach((task) => createItemTask(task));
};

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  refrestTargetDragDrop();
});

// listContainer.addEventListener('click', (e) => {

//   if (e.target.classList.contains('icon-item')) {

//   }
// })
