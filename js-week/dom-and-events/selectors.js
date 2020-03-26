// THE MOST IMPORTANT SELECTOR:

document.querySelector(CSS_SELECTOR); // - > insert and ID, class, etc, to find that element.
// querySelector returns the first element it finds!

// You can call querySelector on any element.

// REMEMBER THAT YOU CAN COMBINE SELECTORS
document.querySelector('ul#players > .active a.btn');
// The child combinator (>) is placed between two CSS selectors.
// It matches only those elements matched by the second selector that are the direct children of elements matched by the first.


// HTML example:

// <p class="red">A red paragraph</p>

// <ul id="players">
//   <li class="green">Luke</li>
//   <li class="red">Anakin</li>
// </ul>

const list = document.querySelector("#players"); // -> selects the unordered list html element with the id #players
const element = list.querySelector(".red"); // -> selects the p html element of the class .red
console.log(element.innerText); // -> Will output "A red paragraph"
list.insertAdjacentHTML("beforeend", "<li>Obi-Wan</li>"); // -> Will insert the <li>Obi-Wan</li> at the end of the list element before the closing tag.

// SELECTING MULTIPLE ELEMENTS
// Use document.querySelectorAll();

// <ol id="fifa-wins">
//   <li>Brazil (5 wins)</li>
//   <li>Germany (4 wins)</li>
//   <li>Italy (4 wins)</li>
//   <li>Argentina (2 wins)</li>
//   <li>Uruguay (2 wins)</li>
// </ol>


const countries = document.querySelectorAll("#fifa-wins li");
countries.forEach((item) => {
  console.log(item.innerText); // -> will print the text of each <li> element.
});
