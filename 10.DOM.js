/*
DOM (Document Object Model)

- DOM is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes. Each node in the tree represents an element in the document.

*/

/*
Window Object

- The window onject represents an open window in a browser. It is browser's object(not JavaScript's) and is automatically created by browser.

- It is a global object with lots of properties and methods. It is used to interact with the browser and the document.

*/

/*
Dom manipulation

- DOM manipulation is the process of changing the structure of a document by adding, removing, or modifying elements.

- It is a crucial part of web development, as it allows developers to dynamically update the content of a web page.

Types of DOM manipulation

    - Selecting with id : document.getElementByid("myId")

    - Selecting with class : document.getElementsByClassName("myClass")

    - Selecting with tag : document.getElementsByTagName("p")

    - Query Selector : document.querySelector(".myId/myClass/ tagName")    // returns the first element that matches the specified selector

    - Query Selector All : document.querySelectorAll(".myId/myClass/ tagName") // returns all elements that match the specified selector

*/


// Selecting with id

let header = document.getElementById("heading");
console.dir(header); // Output: <h1 id="heading">Heading</h1>


// Selecting with class

let header1 = document.getElementsByClassName("heading1");
console.dir(header1); // Output: NodeList(1) [ <h1 class="heading">


// Selecting with tag

let para = document.getElementsByTagName("p");
console.dir(para); // Output: NodeList(2) [ <p>Paragraph 1</p


// Query Selector

let elements = document.querySelector("h2");
console.dir(elements); // Output: <h2>Heading 2</h2>

let elements1 = document.querySelector(".heading1");
console.dir(elements1); // Output: <h1 class="heading">Heading</h1>


// Query Selector All

let elements2 = document.querySelectorAll("#heading");
console.dir(elements2); // Output: NodeList(2) [ <h1 class="heading">

let elements3 = document.querySelectorAll(".heading1");
console.dir(elements3); // Output: NodeList(1) [ <h1 class="heading1


/*
Checking Properties of an Element :

-> tagName : returns the name of the tag

-> innerText : returns the text content of the element and all its childen

-> innerHTML : returns the plain text or HTML contents in the element

-> textContent : returns textual content even for hidden elements
*/


// Checking Properties of an Element

let headers = document.getElementById("heading");


console.log(headers.tagName); // Output: H1

console.log(headers.innerText); // Output: Heading

console.log(headers.innerHTML); // Output: <span>Heading</span>

console.log(headers.textContent); // Output: Heading