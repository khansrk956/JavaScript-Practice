// arrow function doesn't have this keyword.
// this keyword refer to the current context inside object.
// this refer to they current value of variable which is hold by variable.
// this keyword work with the objects.

const user ={
    username:"Sharukh khan",
    price:999,
    
    welomeMessage: function (){
        console.log(`${this.username}, welcome to website.`);
        // console.log(this);
    }
    
}

// Brower se ander sabse main object  :- It is a window object.
// user.welomeMessage();
// user.username = "Hiba Saifi";
// user.welomeMessage();
// In node envirment this :- refer to black object  like this :-{} but in case of brower console it refer to the window object.
// console.log(this)  

function hello(){
    let username="Sharukh khan";
    console.log(this.username);  /* IT is showing undefined because it will work with object. */
}

// hello();  output:- undefined

const func = function (){
    let username="Kavita kumari";
    console.log(this.username);
}

// func();  output: undefined.

// using arrow function.
const arrFunc = () =>{
    let username = "Mohammad";
    // console.log(this.username)
    console.log(this);
}

// arrFunc(); 
// output :- undefined

// another example of arrow function first way to declare
const fun = (num1, num2) =>{
    return num1 + num2
}

// console.log(fun(10,40));

// Another example :-2 implicit :- Define not clearly but do the work as same
// second way to declare.

const fun1 = (num1 , num2) => num1 + num2;
const fun2 = (num1, num2)  => (num1 + num2);
const fun3 = (num1, num2) => ({username:"Sharukh khan"});
console.log(fun1(101,102));  // output :- 203
console.log(fun2(102,101)); //output :- 203
console.log(fun3(10,10));


