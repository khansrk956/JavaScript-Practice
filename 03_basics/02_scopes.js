let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner a: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

//  {} :- Block Scope :-

//  Browser par jakar jo console.log me karke dekhte hai wo global scople alg hai as compare to node ke through jab hum js file run krte hai uske global scope se.

// Nested Scope.

function one() {
  const username = "Sharukh khan";

  function two() {
    const website = "Youtube";
    console.log(username);
  }

  // console.log(website);
  two();
}

// one();

// if(true){
//     const username = "Hiba Saifi";
//     if (username==="Hiba Saifi") {
//         const website = "youtube";
//         console.log(username + website);
//     }
//     // console.log(website);
// }

//  +++++++++++++ interesting ++++++++++++

// function call before initilization.
console.log(addOne(5)); /* IT's running */

function addOne(num) {
  return num + 1;
}

// Expression :- function store in a variable.
// function calling
console.log(
  addTwo(5)
); /* ReferenceError: Cannot access 'addTwo' before initialization*/

const addTwo = function (num) {
  return num + 2;
};
