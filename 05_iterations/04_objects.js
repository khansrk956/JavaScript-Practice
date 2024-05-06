const myObject = {
  js: "JavaScript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift",
};

// for in loop only work with objects.
for (const key in myObject) {
  //   console.log(myObject[key]);
  //   console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "java", "py"];

for (const key in programming) {
  //   console.log(`${key} value : ${programming[key]}`);
}

const map = new Map(); // Map is object.
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("Fr", "France");
map.set("IN", "India");

// for (const key in map) {
//   console.log(key);
// }
