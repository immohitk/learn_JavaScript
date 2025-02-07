// Strings in JavaScript

// Strings are a sequence of characters. They can be enclosed in single quotes or double quotes.


let str = "Hello, World!";

console.log(str.length) // String Length
console.log(str[1])    // String Indices


console.log("----------------------------------------")

/*
Templates literals in JavaScript

- A way to have embedded expressions in strings

            `this is a template literal`
*/

/*
String Interpolation

- To create strings by doing substitution of placeholders

            `string text $(expression) string text`
*/


let sentence =  `this is a Template literal`
console.log(typeof sentence) // Output: this is a Template literal


let obj = {
    item : "Pen",
    price : 10,  
};

console.log("The cost of", obj.item, "is", obj.price, "rupees.");

// Template Literals

let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output); // Output: The cost of Pen is  10 rupees


console.log("----------------------------------------")


// Escape Characters

console.log ("Hello\nWorld!") // next line
console.log ("Hello\tWorld!") // Tab space

let str2 = "Hello\tWorld!"
console.log(str2.length); //12  **NOTE - escape character is counted as 1 character not 2.

console.log("----------------------------------------")

/*
String Methods in JavaScript

-> These are built-in functions to manipulate a string

        - str.toUpperCase() - converts a string to uppercase
        - str.toLowerCase() - converts a string to lowercase
        - str.trim() - removes whitespaces
        - str.split() - splits a string into an array of words
        - str.slice(start, end) - extracts a part of a string
        - str.concat(str2) - concatenates two strings
        - str.replace(searchVal, newVal) - replaces a value in a string
        - str.charAT(idx) - returns a character at a specified index

        
**NOTE - strings are immutable in javascript i.e. we cannot change the value of a string once it is created. So, we can only return a new string with the desired changes.**

*/


// 1. str.toUppercase()

let str3 = "hello world!"
console.log(str3.toUpperCase()); // Output: HELLO WORLD!

console.log("----------------------------------------")

let str4 = "HELLO WORLD!"
console.log (str4.toLowerCase()); // Output: hello world!

console.log("----------------------------------------")

let str5 = "   hello  world!   "
console.log(str5.trim()); // Output: hello world!

console.log("---------------------------------------")

let str6 = "hello world!"
console.log(str6.split(" ")); // Output: ["hello", "world!"]

console.log("---------------------------------------")

let str7 = "hello world!"
console.log(str7.slice(1, 8)); // Output: ello wo

console.log("---------------------------------------")

let str8 = "hello world!"
console.log(str8.concat(" this is a new string")); // Output: hello world! this is a new string

console.log("---------------------------------------")

let str9 = "hello world!"
console.log(str9.replace("world!", "javascript")); // Output: hello javascript!

console.log("---------------------------------------")

let str10 = "hello world!"
console.log(str10.charAt(0)); // Output: h