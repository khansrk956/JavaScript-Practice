function hello() {
    console.log("Welcome to the JavaScript");
}

// hello();

function addTwoNumber(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        console.log(`${num1} and ${num2} = ${num1 + num2}`)
    } else {
        console.log("This is not a number.")
    }
}

// addTwoNumber(10,20);


function addNumber(n1, n2) {
    if (Number.isInteger(n1) && Number.isInteger(n2)) {
        let res = n1 + n2;
        return res;
        // Once function return then rest of code will not run.
        console.log("Sharukh khan"); // It will not print because is declare after return.
    }
}

// const result = addNumber(15,15);
// console.log("Result Adding two numbers: ",result);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
    } else {
        return `${username} just logged in.`
    }
}

// const name = loginUserMessage("Hiba Saifi");
// console.log(name);

// When we don't know how many arguments will pass i func calling.
// we use for this situation rest operation ... (in parameter it will convert data into array.)
function caluclateCartPrice(...num1){
    return num1
    }


const result = caluclateCartPrice(10,10,10);
// console.log("Total Amount is: ", result);

// create object and how to use it in fucntion and how to passed it.
const user = {
    username:"Sharukh khan",
    price:199
}

function handleObject(anyobject){
    console.log(`username is: ${anyobject.username} and age is ${anyobject.age}.`)
}

// handleObject(user);
// directly passed object while calling function.

// handleObject({
//     username:"Hiba Saifi",
//     age:2
// })

// we can also pass array directly to calling function.

function handleArray(arr){
    console.log(arr);}

// handleArray([10,20,30,40,"Sharkhk khan"])