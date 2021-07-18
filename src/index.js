import './styles.scss';
import { getElement } from './modules/tools.js';
import { addTask } from './modules/add.js';
import { renderTaskDom } from './modules/render.js';
import { removeAllTask, removeTask, removeTaskChecked } from './modules/remove.js';
import { refreshDragDropTarget } from './modules/drag-drop.js';
import { refreshStatus } from './modules/checkbox.js';
import { refreshDescriptions } from './modules/description.js';

const input = getElement('.input-task');
const listContainer = getElement('.container-list');
const removeCompletedTasks = getElement('.btn-clear');
const removeAllIcon = getElement('.refresh-icon');

// Page loads
document.addEventListener('DOMContentLoaded', () => {
  renderTaskDom();
  refreshDragDropTarget();
  refreshDescriptions();
});

// Add a task
input.addEventListener('keyup', (event) => {
  event.preventDefault();
  addTask(event);
});

// Checkbox status and remove a task
listContainer.addEventListener('click', (event) => {
  refreshStatus(event);
  removeTask(event);
});

// Remove completed tasks
removeCompletedTasks.addEventListener('click', removeTaskChecked);

// Remove all tasks
removeAllIcon.addEventListener('click', removeAllTask);
