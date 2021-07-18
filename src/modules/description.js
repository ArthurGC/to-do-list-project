import { setDataLocalStorage, getDataLocalStorage } from './store.js';
import { getElements } from './tools.js';


export const refreshDescriptions = () => {
    let descriptionLabels = getElements('.text-task');
    descriptionLabels.forEach(label => {
        label.addEventListener('input', () => {
            let listTasks = getDataLocalStorage();
            let id = parseInt(label.parentElement.dataset.id, 10);
            listTasks[id].description = label.textContent;
            setDataLocalStorage(listTasks);
        })
    })
}

