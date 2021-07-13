import './styles.scss';

const listContainer = document.querySelector('.container-list');

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

const createItemTask = (task) => {
  if (task.completed) {
    listContainer.insertAdjacentHTML('beforeend',
    `<li draggable="true" class="item">
    <input type="checkbox" data-id="${task.index}" checked>
    <label class="text-task" data-id="${task.index}">${task.description} </label><br>
    <i class="fas fa-ellipsis-v icon-item"></i>
    </li>
    `);
  } else {
    listContainer.insertAdjacentHTML('beforeend',
    `<li draggable="true" class="item">
    <input type="checkbox" data-id="${task.index}">
    <label class="text-task" data-id="${task.index}">${task.description}</label><br>
    <i class="fas fa-ellipsis-v icon-item"></i>
    </li>
    `);
  }
};

const displayTasks = () => {
  listContainer.innerHTML = '';
  toDoTasks.forEach((task) => createItemTask(task));
};

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});
