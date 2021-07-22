/**
 * @jest-environment jsdom
 */
const { expect, test, describe } = require('@jest/globals');
const LocalStorage = require('./localStorage.js');
const Task = require('./task.js');

describe('refresh the Information on index', () => {
  document.body.innerHTML = '<div>'
   + '<ul class="container-list">'
   + '<li data-id="0" class="item">'
   + '<input class="checkbox" type="checkbox">'
   + '<label class="text-task" contenteditable=true>Do the laundry</label>'
   + '<i class="fas fa-trash-alt remove"></i>'
   + '</li>'
   + '<li data-id="1" class="item">'
   + '<input class="checkbox" type="checkbox">'
   + '<label class="text-task" contenteditable=true>Play games</label>'
   + '<i class="fas fa-trash-alt remove"></i>'
   + '</li>'
   + '</ul>'
   + '</div>';

  const localStorage = new LocalStorage();

  const refreshInformation = () => {
    const listTasks = [];
    const container = document.querySelector('.container-list');
    const items = [...container.children];
    items.forEach((item, index) => {
      const newTask = new Task(item.children[1].textContent, item.children[0].checked, index);
      listTasks.push(newTask);
    });

    localStorage.setDataLocalStorage(listTasks);
  };
  refreshInformation();
  test('by savind it in localStorage', () => {
    expect(localStorage.getDataLocalStorage()).toEqual([
      {
        description: 'Do the laundry',
        status: false,
        index: 0,
      },
      {
        description: 'Play games',
        status: false,
        index: 1,
      },
    ]);
  });
});