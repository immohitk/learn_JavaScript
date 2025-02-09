/*
Attributes in DOM

=> Attributes are used to store additional information about an element.

            - getAttribute(attr) // to get the attribute value

            - setAttribute(attr, value) // to set the attribute value

*/


let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let names = div.getAttribute("name")
console.log(names);

let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));




/*

Style in DOM

=> Style is used to add styles to an element.

        - node.style   // to access the style of an element
*/


let div1 = document.querySelector("div");

div.style.backgroundColor = "red";
div.style.color = "white";
div.style.fontSize = "30px";
div.style.fontFamily = "Arial";


/*
Insert Element in DOM

=> Insert Element is used to insert an element in the DOM.

let el = document.createElement("div");

        - node.append(el)   // adds at the end of node(inside)
        - node.prepend(el)  // adds at the beginning of node (inside)
        - node.before(el)    // adds before the node (outside)
        - node.after(el)     // adds after the node (outside)
*/

// Append
let newBtn = document.createElement("button");
newBtn.innerText = "Append Button";
console.log(newBtn);

let div2 = document.querySelector("div");
div2.append(newBtn);


// Prepend
let newBtn2 = document.createElement("button");
newBtn2.innerText = "Prepend Button";
console.log(newBtn2);

let div3 = document.querySelector("div");
div3.prepend(newBtn2);


// Before
let newBtn3 = document.createElement("button");
newBtn3.innerText = "Before Button";
console.log(newBtn3);

let div4 = document.querySelector("div");
div4.before(newBtn3);


// After
let newBtn4 = document.createElement("button");
newBtn4.innerText = "After Button";
console.log(newBtn4);

let div5 = document.querySelector("div");
div5.after(newBtn4);



/*
Delete Element in DOM

=> Delete Element is used to delete an element in the DOM.

        - node.remove()   // removes the node from the DOM
*/


let para1 = document.querySelector("p");
para1.remove();