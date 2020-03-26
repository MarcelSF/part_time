// If you select an html element, you can change it with a high degree of freedom through JS.

// You hide the element by changing its display attribute:

const element = document.querySelector(CSS_SELECTOR);

// Hide
element.style.display = "none";

// Show
element.style.display = "";

// You can all add or remove a class altogether from the element.
// If you ADD a class, the element will GAIN the styling defined for that class.
// If you REMOVE a class, the element will LOSE the styling defined for that class.
// Toggling a class will remove the class if the element has that class and vice-versa.

element.classList.add("red"); // -> adds the class ".red" to the element.
element.classList.remove("red"); // -> removes the class ".red" to the element.
element.classList.toggle("red"); // -> will toggle the class ".red" for the element.

// Accessing the value of an html element (like in a form)

// Our HTML:
// <input name="email" id="myemail" value="boris@lewagon.com" />
const emailInput = document.getElementById("myemail");

// Read
console.log(emailInput.value);

// Write
emailInput.value = "john@gmail.com";

// Extract text / HTML
// <a href="https://www.lewagon.com" id="home">Le Wagon <em>rocks</em></a>
const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML

// Dataset
// This will be specially useful when you move towards Rails, where you need to send back-end data to the front-end JS.

// <div id="user" data-uid="2471555" data-github-nickname="Papillard">
//   Boris Paillard
// </div>

const boris = document.getElementById('user');
// To access the dataset values, just type dataset.nameOfDataSet
console.log(boris.dataset.uid); // -> will return "2471555"
console.log(boris.dataset.githubNickname); // -> will return "Papillard"

