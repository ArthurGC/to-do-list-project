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
    let checkBoxDom = document.querySelector(".checkbox");
    return checkBoxDom.getAttribute("checked");
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
