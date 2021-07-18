export const getElement = (identifier) => {
    return document.querySelector(identifier);
}

export const getElements = (identifier) => {
    return [...document.querySelectorAll(identifier)];
}
export const getChildren = (element) => {
    return [...element.children];
}

export const getElementValue = (identifier) => {
    return document.querySelector(identifier).value;
}

export const createElement = (identifier) => {
    return document.createElement(identifier);
}
