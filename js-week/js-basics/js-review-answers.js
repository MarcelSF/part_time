// Small review for Batch #354

// How to print something?
console.log("hello world!");

// how to see the type of something?
console.log(typeof(1));

// How to change data types?
Number.parseInt('23', 10); // => 23
// 10 => An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string. Be careful—this does not default to 10!

(42).toString();
// => '42'

// let or const?
const pi = 3.14;
let myAge = 32;

// Defining an Array
const bandMembers = ['Jimmy Page', 'John Bonham', 'John Paul Jones', 'Robert Plant'];

// How to use the Each loop?
bandMembers.forEach((member) => {
  console.log(`${member} is an integral part of Led Zeppelin`);
});

// Defining an Object
const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

// reading / setting properties
student.firstName = "Romain"
console.log(student.firstName);


// Defining a function (ES6 arrow syntax)
const myFunction = (myparameter) => {
  console.log(myparameter + ' is my argument');
};

// Calling a function
myFunction('Hello, I am an argument!');

// Logical flow example:
const quarantine = true;

if (quarantine == true) {
  console.log("Stay home!");
} else {
  console.log("Go to Le Wagon :D");
}

