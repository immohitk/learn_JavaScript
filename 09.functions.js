/*
Functions in JavaScript

-> Block of code that performs a specific task, can be invoked whenever needed.  

-> Function help us to reduce redendency of code and make it more reusable.
*/



/*
-> To make a function, we follow these two steps:

1. Function Definition : We define a function using the function keyword followed by the name of the function and the parameters it accepts. The function definition is enclosed within curly brackets {}.

syntax:

function functionName() {
// code to be executed
}


function functionName(param1, param2.....) {
// code to be executed
}



2. Function Call : We call the function using its name followed by the parameters it accepts. The function call is also enclosed within curly brackets {}.


syntax:

functionName();


*/

function myfunction() {
    console.log("Welcome Students");
    console.log("We are learning JavaScript");
}

myfunction();




function myMsg(msg){
    // parameter -> input
    console.log(msg);
}

myMsg("Hello JS!!"); // argument




function sum(x, y) {
    s = x + y;
    return s;
}

let val = sum(3, 4);
console.log(val);

/*
**NOTE** -> The parameters of our function, they are local variable of function and they have block scope.
*/



/*
Arrow Functions

-> Compact way of writing functions.

syntax :-

        const functionName = (param1, param2...) => {
            // code to be executed
            }
*/

// sum function
const arrowAdd = (a, b) => {
    return a + b;
}

let result = arrowAdd(5, 7);
console.log(result); // 12



// multiplication Function
const arrowMulti = (a, b) => {
    return a * b;
}

let result1 = arrowMulti(5, 7);
console.log(result1); // 35