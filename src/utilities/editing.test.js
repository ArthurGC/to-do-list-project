/**
 * @jest-environment jsdom
 */

const { expect, test, describe } = require('@jest/globals');
const LocalStorage = require('./localStorage.js');

describe('edit the description', () => {
  document.body.innerHTML = '<div>'
  + '<ul class="container-list">'
  + '<li data-id="0" class="item">'
  + '<input class="checkbox" type="checkbox">'
  + '<label class="text-task" contenteditable=true>Do the laundry</label>'
  + '<i class="fas fa-trash-alt remove"></i>'
  + '</li>'
  + '</ul>'
  + '</div>';

  const listTask = [
    {
      description: 'Do the laundry',
      status: false,
      index: 0,
    },
  ];

  const localStorage = new LocalStorage();
  localStorage.setDataLocalStorage(listTask);

  const refreshDescriptions = (string) => {
    const descriptionLabel = document.querySelector('.text-task');
    const listTasks = localStorage.getDataLocalStorage();
    const id = parseInt(descriptionLabel.parentElement.dataset.id, 10);
    listTasks[id].description = string;
    document.querySelector('.text-task').textContent = string;
    localStorage.setDataLocalStorage(listTasks);
    return descriptionLabel.textContent;
  };

  test('by passing another description and checking the DOM', () => {
    expect(refreshDescriptions('Play games')).toBe('Play games');
  });

  test('by passing another description and checking the localStorage', () => {
    expect(localStorage.getDataLocalStorage()[0].description).toBe('Play games');
  });
});
