// array
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Batman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);
// console.log(myArr2);

// Array methods

// push() = add the value end of the array.
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);

// pop() = remove the last element of the array.
// myArr.pop();

// unshift() = add the element start of the array.
// myArr.unshift(9);

// shift() = remove the first element of the array.
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A", myArr);
// const mynewArray = myArr.slice(1, 3);
// console.log("B", mynewArray);

// const myn2 = myArr.splice(1, 3);
// console.log("c", myn2);

const a = ["Sanjy", "Aman", "Rehman", "srk"];
const newA = a.slice(1, 3);
// console.log(newA);
a.splice(2, 2, "neha", "karan");
console.log(a);

// console.log(myArr);
