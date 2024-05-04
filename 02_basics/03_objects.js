// singleton - constructor se singleton banega = Object.create
// object literals - se singleton nhi banega.

// object literals
const mySymbol = Symbol("key1");

const user = {
  name: "Sharukh",
  age: 28,
  "full name": "Sharukh khan",
  [mySymbol]: "mykey1",
  location: "Faridabad",
  email: "khansrk956@gmail.com",
  isLoggedIn: false,
  lastLoginDats: ["Monday", "Saturday"],
};

// console.log(typeof user);
// // console.log(user.lastLoginDats[1]);
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySymbol]);

user.email = "hiba.saifi@mail.com";
// Object.freeze(user);
user.email = "time@24@gmail.com";
// console.log(user);

user.greeting = function () {
  console.log("Hello js user.");
};

user.greeting2 = function () {
  console.log(`Hello js user, ${this.name}`);
};

// console.log(user);
console.log(user.greeting());
console.log(user.greeting2());
