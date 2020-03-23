document.querySelector(CSS_SELECTOR); // - > insert and ID, class, etc, to find that element.
document.querySelector('ul#players > .active a.btn');

// querySelector returns the first element it finds!

// Inserting elements

list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

<p class="red">A red paragraph</p>

<ul id="players">
  <li class="green">Luke</li>
  <li class="red">Anakin</li>
</ul>

const list = document.querySelector("#players");
const element = list.querySelector(".red");
console.log(element.innerText);
// => ?
Anakin

<ol id="fifa-wins">
  <li>Brazil (5 wins)</li>
  <li>Germany (4 wins)</li>
  <li>Italy (4 wins)</li>
  <li>Argentina (2 wins)</li>
  <li>Uruguay (2 wins)</li>
</ol>

const countries = document.querySelectorAll("#fifa-wins li");
countries.forEach((item) => {
  console.log(item.innerText);
});

const list = document.querySelector('#fifa-wins');
list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');
