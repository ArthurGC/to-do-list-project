export const checkBoxStatus = (element) => {
        changeStyleTask(element.checked,element);
}

const changeStyleTask = (bool,element) => {
    if (bool) {
        element.nextElementSibling.style.textDecoration = 'line-through';
        element.style.color = '#e7e7e7';
    } else {
        element.nextElementSibling.style.textDecoration = '';
        element.style.color = '';
    }
}

