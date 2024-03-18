document.body.style.background = "red";
console.dir(document.body.style.background);
console.dir(document.head);

/*In JavaScript, the Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML or XML documents and provides a way to interact with and manipulate them. Here's a basic overview of how you can work with the DOM in JavaScript:

Accessing Elements:
You can access elements in the DOM using various methods such as getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.


// Access an element by its id
let elementById = document.getElementById('myElementId');

// Access elements by class name
let elementsByClassName = document.getElementsByClassName('myClassName');

// Access elements by tag name
let elementsByTagName = document.getElementsByTagName('div');

// Access an element using CSS selector
let elementByQuerySelector = document.querySelector('.mySelector');

// Access multiple elements using CSS selector
let elementsByQuerySelectorAll = document.querySelectorAll('.mySelector');


// Change text content
elementById.textContent = 'New Text';

// Change HTML content
elementById.innerHTML = '<strong>New HTML</strong>';

// Change attributes
elementById.setAttribute('src', 'new-image.jpg');

// Add or remove classes
elementById.classList.add('newClass');
elementById.classList.remove('oldClass');

// Create new elements
let newElement = document.createElement('div');
newElement.textContent = 'New Element';
document.body.appendChild(newElement);

// Remove elements
document.body.removeChild(newElement);


console.log() and console.dir() are both methods provided by the console object in JavaScript for logging information to the browser's console. However, they serve different purposes and behave differently.

console.log():

Purpose: console.log() is primarily used for logging textual representation of JavaScript values to the console.
Behavior: It accepts one or more arguments, which can be any JavaScript value (strings, numbers, objects, arrays, etc.), and logs them to the console. If multiple arguments are provided, they are separated by spaces in the output.

console.dir():

Purpose: console.dir() is used to display an interactive list of properties of the specified JavaScript object.
Behavior: It accepts a single argument, which is typically an object. When called with an object, it displays a collapsible list of properties of that object in the console, allowing you to inspect its structure more easily.
*/
