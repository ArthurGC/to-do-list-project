/**
 * @jest-environment jsdom
 */

const { expect, test } = require("@jest/globals");

describe('Test add-remove', () => {

    document.body.innerHTML =
        '<div>' +
        '<input type="text" name="task" id="task" class="input-task" value="Hello">' +
        '<ul class="container-list"></ul>' +
        '</div>';
        let event = {
            keyCode: 13
        }

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

        const add = (event) => {
            if (event.keyCode === 13) {
              let listTasks = getDataLocalStorage();
              let input = document.querySelector('.input-task');
              let inputValue = input.value;
              let newTask = new Task(inputValue, false, listTasks.length);
              listTasks.push(newTask);
              setDataLocalStorage(listTasks);
              input.value = '';
              renderTaskDom();
              refreshDragDropTarget();
              refreshDescriptions();
              return listTasks;
            }
          };


    test('add task to the list', () => {
        expect(add(event)).toHaveLength(1);
        getDataLocalStorage.mockReturnValue([]);
    })


    test('task contains a right index', () => {
        expect(add(event)[0].index).toBe(0);
        getDataLocalStorage.mockReturnValue([]);
    })

    test('add a object', () => {
        expect(add(event)).toEqual([{
            description: '',
            status: false,
            index: 0
        }]);
        getDataLocalStorage.mockReturnValue([]);
    })
});
