/*
Operators in JavaScript
-> Operators are used to perform operations on variables and values.

1. Arithmetic Operators
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus
**   Exponentiation
++   Increment  -| Unary Operator
--   Decrement  -| Unary Operator

2. Assignment Operators
=    Assign
+=   Add and assign
-=   Subtract and assign
*=   Multiply and assign
/=   Divide and assign
%=   Modulus and assign

3. Comparison Operators
==   Equal to
===  Equal value and equal type
!=   Not equal
!==  Not equal value or not equal type
>    Greater than
<    Less than
>=   Greater than or equal to
<=   Less than or equal to

4. Logical Operators
&&   Logical and
||   Logical or
!    Logical not

*/

// Arithmetic Operators
let a = 5;
let b = 2;

console.log("a + b =", a + b); // 7
console.log("a - b =", a - b); // 3
console.log("a * b =", a * b); // 10
console.log("a / b =", a / b); // 2.5
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 25

//unary operators
console.log("a++ =", a++); // 5
console.log("a =", a); // 6
console.log("a-- =", a--); // 6
console.log("a =", a); // 5
console.log("++a =", ++a); // 6
console.log("--a =", --a); // 5

// Assignment Operators
let x = 10;
let y = 5;

x += y; // x = x + y
console.log("x =", x); // 15

x -= y; // x = x - y
console.log("x =", x); // 10

x *= y; // x = x * y
console.log("x =", x); // 50

x /= y; // x = x / y
console.log("x =", x); // 10

x %= y; // x = x % y
console.log("x =", x); // 0


// Comparison Operators
let p = 5;
let q = "5";

console.log("p == q =", p == q); // true
console.log("p === q =", p === q); // false
console.log("p != q =", p != q); // false
console.log("p !== q =", p !== q); // true
console.log("p > q =", p > q); // false
console.log("p < q =", p < q); // false
console.log("p >= q =", p >= q); // true
console.log("p <= q =", p <= q); // true


// Logical Operators
let m = true;
let n = false;

console.log("m && n =", m && n); // false
console.log("m || n =", m || n); // true
console.log("!m =", !m); // false
console.log("!n =", !n); // true