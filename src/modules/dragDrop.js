let dragElement;

export const dragStart = (e) => {
    e.currentTarget.style.opacity = '0.5';

    dragElement = e.currentTarget;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
} 
export const dragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
}

export const dragOver = (e) => {
    e.preventDefault();
}

export const dragDrop = (e) => {
    e.stopPropagation();

    if (dragElement !== e.currentTarget) {
        let previousFirstId = dragElement.dataset.id;
        let previousSecondId = e.currentTarget.dataset.id;

        dragElement.innerHTML = e.currentTarget.innerHTML;
        e.currentTarget.innerHTML = e.dataTransfer.getData('text/html');

        dragElement.children[0].dataset.id = previousFirstId;
        dragElement.children[1].dataset.id = previousFirstId;
        e.currentTarget.children[0].dataset.id = previousSecondId;
        e.currentTarget.children[1].dataset.id = previousSecondId;
      }
}


