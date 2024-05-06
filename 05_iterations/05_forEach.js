// for each loop.

const coding = ["JavaScript", "ruby", "java", "python", "cpp"];

// It is hire order function - for each loop.

// coding.forEach(function (element) {
//   console.log(element);
// });

// coding.forEach((ele) => console.log(ele));

function printMe(item) {
  //   console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    name: "Sharukh kahn",
    age: 29,
    email: "khansrk956@gmail.com",
  },
  {
    name: "Hiba kahn",
    age: 2,
    email: "hiba@gmail.com",
  },
  {
    name: "Afasana kahn",
    age: 25,
    email: "afsana@gmail.com",
  },
];

myCoding.forEach((item) => {
  console.log(item.email);
});
