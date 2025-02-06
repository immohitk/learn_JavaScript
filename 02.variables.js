// variables are containers of data

/*
Variable Rules:

1. Variable names can only contain letters, numbers, underscores, or dollar signs.

2. Variable names case-sensitive; "a" & "A" are different variables.

3.Reserved words (like JavaScript keywords) cannot be used as variable names.

4.only letters, digits,underscore(_) and dollar sign($) are allowed in variable names.(no spaces or special characters)

*/


/*
let, const, var

var: it is a keyword used to declare a variable in JavaScript. It is function-scoped, which means it is only available within the function in which it is declared.
: Variable can be re-declared and updated.A global scope variable.

let: it is a keyword used to declare a block-scoped variable in JavaScript. It is block-scoped, which means it is only available within the block in which it is declared. 
: Variable cannot be re-declared but can be updated.A block scope variable.

const: it is a keyword used to declare a constant variable in JavaScript. It is block-scoped, which means it is only available within the block in which it is declared.
: Variable cannot be re-declared or updated.A block scope variable.
*/

age = 25; // number
fullname = "John"; // string
isMarried = false; // boolean
salary = 2500.50; // float

console.log(age);
console.log(fullname);
console.log(isMarried);
console.log(salary);


// --------------------------------------------
// var

var FullName = "John";
var FullName = "Doe";
var FullName = "Smith";

console.log(FullName);


// --------------------------------------------
// let

let number = 25; 
number = 30;

console.log(number);


// --------------------------------------------
// const

const PI = 3.14;
// PI = 3.15; // error

console.log(PI);





// --------------------------------------------
// Block Scope

{
    let x = 10;
    console.log(x);
}

{
    let x = 20;
    console.log(x);
}