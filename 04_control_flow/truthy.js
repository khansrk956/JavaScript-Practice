const userEmail = [];

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Dont have user email");
}

/*
Falsy values - false, 0, -0, BigInt 0n, "", null, undefine, NaN
Truthy values - [], {},"0","sharukh","false", " ", function(){}
*/

if (userEmail.length === 0) {
  console.log("Array is Empty.");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//  false == 0   -> output // true
//  false == ""   -> output // true
//  0  == ""    -> output // true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);

// Terniary Operator.

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
