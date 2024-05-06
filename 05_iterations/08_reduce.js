// accumulator - It is a blank variable in reduce. but first time we need to initialize accumulator value would be 0.
// currentValue - It takes current value of given array.

const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return (acc = acc + currval);
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shopingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 3999,
  },
  {
    itemName: "mobile course",
    price: 12999,
  },

  {
    itemName: "react course",
    price: 999,
  },
];

const totalPrice = shopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
