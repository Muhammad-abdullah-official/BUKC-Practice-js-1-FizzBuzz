//Primitives and non-primitives

// console.log('Abdullah');

// let num1 = 15, num2 = 3;
// console.log("Value1 + Value2 = " + (num1 + num2));
// console.log("Value1 - Value2 = " + (num1 - num2));
// console.log("Value1 / Value2 = " + num1 / num2);
// console.log("Value1 x Value2 = " + num1 * num2);
// console.log("Value1 % Value2 = " + num1 % num2);

//output
// Abdullah
// Value1 + Value2 = 18
// Value1 - Value2 = 12
// Value1 / Value2 = 5
// Value1 x Value2 = 45
// Value1 % Value2 = 0

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i + '  FIZZBUZZ');
//   } else if (i % 3 == 0) {
//     console.log(i + '  FIZZ');
//   } else if (i % 5 == 0) {
//     console.log(i + '  BUZZ');
//   } else {
//     console.log(i + '  ');
//   }
// }

//output
// 1
// 2
// 3  FIZZ
// 4
// 5  BUZZ
// 6  FIZZ
// 7
// 8
// 9  FIZZ
// 10  BUZZ
// 11
// 12  FIZZ
// 13
// 14
// 15  FIZZBUZZ

// let arr1 = ['Asad', 'Ahmed', 'Hamza', 'Basit', 'Ahad'];
// let arr2 = ['Abdullah', 'Ammad', 'Talha', 'Ehtesham', 'Faizan'];

//let var const

// v = 14;
// console.log(v);
// let v;

//error let is not hoisting variable
//hoisting run time pr decleration ko top of the code le aata hei
//it is only apply on var and a function

// vr = 12;
// console.log(vr);
// var vr;

//output is 12

//primitives and references data types in js
// primitives = number string null undefined boolean.  primitive data types are pass by value
// references or non-primitive = []  ()  {} array and object   non-primitive data types are pass by reference
// aisi koi b value jis ko copy krne pr real copy nhi hota blke os main value ka refernce pass ho jata hei
// primitive ki value change ho skti hei

// let a = 5;
// let b = a; // primitive
// console.log(a);
// console.log(b);
// // output 5 , 5

// // ab b me kuch add krein
// b += 5;
// console.log(b); // output  = 10 means primitive value change ho skti hei q k ye pass by value hoti hei

// b = 'asad';
// console.log(b); // output asad means k is ki data type b change ho skti hei
// console.log(typeof b); // now type of b is string

// non-primitive data types

// let arr = ['as', 'bs', 'cs'];
// let arr2 = arr;
// console.log(arr);
// console.log(arr2);

// arr2[0] = 'bscs';
// console.log(arr2);
// console.log(arr);

// output
// [ 'as', 'bs', 'cs' ]
// [ 'as', 'bs', 'cs' ]
// [ 'bscs', 'bs', 'cs' ]
// [ 'bscs', 'bs', 'cs' ]

// let num1 = 2;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num2 = 5;
// console.log(num2);
// console.log(num1);

// let a = 5;
// let b = a; // b gets the value of a (copying the value)

// let obj1 = { name: 'Alice' };
// let obj2 = obj1; // obj2 gets a reference to the same object as obj1
// obj2.name = 'Bob'; // This will also change obj1's name to "Bob"
// console.log(obj1);
// console.log(obj2);
