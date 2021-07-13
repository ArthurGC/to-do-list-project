export const listContainer = document.querySelector(".container-list");

export const createItemTask = (task) => {
  if (task.completed) {
    listContainer.insertAdjacentHTML(
      "beforeend",
      `<li draggable="true" class="item">
      <input type="checkbox" data-id="${task.index}" checked>
      <label class="text-task" data-id="${task.index}" contenteditable=true>${task.description} </label><br>
      <i class="fas fa-ellipsis-v icon-item"></i>
      </li>
      `
    );
  } else {
    listContainer.insertAdjacentHTML(
      "beforeend",
      `<li draggable="true" class="item">
      <input type="checkbox" data-id="${task.index}">
      <label class="text-task" data-id="${task.index}" contenteditable=true>${task.description}</label><br>
      <i class="fas fa-ellipsis-v icon-item"></i>
      </li>
      `
    );
  }
};