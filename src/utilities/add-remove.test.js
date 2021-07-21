/**
 * @jest-environment jsdom
 */
const { expect, test } = require('@jest/globals');
const Task = require('./task.js');
const LocalStorage = require('./localStorage.js');

describe('Test add', () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML = '<div>'
    + '<input type="text" name="task" id="task" class="input-task" value="Hello">'
    + '<ul class="container-list"></ul>'
    + '</div>';
  const event = {
    keyCode: 13,
  };

  //   class LocalStorage {
  //     static list = [];

  //     static setDataLocalStorage(item) {
  //       this.list = item;
  //     }

  //     static getDataLocalStorage() {
  //       return this.list;
  //     }
  //   }
  const localStorage = new LocalStorage();

  const renderTaskDom = () => {
    const listTasks = localStorage.getDataLocalStorage();
    const container = document.querySelector('.container-list');
    const input = document.querySelector('.input-task');
    const task = document.createElement('li');
    task.classList.add('item');
    task.dataset.id = listTasks.length;
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    const label = document.createElement('label');
    label.textContent = input.value;
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt', 'remove');

    task.appendChild(checkBox);
    task.appendChild(label);
    task.appendChild(icon);
    container.appendChild(task);
  };

  const checkElementsInTaskDOM = () => {
    const task = document.querySelector('.item');
    const childrenTask = [...task.children];
    const checkBox = childrenTask[0];
    const label = childrenTask[1];
    const icon = childrenTask[2];
    return [checkBox, label, icon, task];
  };

  const refreshDragDropTarget = jest.fn();
  const refreshDescriptions = jest.fn();

  // Act --------------------------------------------------------------------------->
  const add = (event) => {
    if (event.keyCode === 13) {
      const listTasks = localStorage.getDataLocalStorage();
      const input = document.querySelector('.input-task');
      const inputValue = input.value;
      const newTask = new Task(inputValue, false, listTasks.length);
      listTasks.push(newTask);
      localStorage.setDataLocalStorage(listTasks);
      input.value = '';
      renderTaskDom();
      refreshDragDropTarget();
      refreshDescriptions();
      return listTasks;
    }
    return false;
  };

  const addFunction = add(event);

  //   Assert --------------------------------------------------------------------------->
  test('add task to the list', () => {
    expect(addFunction.length === 1).toBeTruthy();
  });

  test('task contains a right index', () => {
    expect(addFunction[addFunction.length - 1].index).toBe(0);
  });

  test('add a object', () => {
    expect(addFunction).toEqual([
      {
        description: 'Hello',
        status: false,
        index: 0,
      },
    ]);
  });

  test('add task to DOM', () => {
    expect(checkElementsInTaskDOM()[3]).toBeDefined();
  });

  test('test get localStorage', () => {
    expect(localStorage.getDataLocalStorage()).toEqual([
      {
        description: 'Hello',
        status: false,
        index: 0,
      },
    ]);
  });
});

describe('Test remove', () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML = '<div>'
    + '<input type="text" name="task" id="task" class="input-task" value="Hello">'
    + '<ul class="container-list">'
    + '<li data-id="0" class="item"><i class="fas fa-trash-alt remove"></i></li>'
    + '<li data-id="1" class="item"><i class="fas fa-trash-alt remove"></i></li>'
    + '<li data-id="2" class="item"><i class="fas fa-trash-alt remove"></i></li>'
    + '</ul>'
    + '</div>';

  const listTask = [
    {
      description: 'chocolate',
      status: false,
      index: 0,
    },
    {
      description: 'candy',
      status: true,
      index: 1,
    },
    {
      description: 'pie',
      status: false,
      index: 2,
    },
  ];
  const localStorage = new LocalStorage();
  localStorage.setDataLocalStorage(listTask);

  const bundleRefreshHandlersAndUpdate = (list) => {
    localStorage.setDataLocalStorage(list);
    const firstArray = [];
    const secondArray = [];
    for (let i = 0; i <= list.length; i += 1) {
      firstArray.push(i);
    }
    list.forEach((element) => secondArray.push(element.index));

    const difference = firstArray.filter((x) => secondArray.indexOf(x) === -1);
    const templateString = `li[data-id="${difference[0]}"]`;
    const element = document.querySelector(templateString);
    element.remove();
  };

  const checkNumberTask = () => [...document.querySelector('.container-list').children].length;

  const element = document.querySelector('li[data-id="0"] .remove');

  //  Act --------------------------------------------------------------------------->
  const removeTask = (element) => {
    const isRemoveIcon = element.classList.contains('remove');
    if (isRemoveIcon) {
      const listTasks = localStorage.getDataLocalStorage();
      const id = parseInt(element.parentElement.dataset.id, 10);
      listTasks.splice(id, 1);
      bundleRefreshHandlersAndUpdate(listTasks);
      return listTasks;
    }
    return false;
  };

  //  Assert --------------------------------------------------------------------------->
  test('Task is removed from Array', () => {
    expect(removeTask(element)).toHaveLength(2);
  });

  test('Task is removed from DOM', () => {
    expect(checkNumberTask()).toBe(2);
  });

  test('test get localStorage', () => {
    expect(localStorage.getDataLocalStorage()).toEqual([
      {
        description: 'candy',
        status: true,
        index: 1,
      },
      {
        description: 'pie',
        status: false,
        index: 2,
      },
    ]);
  });
});
