export const removeAllItems = (tasks, container) => {
  container.innerHTML = '';
  tasks = [];
};

export const removeAllIcon = document.querySelector('.refresf-icon');

export const clearCompletedTasks = document.querySelector('.btn-clear');

export const removeCompletedItem = (tasks) => {
  const newtasks = tasks.filter((task) => task.completed === false);
  return newtasks;
};

export const removeSelectedItem = (tasks, index) => {
  tasks.splice(parseInt(index, 10), 1);
  tasks.forEach((task, index) => {
    task.index = index;
  });
};
