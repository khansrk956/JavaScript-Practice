// Primitive
// 7 types : String, Number, Boolean, null, undefined,VigInt,Symbol -make value unique.

// Reference(Non primitive)
// Array, Objects, Functions

// JavaScript is a dynamically typed language
// which means that data types of variables are determined
// by the value they hold at runtime and can change throughout
// the program as we assign different values to them.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; //undefined
const id = Symbol("123");
const anotherId = Symbol("123");

const heros = ["Sharukh", "Shaktiman", "Naagraj"]; //reference type
let obj = {
  name: "Sharukh khan",
  age: 22,
  email: "khansrk956@gmail.com",
};

const myFunction = function () {
  console.log("Hello World");
};

// myFunction();

// console.log(typeof obj);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (Primitive data use stack memory)- get copy of a value,
// Heap (Non-primitive memory) - get a reference of a value,

let myfullName = "Sharukh khan";

let anotherName = "Hiba saifi";

anotherName = "Hiba aur Saifi";
console.log(anotherName);

let userOne = {
  email: "khansrk956@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "hibasaifi@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
