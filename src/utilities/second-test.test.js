/**
 * @jest-environment jsdom
 */
const { expect, test, describe } = require("@jest/globals");
const LocalStorage = require("./localStorage.js");

describe("Update checkbox and task status", () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML =
    "<div>" +
    '<ul class="container-list">' +
    '<li data-id="0" class="item">' +
    '<input class="checkbox" type="checkbox">' +
    '<label class="text-task" contenteditable=true>Do the laundry</label>' +
    '<i class="fas fa-trash-alt remove"></i>' +
    "</li>" +
    "</ul>" +
    "</div>";

  const localStorage = new LocalStorage();
  let listTask = [
    {
      description: "Do the laundry",
      status: false,
      index: 0,
    },
  ];
  localStorage.setDataLocalStorage(listTask);
  let checkBox = document.querySelector(".checkbox");

  const getStatusCheckBoxDom = () => {
    return checkBox.checked;
  };

  // Act --------------------------------------------------------------------------->
  const refreshStatus = (element) => {
    const isCheckBox = element.classList.contains("checkbox");
    if (isCheckBox) {
      const listTasks = localStorage.getDataLocalStorage();
      const id = parseInt(element.parentElement.dataset.id, 10);
      if (!element.checked) {
        listTasks[id].status = true;
        element.nextElementSibling.classList.add("completed");
        element.setAttribute("checked", "true");
      } else {
        listTasks[id].status = false;
        element.nextElementSibling.classList.remove("completed");
        element.removeAttribute("checked");
      }
      localStorage.setDataLocalStorage(listTasks);
    }
  };

  refreshStatus(checkBox);

  test("change checkbox status to true in localStorage", () => {
    expect(localStorage.getDataLocalStorage()).toEqual([
      {
        description: "Do the laundry",
        status: true,
        index: 0,
      },
    ]);
  });

  test("change checkbox status to true in DOM", () => {
    expect(getStatusCheckBoxDom()).toBeTruthy();
  });
  
});

describe("Test remove completed task", () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML =
    "<div>" +
    '<ul class="container-list">' +
    '<li data-id="0" class="item">' +
    '<input class="checkBox" type="checkbox">' +
    '<label class="text-task" contenteditable=true>Do the laundry</label>' +
    '<i class="fas fa-trash-alt remove"></i>' +
    "</li>" +
    '<li data-id="1" class="item">' +
    '<input class="checkBox" type="checkbox" checked="true">' +
    '<label class="text-task" contenteditable=true>Wash my teeth</label>' +
    '<i class="fas fa-trash-alt remove"></i>' +
    "</li>" +
    '<li data-id="2" class="item">' +
    '<input class="checkBox" type="checkbox" checked="true">' +
    '<label class="text-task" contenteditable=true>Clean my house</label>' +
    '<i class="fas fa-trash-alt remove"></i>' +
    "</li>" +
    "</ul>" +
    "</div>";

  const localStorage = new LocalStorage();
  let listTask = [
    {
      description: "Do the laundry",
      status: false,
      index: 0,
    },
    {
      description: "Wash my teeth",
      status: true,
      index: 1,
    },
    {
      description: "Clean my house",
      status: true,
      index: 2,
    },
  ];
  localStorage.setDataLocalStorage(listTask);

  const bundleRefreshHandlersAndUpdate = (list) => {
    localStorage.setDataLocalStorage(list);

    const firstArrayIndex = [];
    const secondArrayIndex = [];
    for (let i = 0; i < listTask.length; i += 1) {
        firstArrayIndex.push(i);
    }
    list.forEach((element) => secondArrayIndex.push(element.index));

    const difference = firstArrayIndex.filter((x) => secondArrayIndex.indexOf(x) === -1);
    difference.forEach(index => {
        let identifier = `li[data-id="${index}"]`;
        document.querySelector(identifier).remove();
    })
  }

  const getTaskDomLength = () => {
    let tasksDom = [...document.querySelectorAll(".item")];
    return tasksDom.length;
  };

  // Act --------------------------------------------------------------------------->
  const removeTaskChecked = () => {
    const listTasks = localStorage.getDataLocalStorage();
    if (listTasks !== []) {
      const newListTask = listTasks.filter((task) => task.status === false);
      bundleRefreshHandlersAndUpdate(newListTask);
    }
  };

  // Assert --------------------------------------------------------------------------->

  removeTaskChecked();

  test("remove completed tasks from localStorage", () => {
    expect(localStorage.getDataLocalStorage()).toEqual([
      {
        description: "Do the laundry",
        status: false,
        index: 0,
      },
    ]);
  });

  test("change checkbox status to true in DOM", () => {
    expect(getTaskDomLength()).toBe(1);
  });
});
