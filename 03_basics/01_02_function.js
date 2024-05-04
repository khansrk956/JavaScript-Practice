function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
const user = {
  username: "Sharukh",
  price: 199,
  email: "hiba@gmail.com",
};

function handleObject(anyobject) {
  console.log(
    `Username is: ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "Sharukh",
  price: 189,
  email: "srk@gmail.com",
});

const myNewArray = [200, 400, 100, 600];

function returnSecondvalue(getArray) {
  return getArray[1];
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100, 123, 600, 1000]));
