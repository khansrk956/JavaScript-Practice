// number conversion
let score = "33abc"
let valInNumber = Number(score);
// console.log(typeof valInNumber); 
// console.log("Number Conversion: ",valInNumber);  

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
// console.log("Boolean Conversion: ",booleanIsLoggedIn);

// 1 => true ; 0 => false
// " " => false
// "hitesh" => true

// string conversion.

let someNumber = 33
let stringNumber = String(someNumber)
// console.log("String Conversion: ",stringNumber);
// console.log(typeof stringNumber);

// ******************* Operations ********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); output : 4
// console.log(2-2);  output : 2
// console.log(2*2); output : 4
// console.log(2**3); output: 8
// console.log(121/10); output : 12 
// console.log(13%5); output : 3

let str1 = "hello "
let str2 = "Sharukh"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3+4) * 5 % 3);

console.log(+true);
console.log(+"");

// let num1, num2 , num3;
// num1 = num2 = num3 = 2 + 2

let gameCounter = 10
gameCounter++;
++gameCounter;
console.log(gameCounter);