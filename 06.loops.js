// Loops in javaScript

/*
- Loops are used to execute the same block of code again and again, as long as a certain condition is met.
- In JavaScript we have the following types of loops:
    - for loop
    - while loop
    - do while loop
    - for in loop
    - for of loop
*/


// 1. for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}


for(let count=1; count<=10; count++){
    console.log("Hello World");
}


// ----------------------------------------------

// 2. while loop

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


let k = 0;
do{
    console.log(k);
    k++;
}
while(k < 5);



let count2 = 1;
do{
    console.log("hello friends");
    count2++;
}
while(count2 <= 10);



// ----------------------------------------------

// 4. for in loop


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


let colors = ["Red", "Green", "Blue", "Yellow"];

for(let color of colors){
    console.log(color);
}




let numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
    console.log(number);
}