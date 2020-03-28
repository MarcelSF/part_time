// Objects

let bob = { name: 'bob', age: 42 };          // Object
let bob2 = { 'name': 'bob', 'age': 42 };    // Object (same thing, different syntax)

// A simple musician object:
const musician = {
  firstName: "Ozzy",
  lastName: "Osbourne"
};

console.log(typeof musician);
// => "object"

console.log(musician);

console.log(musician.firstName);
// => "Ozzy"
console.log(musician['firstName']); // Another way
// => "Ozzy"
musician.firstName = "Tony";
console.log(musician.firstName);
// => "Tony"

// FUNCTIONS:

// Remember to use the arrow notation!

// Square Function
const square = (x) => {
  return x * x;
};

// Or even shorter, with **implicit** return.
// const square = x => x * x;

// Capitalize function:

// defining the function:
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};

// calling the function:
capitalize("wagon");

// Greet function:

const greet = (name) => {
  console.log(`Hello, ${capitalize(name)}`) // here we call the capitalize function that we defined on line 40.
};

greet('milene');

// It's just really to write less code, and to have the context inside the function equal to the context where the function was called.

// If you declare a function the old way, inside it this will refer to the function's context, and not the context where we called the function
