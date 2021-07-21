/**
 * @jest-environment jsdom
 */

const { expect, test } = require("@jest/globals");

describe("Test add", () => {
  // Arrange
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
  const renderTaskDom = jest.fn();
  const refreshDragDropTarget = jest.fn();
  const refreshDescriptions = jest.fn();

  //Act
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

  //   Assert
  test("add task to the list", () => {
    expect(add(event)).toHaveLength(1);
    getDataLocalStorage.mockReturnValue([]);
  });

  test("task contains a right index", () => {
    expect(add(event)[0].index).toBe(0);
    getDataLocalStorage.mockReturnValue([]);
  });

  test("add a object", () => {
    expect(add(event)).toEqual([
      {
        description: "",
        status: false,
        index: 0,
      },
    ]);
    getDataLocalStorage.mockReturnValue([]);
  });
});

describe("Test remove", () => {
  // Arrange

  document.body.innerHTML =
    "<div>" +
    '<input type="text" name="task" id="task" class="input-task" value="Hello">' +
    '<ul class="container-list">' +
    '<li data-id="0"><i class="fas fa-trash-alt remove"></i></li>' +
    '<li data-id="1"><i class="fas fa-trash-alt remove"></i></li>' +
    '<li data-id="2"><i class="fas fa-trash-alt remove"></i></li>' +
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

  //   Act
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

  //   Assert
  test("Task is removed from Array", () => {
    expect(removeTask(element)).toHaveLength(2);
  });

  test("Task is removed from DOM", () => {
    expect(checkNumberTask()).toBe(2);
  });
});
