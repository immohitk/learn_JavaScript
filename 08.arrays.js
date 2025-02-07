/* 
Arrays in JavaScript

    -> Collections of items 
    -> Can be of any data type (numbers, strings, booleans, objects, etc.)
    -> Can be of any size (0, 1, 1000, etc.)
    -> Can be modified after creation.
    -> Can be sorted, searched, and manipulated in various ways.

*/

let marks = [97, 86, 74, 98, 88];
console.log(marks);
console.log(marks.length); // length of array


let heros = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
console.log(heros);


/*
Array Indices   //    {indices -> plural form of index }

    -> Arrays are 0-indexed, meaning the first element is at index 0, the second at index 1, and so on.
    -> The last element is at index length - 1.


**NOTE** -> strings are immutable in JavaScript, but arrays are mutable.

*/

let marks2 = [97, 86, 74, 98, 88];
console.log(marks2[0]); // 97
console.log(marks2[8]); // undefined
marks2[0] = 99;
console.log(marks2);


/*
Looping Over a Array

    -> for loop
    -> for...of loop
    -> for...in loop

**NOTE** -> Loops are used to iterate over arrays and perform some operation on each element.
         -> following are the iterables
                - arrays
                - strings
                - sets
                - maps
                - objects (with some conditions)

*/

//1. for loop

let supHeros = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
for (let i = 0; i < supHeros.length; i++) {
    console.log(supHeros[i]);
}


//2. for...of loop

let supHeros2 = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
for (let hero of supHeros2) {
    console.log(hero);
}

//3. for...in loop

let supHeros3 = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
for (let index in supHeros3) {
    console.log(supHeros3[index]);
}

console.log("-----------------------------------");


/*

Array Methods

-> array method is a function that can be called on an array to perform some operation on it.
-> array methods return a new array and do not modify the original array.
-> array methods are used to perform operations like filtering, mapping, reducing, etc.
-> following are the array methods :-
        - push() : adds an element to the end of the array.
        - pop() : removes an element from the end of the array.
        - toString() : converts the array to a string.
        - concat() : joins multiple arrays & return a new array.
        -unshift(): adds an element to the beginning of the array.
        - shift(): removes an element from the beginning of the array.
        - slice() : returns a subset of the array.
        - splice() : adds, removes & replace elements from the array.

*/

//1. push() method
let list = ["potato", "apple", "litchi", "tomato"];
list.push("banana");
console.log(list);

//2. pop() method
let list2 = ["potato", "apple", "litchi", "tomato"];
list2.pop();
console.log(list2);

//3. toString() method
let list3 = ["potato", "apple", "litchi", "tomato"];
console.log(list3.toString());

//4. concat() method
let list4 = ["potato", "apple", "litchi", "tomato"];
let list5 = ["banana", "cherry", "date"];
console.log(list4.concat(list5));

//5. unshift() method
let list6 = ["potato", "apple", "litchi", "tomato"];
console.log(list6.unshift("banana", "cherry", "date"));
console.log(list6);

//6. shift() method
let list7 = ["potato", "apple", "litchi", "tomato"];
console.log(list7.shift());
console.log(list7);

//7. slice() method
let list8 = ["potato", "apple", "litchi", "tomato"];
console.log(list8.slice(1, 3));

//8. splice() method
let list9 = ["potato", "apple", "litchi", "tomato"];
list9.splice(1, 2, "banana", "cherry");
console.log(list9);