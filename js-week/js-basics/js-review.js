// Small review for Batch #354

// How to print something?
console.log("hello world!");

// how to see the type of something?
console.log(typeof(42));

// How to change data types?
console.log((42).toString());

console.log(Number.parseInt("42", 10));

// let or const?


const pi = 3.14

let myAge = 32

// Defining an Array

const bandMembers = ['Jimmy Page', 'John Bonham', 'John Paul Jones', 'Robert Plant']

// console.log(bandMembers);
// // How to use the Each loop?

// bandMembers.forEach((member) => {
//   console.log(`${member} is an integral part of Led Zeppelin`);
// });
// Defining an Object
const student = {
  firstName: "Andre",
  lastName: "Ferrer"
}

// Reading / setting properties of an Object
student.lastName = "Romeiro";
console.log(student.lastName);
// Defining a function
const square = (number) => {
  return number * number;
}
// Calling a function
console.log(square(4));

// Logical flow example:
const quarantine = true;

if (quarantine === true) {
  console.log("Stay home!");
} else {
  console.log("You can leave the house!");
}



















