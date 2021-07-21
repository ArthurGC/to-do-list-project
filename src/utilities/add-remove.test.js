/**
 * @jest-environment jsdom
 */

const { expect, test } = require("@jest/globals");

describe("Test add", () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML =
    "<div>" +
    '<input type="text" name="task" id="task" class="input-task" value="Hello">' +
    '<ul class="container-list"></ul>' +
    "</div>";
  let event = {
    keyCode: 13,
  };

  class Task {
    constructor(description, status, index) {
      this.description = description;
      this.status = status;
      this.index = index;
    }
  }

  const getDataLocalStorage = jest.fn();
  getDataLocalStorage.mockReturnValue([]);
  const setDataLocalStorage = jest.fn();
  const renderTaskDom = () => {
    let listTasks = getDataLocalStorage();
    let container = document.querySelector('.container-list');
    let input = document.querySelector(".input-task");
    let task = document.createElement('li');
    task.classList.add('item');
    task.dataset.id = listTasks.length;
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    let label = document.createElement('label');
    label.textContent = input.value;
    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt', 'remove');

    task.appendChild(checkBox);
    task.appendChild(label);
    task.appendChild(icon);
    container.appendChild(task);
  };

  const checkElementsInTaskDOM = () => {
      let task = document.querySelector('.item');
      let childrenTask = [...task.children];
      let checkBox = childrenTask[0];
      let label = childrenTask[1];
      let icon = childrenTask[2];
      return [checkBox, label, icon, task];
  }

  const refreshDragDropTarget = jest.fn();
  const refreshDescriptions = jest.fn();

  //Act --------------------------------------------------------------------------->
  const add = (event) => {
    if (event.keyCode === 13) {
      let listTasks = getDataLocalStorage();
      let input = document.querySelector(".input-task");
      let inputValue = input.value;
      let newTask = new Task(inputValue, false, listTasks.length);
      listTasks.push(newTask);
      setDataLocalStorage(listTasks);
      input.value = "";
      renderTaskDom();
      refreshDragDropTarget();
      refreshDescriptions();
      return listTasks;
    }
  };

  let addFunction = add(event);

  //   Assert --------------------------------------------------------------------------->
  test("add task to the list", () => {
    expect(addFunction.length === 1).toBeTruthy();
  });

  test("task contains a right index", () => {
    expect(addFunction[addFunction.length - 1].index).toBe(0);
  });

  test("add a object", () => {
    expect(addFunction).toEqual([
      {
        description: "Hello",
        status: false,
        index: 0,
      },
    ]);
  });

  test('add task to DOM', () => {
      expect(checkElementsInTaskDOM()[3]).toBeDefined();
  })
});

describe("Test remove", () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML =
    "<div>" +
    '<input type="text" name="task" id="task" class="input-task" value="Hello">' +
    '<ul class="container-list">' +
    '<li data-id="0" class="item"><i class="fas fa-trash-alt remove"></i></li>' +
    '<li data-id="1" class="item"><i class="fas fa-trash-alt remove"></i></li>' +
    '<li data-id="2" class="item"><i class="fas fa-trash-alt remove"></i></li>' +
    "</ul>" +
    "</div>";

  const getDataLocalStorage = jest.fn();
  getDataLocalStorage.mockReturnValue([
    {
      description: "chocolate",
      status: false,
      index: 0,
    },
    {
      description: "candy",
      status: true,
      index: 1,
    },
    {
      description: "pie",
      status: false,
      index: 2,
    },
  ]);

  const bundleRefreshHandlersAndUpdate = (list) => {
    let firstArray = [];
    let secondArray = [];
    for (let i = 0; i <= list.length; i++) {
      firstArray.push(i);
    }
    list.forEach((element) => secondArray.push(element.index));

    let difference = firstArray.filter((x) => secondArray.indexOf(x) === -1);
    let templateString = `li[data-id="${difference[0]}"]`;
    let element = document.querySelector(templateString);
    element.remove();
  };

  const checkNumberTask = () => {
    return [...document.querySelector(".container-list").children].length;
  };

  let element = document.querySelector('li[data-id="0"] .remove');

  //  Act --------------------------------------------------------------------------->
  const removeTask = (element) => {
    const isRemoveIcon = element.classList.contains("remove");
    if (isRemoveIcon) {
      const listTasks = getDataLocalStorage();
      const id = parseInt(element.parentElement.dataset.id, 10);
      listTasks.splice(id, 1);
      bundleRefreshHandlersAndUpdate(listTasks);
      return listTasks;
    }
  };

  //  Assert --------------------------------------------------------------------------->
  test("Task is removed from Array", () => {
    expect(removeTask(element)).toHaveLength(2);
  });

  test("Task is removed from DOM", () => {
    expect(checkNumberTask()).toBe(2);
  });
});
