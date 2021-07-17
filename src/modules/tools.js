export const getElement = (identifier) => {
    return document.querySelector(identifier);
}

export const getElements = (identifier) => {
    return document.querySelectorAll(identifier);
}

export const getElementValue = (identifier) => {
    return document.querySelector(identifier).value;
}
