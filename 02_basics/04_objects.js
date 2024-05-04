// singleton object
// declare object with the help of constructor.

const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "101";
tinderUser.name = "Sharukh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  name: "Sharukh khan",
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sharukh",
      lastname: "khan",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj5 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj4 = Object.assign({}, obj1, obj2, obj5);
// console.log(obj4);

const obj3 = { ...obj1, ...obj2, ...obj5 };
// console.log(obj3);

// Get the value from database then we use
// Array of objects.

const users = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 2,
    email: "hiba@gmail.com",
  },
  {
    id: 3,
    email: "khan@gmail.com",
  },
];

// console.log(tinderUser);

// get the keys and return as a array
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
