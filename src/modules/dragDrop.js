let dragElement;

const dragStart = (e) => {
    e.currentTarget.style.opacity = '0.5';

    dragElement = e.currentTarget;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
} 
const dragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
}

const dragOver = (e) => {
    e.preventDefault();
}

const dragEnter = (e) => {
    // 
}

const dragLeave = (e) => {
    // 
}

const dragDrop = (e) => {
    e.stopPropagation();

    if (dragElement !== e.currentTarget) {
        dragElement.innerHTML = e.currentTarget.innerHTML;
        e.currentTarget.innerHTML = e.dataTransfer.getData('text/html');
      }
}

export const refrestTargetDragDrop = () => {
    let tasks = document.querySelectorAll('.container-list .item');

    tasks.forEach(task => {
      task.addEventListener('dragstart', dragStart);
      task.addEventListener('dragend', dragEnd);
      task.addEventListener('dragover', dragOver);
      task.addEventListener('dragenter', dragEnter);
      task.addEventListener('dragleave', dragLeave);
      task.addEventListener('drop', dragDrop);
    })
}
