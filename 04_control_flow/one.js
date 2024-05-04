// // if

// if (true) {
//   console.log("code will execute when condition is true.");
// }
// if (false) {
//   console.log("code will not execute when condition is false");
// }

// const isUserLoggedIn = true;
// const temprature = 41;
// if (temprature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temprature is greater than 50");
// }

// comparision operators
// <  - less than
// >  - greater than
// <= - less than equals to
// >= - greater than equals to
// =  - asignment operator
// == - checking equal hai ki nahi
// != - not equal to.
// === - it will check value as well as data type also
// !== - strict checking karta hai
// && - both condition should be true

// if (2 === "2") {
//   console.log("hai");
// } else {
//   console.log("nahi hai");
// }

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2"); // implicit scope

// if (balance < 500) {
//   console.log("Less than 500.");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("Balance is less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User LoggedIn");
}
