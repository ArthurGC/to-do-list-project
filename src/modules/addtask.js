export class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
export const inputTask = document.querySelector('.input-task');

export const addTask = (tasks, input) => {
  const newTask = new Task(input.value,false,tasks.length);
  tasks.push(newTask);
}
