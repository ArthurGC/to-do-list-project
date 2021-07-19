import { setDataLocalStorage, getDataLocalStorage } from './store.js';
import { refreshIndex, renderTaskDom } from './render.js';
import { refreshDragDropTarget } from './drag-drop.js';
import { refreshDescriptions } from './description.js';

const bundleRefreshHandlersAndUpdate = (listOfTask) => {
  refreshIndex(listOfTask);
  setDataLocalStorage(listOfTask);
  renderTaskDom();
  refreshDragDropTarget();
  refreshDescriptions();
};

export const removeTask = (event) => {
  const isRemoveIcon = event.target.classList.contains('remove');
  if (isRemoveIcon) {
    const listTasks = getDataLocalStorage();
    const id = parseInt(event.target.parentElement.dataset.id, 10);
    listTasks.splice(id, 1);
    bundleRefreshHandlersAndUpdate(listTasks);
  }
};

export const removeTaskChecked = () => {
  const listTasks = getDataLocalStorage();
  if (listTasks !== []) {
    const newListTask = listTasks.filter((task) => task.status === false);
    bundleRefreshHandlersAndUpdate(newListTask);
  }
};

export const removeAllTask = () => {
  const listTasks = [];
  setDataLocalStorage(listTasks);
  renderTaskDom();
};
