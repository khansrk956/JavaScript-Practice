const string1 = "A string is primitive";
const string2 = "Also a string primitive";
const string3 = "Yet another string primitive";

// console.log(
//   `String1 = ${string1} --- String2 = ${string2} ---- String3 = ${string3}`
// );

// console.log(typeof string1);

const string4 = new String("A string object");
// console.log(typeof string4);

// console.log(string1.charAt(2));
// charAt() - use index position number and return string value
// console.log(string1[2]);

const a = "a";
const b = "b";
if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal`);
}

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
const result = areEqualCaseInsensitive("i", "I");
// console.log(result);

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
