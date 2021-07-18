import { listTasks } from './initial.js';

export const getDataLocalStorage = () => JSON.parse(localStorage.getItem('TaskData')) || listTasks;

export const setDataLocalStorage = (listTasks) => {
  localStorage.setItem('TaskData', JSON.stringify(listTasks));
};
