// UI rendering functions

// Function to render a button
function renderButton(label, onClick) {
    const button = document.createElement('button');
    button.innerText = label;
    button.onclick = onClick;
    return button;
}

// Function to render a text input
function renderInput(placeholder) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    return input;
}

// Function to render a container
function renderContainer() {
    const container = document.createElement('div');
    return container;
}

// Export the functions
export { renderButton, renderInput, renderContainer };