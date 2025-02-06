/*

Data Types in JavaScript

1. Primitive Data Types
    a. Number
    b. String
    c. Boolean
    d. Null
    e. Undefined
    f. Symbol
    g. BigInt

2. Non-Primitive Data Types
    a. Object
    b. Array
    c. Function
    d. Date
    e. RegExp
    f. Map and Set
    g. WeakMap and WeakSet
    h. JSON


*/

// Primitive Data Types

// Number
let num = 10;
console.log(num);

// String
let str = 'Hello World';
console.log(str);

// Boolean
let isTrue = true;
console.log(isTrue);

// Null
let nullVar = null;
console.log(nullVar);

// Undefined
let undef = undefined;
console.log(undef);

// Symbol
let sym = Symbol('My Symbol');
console.log(sym);

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;

//--------------------------------------------------------------

// Non-Primitive Data Types

// Object
let obj = {
    name: 'John Doe',
    age: 30
};
console.log(obj);

const student ={
    fullName: "John Doe",
    age: 30,
    cgpa: 3.92,
    isPass: true,
}

student["fullName"] = "Rahim Mia";

console.log(student["fullName"]);

// Array
let arr = [10, 20, 30];
console.log(arr);

// Function
let func = function() {
    return 'Hello';
};
console.log(func());

// Date
let date = new Date();
console.log(date);

// RegExp
let regExp = /hello/;

// Map and Set
let map = new Map();
let set = new Set();

// WeakMap and WeakSet
let weakMap = new WeakMap();
let weakSet = new WeakSet();

// JSON
let json = JSON.stringify({name: 'John Doe'});
console.log(json);

// JSON.parse
let parsedJson = JSON.parse(json);
console.log(parsedJson);