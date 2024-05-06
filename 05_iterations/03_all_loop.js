//for of

// ["", "", ""]
// [({}, {}, {})];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map(); // Map is object.
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}

const myObj = {
  Game1: "Contra",
  game2: "mario",
  game3: "mustafa",
};

// for (const [game, value] of myObj) {
//   console.log(`${game} :- ${value}`);
// }
