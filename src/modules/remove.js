import { setDataLocalStorage, getDataLocalStorage } from './store.js';
import { refreshIndex, renderTaskDom } from './render.js';
import { refreshDragDropTarget } from './drag-drop.js';
import { refreshDescriptions } from './description.js';

export const removeTask = (event) => {
    if (event.target.classList.contains('remove')) {
        let listTasks = getDataLocalStorage();
        let id = parseInt(event.target.parentElement.dataset.id, 10);
        listTasks.splice(id, 1);
        refreshIndex(listTasks);
        setDataLocalStorage(listTasks);
        renderTaskDom();
        refreshDragDropTarget();
        refreshDescriptions();
    }
}

export const removeTaskChecked = () => {
    let listTasks = getDataLocalStorage();
    if (listTasks !== []) {
        let newListTask = listTasks.filter(task => task.status === false);
        refreshIndex(newListTask);
        setDataLocalStorage(newListTask);
        renderTaskDom();
        refreshDragDropTarget();
        refreshDescriptions();
    }
}

export const removeAllTask = () => {
    let listTasks = [];
    setDataLocalStorage(listTasks);
    renderTaskDom();
}
