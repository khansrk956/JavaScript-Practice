const name = "Sharukh";
const repoCount = 25;

console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Hiba-Saifi-khan");
// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("b"));

const newString = gameName.substring(0, 4);
console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "  sharukh  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sharukh.com/sharukh%20khan";

const url2 = url.replace("%20", "-");

console.log(url2);

console.log(url.includes("hitesh"));

console.log(gameName.split("-"));
