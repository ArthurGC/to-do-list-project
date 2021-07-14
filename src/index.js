import './styles.scss';

import { listContainer, createItemTask } from './modules/renderTasks.js';
import {
  dragStart, dragEnd, dragOver, dragDrop,
} from './modules/dragDrop.js';
import { checkBoxStatus, changeStyleTask } from './modules/checkStatus.js';
import { Task, inputTask, addTask } from './modules/addtask.js';
import { clearCompletedTasks, removeAllIcon, removeAllItems, removeCompletedItem } from './modules/remove.js';

let toDoTasks = [
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
  listContainer.innerHTML = '';
  toDoTasks.forEach((task) => createItemTask(task));
};

const refrestCompletedTask = (bool, element) => {
  if (bool) {
    toDoTasks[parseInt(element.dataset.id, 10)].completed = true;
    element.setAttribute('checked', 'true');
  } else {
    toDoTasks[parseInt(element.dataset.id, 10)].completed = false;
    element.removeAttribute('checked');
  }
};

const getTaskData = () => {
  if (localStorage.getItem('TaskData') != null) {
    toDoTasks = JSON.parse(localStorage.getItem('TaskData'));
  }
};

const setData = () => {
  localStorage.setItem('TaskData', JSON.stringify(toDoTasks));
};

const refrestTargetDragDrop = () => {
  const tasks = document.querySelectorAll('.container-list .item');

  tasks.forEach((task) => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
    task.addEventListener('dragover', dragOver);
    task.addEventListener('drop', (e) => {
      dragDrop(e);
      const items = [...listContainer.children];

      toDoTasks = [];

      items.forEach((item, index) => {
        const newTask = new Task(item.children[1].textContent, item.children[0].checked, index);
        toDoTasks.push(newTask);
        setData();
      });
    });
  });
};

const checkBoxStatusContentLoad = () => {
  const items = [...listContainer.children];

  items.forEach((item) => {
    changeStyleTask(item.children[0].checked, item.children[0]);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  getTaskData();
  displayTasks();
  checkBoxStatusContentLoad();
  refrestTargetDragDrop();
});

listContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    checkBoxStatus(e.target);
    refrestCompletedTask(e.target.checked, e.target);
    setData();
  }

  if (e.target.classList.contains('remove')) {
      e.target.parentElement.remove();
      removeSelectedItem(toDoTasks, e.target.dataset.id);
      setData();
      displayTasks();
      refrestTargetDragDrop();
  }

});

removeAllIcon.addEventListener('click', () =>{
  removeAllItems(toDoTasks, listContainer);
  setData();
});

inputTask.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    let input = document.querySelector('.input-task');
    addTask(toDoTasks, input);
    setData();
    displayTasks();
    input.value = '';
  }

})

clearCompletedTasks.addEventListener('click', () => {
  removeCompletedItem(toDoTasks);
  setData();
  displayTasks();
  refrestTargetDragDrop();

});
