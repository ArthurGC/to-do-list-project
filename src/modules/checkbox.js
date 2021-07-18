import { setDataLocalStorage, getDataLocalStorage } from './store.js';

export const refreshStatus = (event) => {
    if (event.target.classList.contains('checkbox')) {
        let listTasks = getDataLocalStorage();
        let id = parseInt(event.target.parentElement.dataset.id, 10);
        if (event.target.checked) {
            listTasks[id].status = true;
            event.target.nextElementSibling.classList.add('completed');
            event.target.setAttribute('checked', 'true');
        } else {
            listTasks[id].status = false;
            event.target.nextElementSibling.classList.remove('completed');
            event.target.removeAttribute('checked');
        }
        setDataLocalStorage(listTasks);
    }
}
