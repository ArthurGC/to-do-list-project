import "./styles.scss";

const listContainer = document.querySelector('.container-list');

let toDoTasks = [
  {
    description: "Wash the dishes",
    completed: false,
    index: 0,
  },
  {
    description: "Brush your teeth",
    completed: false,
    index: 1,
  },
];

const createItemTask = (task) => {
    listContainer.insertAdjacentHTML('beforeend',
    `<li>
    <input type="checkbox" name="task${task.index}" value="task${task.index}" checked=${task.completed}>
    <label class="text-task">${task.description}</label><br>
    </li>
    `)
}

const displayTasks = () => {
    listContainer.innerHTML = '';
    toDoTasks.forEach(task => createItemTask(task));
}

document.addEventListener('DOMContentLoaded', () => {
    displayTasks();
});

