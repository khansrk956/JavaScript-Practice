// IIFE :- Immediately Invoked Function Expressions (IIFE)
/*
(function definition)(this is function calling)
*/
 
// Named iffe
(function disp(){ 
    console.log("This function is working...")
})();
// This is immediately invoed function expression.
// We use iife because sometime we face global scope  polution so this global polution remove by using iife.
//  global scope ke polution se problem hoti hai kai bar to is grobal polution problem ko solve ke liye hum iife ka use karte hai.
// always use ; after finished iife function to run another iffe.

// named iife
(function hello(){
    console.log("Wow greate learning")
})();

// without name iife with passing arugment and parameter through arrow function.
// in single line while returning value in arrow function we don't use return keyboard we use mostly use () paranthesis for single line statement.

((name)=>{
    console.log(name);
})('Sharukh khan');

// return iffe with using arrow function.
const name = ((name)=> ("Hello "+name))('hiba saifi');
console.log(name);

// another example with return  using iife with arrow.

const result = (() =>{
    let no = 10;
    let n2 = 20;
    return no + n2
})();

console.log(result);

var res = (function(a, b) {
    return a * b;
  })(5, 8);
  
console.log(res); // Output: 40