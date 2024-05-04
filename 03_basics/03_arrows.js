const user = {
  username: "sharukh khan",
  price: 99,
  welcomMessage: function () {
    console.log(`${this.username} Welcome to website.`);
    console.log(this);
  },
};

// This refers to the current context when we define the
// function inside the object.
// context - means jiske bare me bat ho rahi hai.
// this - refers to the current variables inside object.

// user.welcomMessage();
// user.username = "Hiba saifi";
// user.welcomMessage();

// console.log(this);
// In the node envirment me this refers to the {}

// function milk() {
//   let userName = "Sharukh";
//   console.log(this.userName);
// }

// milk();

// Arrow function

// const milk = function () {
//   let username = "Sharukh khan";
//   console.log(this.username);
// };

// milk();

const srk = () => {
  let username = "Sharukh khan";
  console.log(this);
};

// srk();

// Pure Arrow Function:-

// ()=>{}  -syntax

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: "Hitesh" });
addTwo(3, 4);
// console.log(addTwo(3, 4));

// const myArray = [2,4,5,6,8]
// myArray.forEach()

// IIFE -> Immediately Invoked Function Expressions

// function display() {
//   console.log("DB CONNECTED");
// }

// display();

// named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();

// Unnamed IIFE
((name) => {
  console.log(`DB Connected 2 ${name}`);
})("sharukh khan");

// ()()
// Global scope se kai bar polution hota hai us global scope ke polution ko hate ke liye hum iife use karte hai.
