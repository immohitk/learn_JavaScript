/*

Conditional Statements
----------------------------
-> Conditional statements are used to perform different actions based on different conditions.

-> Conditional statements are used to decide the flow of execution based on different conditions.

-> JavaScript supports the following types of conditional statements:
    - if statement
    - if...else statement
    - if...else if...else statement
    - switch statement

-> Terenary Operator
    - It is a shorthand for if...else statement.
    - It is used to assign a value to a variable based on a condition.
*/

// ----------------------------------------------

// 1. if statement

// Syntax:
/*
if(condition) {
    // code block
}
*/

// Example 1:
let age = 20;
if(age >= 18) {
    console.log("You are eligible to vote");
}

if(age < 18) {
    console.log("You are not eligible to vote");
}

// Example 2:
let mode = "Dark";
let colour;

if(mode === "light") {
    colour = "White"
}

if(mode === "Dark") {
    colour = "Black"
}

console.log(colour);



// ----------------------------------------------

// 2. if...else statement

// Syntax:
/*
if(condition) {
    // code block
}
else {
    // code block
}
*/

// Example 1:
let marks = 70;
let result;

if(marks >= 35) {
    result = "Pass";
}
else {
    result = "Fail";
}

console.log(result);



//----------------------------------------------

// 3. if...else if...else statement

// Syntax:
/*
if(condition1) {
    // code block
}
else if(condition2) {
    // code block
}
else {

}
*/

// Example 1:
let code = 200;
let message;

if(code === 200) {
    message = "Success";
}
else if(code === 404) {
    message = "Not Found";
}
else if(code === 500) {
    message = "Internal Server Error";
}   
else {
    message = "Unknown Error";
}

console.log(message);



// ----------------------------------------------

// 4. switch statement

// Syntax:
/*
switch(expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
*/

// Example 1:
let day = 5;
let dayName;

switch(day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid Day";
}


console.log(dayName);



// ----------------------------------------------

// Terenary Operator

// Syntax:
/*
(condition) ? value1 : value2
*/

// Example 1:
let age1 = 20;
let result1 = (age1 >= 18) ? "Eligible" : "Not Eligible";
console.log(result1);

// Example 2:
let mode1 = "Dark";
let colour1 = (mode1 === "light") ? "White" : "Black";
console.log(colour1);