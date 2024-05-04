// Nested function me - parent ke variable child function can access but parent func
// cannot access the child variable.
function one() {
  const username = "Sharukh khan";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

// Another example of closure.

// if (true) {
//   const username = "Sharukh";
//   if (username === "Sharukh") {
//     const website = " youtube";
//     console.log(username + website);
//   }
//   console.log(website);
// }

// console.log(username);

// Example -3

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};

// console.log(addTwo(5));
