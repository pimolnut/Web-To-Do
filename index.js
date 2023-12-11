// Select the heading element
let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');


function showMessage() {
    message.innerHTML = 'time out'
}

discountButton.addEventListener('click', showMessage);
// Change the text content of the heading
heading.textContent = 'Hello, JavaScript!';
