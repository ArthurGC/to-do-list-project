export const checkBoxStatus = (element) => {
        changeStyleTask(element.checked,element);
}

const changeStyleTask = (bool,element) => {
    if (bool) {
        element.nextElementSibling.style.textDecoration = 'line-through';
        element.nextElementSibling.style.color = '#bbb';
    } else {
        element.nextElementSibling.style.textDecoration = '';
        element.nextElementSibling.style.color = '';
    }
}

