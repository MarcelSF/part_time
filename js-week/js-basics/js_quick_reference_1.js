// To run a file, remember to use node on the terminal.
// ex: node hello.js

// Data types:

"Hello Le Wagon"            // string
42                          // number
3.14                        // number
true                        // boolean

// checking the type of something:

typeof("LeWagon"); // -> should return string!

// If you want to "print" or "p" something, use console.log()
// console.log() is GREAT for debugging!

console.log(typeof("LeWagon")); // -> will print "string"

// To assing variables, use let (if the variable will be re-assigned during runtime)
// or const (if the variable won't be re-assigned).
// Declare all local variables with either const or let. Use const by default, unless a variable needs to be reassigned.
// The var keyword must NOT be used. -> From the google styleguide.

const hello = "Hello world"

// if you try to reassing the value of hello, you will get an error!
// Thrown: TypeError: Assignment to constant variable.

// Best practice for variables and constants:
// You should use lowerCamelCase.
// You can include digits, except at the beggining.
// You can start with the $ sign.
// You can start with underscore (_)
// You SHOULD NOT use snake_case (this is for Ruby and Python)
// DO NOT use other special characters.
// DO NOT use key words (ex: let let, or const let, etc)

let fullName = "Andre Ferrer"

fullName = "Milene Cardoso"

// reassigning the value of name is not a problem, because it is declared with let!
console.log(fullName); // -> will print "Milene Cardoso"
// For the name variable, you can freely reassing its value.

fullName.toUpperCase();
// => "MILENE CARDOSO"

fullName.toLowerCase();
// => "milene cardoso"


// Changing a string into integer and integer into string:
// More complicated than Ruby to_i and to_s

Number.parseInt('2020', 10);
// => 2020

(2020).toString();
// => '2020'

// Data structures:

// ARRAYS!
[ 'Hello', 'Le', 'Wagon', 354 ]    // Array

// Array split!
const helloString = "Hello there, batch #354!";
const words = helloString.split(" ");
console.log(words);
// => [ 'Hello', 'there,', 'batch', '#354!' ]
console.log(words.length);
// => 4

// Array CRUD:
const airplanes = [];
airplanes.push("Concord"); // Create
airplanes[0];            // Read
airplanes[0] = "Boeing 747"; // Update
airplanes.splice(0, 1);  // Delete (1 item at index 0)

// forEach loop:
const metallica = ["kirk", "robert", "lars", "james"];
metallica.forEach((horseman) => {
  console.log(`${horseman.toUpperCase()} is a member of Metallica`); // -> notice the string interpolation!
});

// Whereas Ruby just deals with nil and false as the 'falsy' values, JS deals with:
  // - false
  // - 0 (zero)
  // - “” (empty string)
  // - null
  // - undefined
  // - NaN (Not A Number)

// all of the values above are "falsy", so be careful!

// CONTROL FLOW!

const quarantine = true;

if (quarantine == true) {
  console.log("Stay home!");
} else {
  console.log("Go to Le Wagon :D");
}

// Ternary:

const raining = true;
const accessory = (raining ? "umbrella" : "sunglasses");

// In Javascript, we have couple of options for checking equality:

// == (Double equals operator): Known as the equality or abstract comparison operator
// === (Triple equals operator): Known as the identity or strict comparison operator

// The difference between == and === is that:

// == converts the variable values to the same type before performing comparison. This is called type coercion.
// === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.

// Example:
const one = 1;
const one_again = 1;
const one_string = "1";  // note: this is string

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_string); // true.
console.log(one === one_string); // false.



