export const getElement = (identifier) => document.querySelector(identifier);

export const getElements = (identifier) => [...document.querySelectorAll(identifier)];
export const getChildren = (element) => [...element.children];

export const getElementValue = (identifier) => document.querySelector(identifier).value;

export const createElement = (identifier) => document.createElement(identifier);
