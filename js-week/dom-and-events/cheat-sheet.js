// show how to add a class!
// -> element.classList.add("className");

// show how to deal with multiple elements
// SHOW THAT YOU CAN QUERY SELECT INSIDE A QUERY SELECT
cards.forEach((card) => {
  console.log(card.querySelector('p').innerText);
})

// Accessing data-sets!
// Data sets are super useful for passing information from the back-end to the front-end (later in the bootcamp).
// cards.forEach((card) => {
//   console.log(card.dataset.firstName);
// })

document.querySelector('#mercedes').insertAdjacentHTML('beforeend', '<p>this is the inserted HTML element</p>')

// 'blur' event example:
const input = document.querySelector('#driver-name');
input.addEventListener('blur', (event) => {
  if (event.currentTarget.value == "") {
    alert('Please fill out with a name!');
  }
})


// Button that "adds" a new driver
// #1 pick the correct button html element
const addButton = document.querySelector('#add');
// #2 Define a function that 'adds' the new driver
const addDriver = () => {
  const newDriver = document.querySelector('#renault');
  newDriver.classList.toggle('noshow');
}
// #3 add the event listener on the button with the correct callback
addButton.addEventListener('click', addDriver);


// Button that hides all the drivers
// #1 - pick the button html element
const hideButton = document.querySelector('#hide');
// #2 - Define a function that toggles the 'noshow' class
const hideDrivers = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.toggle("noshow"));
}
// #3 add an event listener that will have the previous function as a callback.
hideButton.addEventListener('click', hideDrivers);

// INSERTING HTML

// element.insertAdjacentHTML(position, text);

// Parameters

// position
// A DOMString representing the position relative to the element; must be one of the following strings:
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.

// text
// The string to be parsed as HTML or XML and inserted into the tree.
