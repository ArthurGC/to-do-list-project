import { setDataLocalStorage, getDataLocalStorage } from './store.js';
import { getElements } from './tools.js';

export const refreshDescriptions = () => {
  const descriptionLabels = getElements('.container-list li .text-task');
  descriptionLabels.forEach((label) => {
    label.addEventListener('input', () => {
      const listTasks = getDataLocalStorage();
      const id = parseInt(label.parentElement.dataset.id, 10);
      listTasks[id].description = label.textContent;
      setDataLocalStorage(listTasks);
    });
  });
};
