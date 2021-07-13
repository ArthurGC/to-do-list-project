import "./styles.scss";

import { listContainer, createItemTask } from "./modules/renderTasks.js";
import { refrestTargetDragDrop } from "./modules/dragDrop.js";
import {checkBoxStatus} from './modules/checkStatus.js';

let toDoTasks = [
  {
    description: "Wash the dishes",
    completed: false,
    index: 0,
  },
  {
    description: "Brush your teeth",
    completed: true,
    index: 1,
  },
  {
    description: "Wake up early",
    completed: false,
    index: 2,
  },
];

const displayTasks = () => {
  listContainer.innerHTML = "";
  toDoTasks.forEach((task) => createItemTask(task));
};

const refrestCompletedTask = (bool,element) => {
  if (bool) {
      toDoTasks[parseInt(element.dataset.id)].completed = true;
      element.setAttribute('checked', 'true');
  } else {
    toDoTasks[parseInt(element.dataset.id)].completed = false;
      element.removeAttribute('checked');
  }
}

const getTaskData = () => {
  if (localStorage.getItem('TaskData') != null) {
    toDoTasks = JSON.parse(localStorage.getItem('TaskData'));
  }
};

const setData = () => {
  localStorage.setItem('TaskData', JSON.stringify(toDoTasks));
}

document.addEventListener("DOMContentLoaded", () => {
  getTaskData();
  displayTasks();
  refrestTargetDragDrop();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    checkBoxStatus(e.target);
    refrestCompletedTask(e.target.checked, e.target);
    setData();
  }
});
