// Loops in javaScript

/*
- Loops are used to execute the same block of code again and again, as long as a certain condition is met.
- In JavaScript we have the following types of loops:
    - for loop
    - while loop
    - do while loop
    - for in loop
    - for of loop

-> Infinite Loop: A loop becomes infinite loop if a condition never becomes false. The block of code inside the loop will keep executing infinitely.
*/


// 1. for loop

// The for loop is used when you know in advance how many times the script should run.


for(let i = 0; i < 5; i++){
    console.log(i);
}



let sum = 0;
for(let j=1; j<=5; j++){
    sum = sum + j;
}

console.log("sum = ", sum);


// ----------------------------------------------

// 2. while loop

// The while loop loops through a block of code as long as a specified condition is true.

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}



let count1 = 1;
while(count1 <= 10){
    console.log("hey there");
    count1++;
}


// ----------------------------------------------

// 3. do while loop

// The do while loop is similar to the while loop, except that the condition is always executed after the statements inside the loop have been executed.


let k = 1;
do{
    console.log("k = ", k);
    k++;
}
while(k <= 5);



let count2 = 1;
do{
    console.log("hello friends");
    count2++;
}
while(count2 <= 10);



// ----------------------------------------------

// 4. for in loop

// The for in loop is used to loop through an object's properties.


let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(let key in person){
    console.log(key, person[key]);
}




let fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let index in fruits){
    console.log(index, fruits[index]);
}


// ----------------------------------------------

// 5. for of loop

// The for of loop is used to loop through an iterable object (array, string, etc).


let colors = ["Red", "Green", "Blue", "Yellow"];

for(let color of colors){
    console.log(color);
}




let numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
    console.log(number);
}