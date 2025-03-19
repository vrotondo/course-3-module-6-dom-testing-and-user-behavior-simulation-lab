// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function addElementToDOM(elementId, content) {
    const element = document.getElementById(elementId);
    if (!element) return null;

    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    element.appendChild(paragraph);

    return element;
}


function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return false;

    element.parentNode.removeChild(element);
    return true;
}


function simulateClick(targetElementId, content) {
    return addElementToDOM(targetElementId, content);
}


function handleFormSubmit(formId, outputElementId) {
    const form = document.getElementById(formId);
    const outputElement = document.getElementById(outputElementId);
    const errorMessage = document.getElementById('error-message');

    if (!form || !outputElement || !errorMessage) return false;

    const input = form.querySelector('input');
    if (!input) return false;

    const inputValue = input.value.trim();

    if (!inputValue) {
        errorMessage.textContent = 'Input cannot be empty';
        errorMessage.classList.remove('hidden');
        return false;
    }

    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');

    addElementToDOM(outputElementId, inputValue);

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            handleFormSubmit('user-form', 'dynamic-content');
        });
    }

    const simulateClickButton = document.getElementById('simulate-click');
    if (simulateClickButton) {
        simulateClickButton.addEventListener('click', () => {
            simulateClick('dynamic-content', 'Button Clicked!');
        });
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addElementToDOM,
        removeElementFromDOM,
        simulateClick,
        handleFormSubmit
    };
}
