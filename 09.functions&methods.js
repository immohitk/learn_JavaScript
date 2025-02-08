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


/*
forEach loop in arrays

arr.forEach(callBackFunction)

- CallbackFunction : Here, it is a function to execute for each element in the array.

**NOTE** -> A callback function passed as an argument to another function, which is then executed inside the other function.

Syntax :- 

        arr.forEach((val) => {
        
            console.log(val);

        })
*/

 let arr = ["pune", "mumbai", "kolhapur", "satara"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})

/*

**IMPORTANT NOTE**

-> Higher order function

        - A function that accepts another function as an argument or returns a function as a result is called a higher order function.

        - forEach () is a higher order function because it accepts a callback function as an argument.

*/

// ==================================================

/*
Some more Array Methods

-> map ()
        - Creates a new array with the results of some operation. The value its callback returns are used to form new array

        - arr.map(callbackFnx(value, index, array))


Syntax -

        let newArr = arr.map((val) => {
            return val*2
        })



-> filter ()
        - Create a new array of elements that give true for a condition/filter.
        
        - Eg : all even elements

Syntax -
        let newArr = arr.filter((val) => {
            return val % 2 == 0
        })




-> Reduce ()
        - Perform some operation on each element of an array and return a single value.

        - Eg : sum of all elements in an array.


*/ 


// map()

let arr1 = [1, 2, 3, 4, 5];

let newArr = arr1.map((val) => {
    return val *2;
})

console.log(newArr); // [2, 4, 6, 8, 10]


// filter()

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr2 = arr2.filter((val) => {
    return val % 2 == 0;
})

console.log(newArr2); // [2, 4, 6, 8, 10]


// reduce()

let arr3 = [1, 2, 3, 4, 5];

const output = arr3.reduce((result, current) => {
    return result + current;
})

console.log(output); // 15



let arr4 = [1, 2, 3, 4, 5];

const output1 = arr4.reduce((result, current) => {
    return result > current ? result : current;
})

console.log(output1); // 5