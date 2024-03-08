

// console.log(typeof score); 
// console.log(typeof(score));

// console.log(Number.isInteger(score));
// console.log("---------------------")

// number conversion
let score = "33abc"
let valInNumber = Number(score);
// console.log(typeof valInNumber); 
console.log("Number Conversion: ",valInNumber);  

// output: case-1 val score = null then output: 0 
// output: case-2 val score = true then output: 1
// output: case-3 val score = false then output: 0
// output: case-4 val score = string then output: NaN 
// output: case-5 val score = "12bca" then output: NaN 
// output: case-6 val score = undefined then output: NaN 
// output: case-7 val score = "33" then output: 33 

//  boolean conversion
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("Boolean Conversion: ",booleanIsLoggedIn);

// 1 => true ; 0 => false
// " " => false
// "hitesh" => true

// string conversion.

let someNumber = 33
let stringNumber = String(someNumber)
console.log("String Conversion: ",stringNumber);
console.log(typeof stringNumber);
