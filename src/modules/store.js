import { listTasks } from './initial.js';

export const getDataLocalStorage = () => {
    return localStorage.getItem('TaskData') || listTasks;
}

export const setDataLocalStorage = (listTasks) => {
    localStorage.setItem('TaskData', JSON.stringify(listTasks));
} 
