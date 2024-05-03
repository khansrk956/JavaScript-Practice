const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);  // push() method push existing array inside array.
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const total_hero = marvel_heros.concat(dc_heros);
// console.log(total_hero);

const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = new_array.flat(Infinity);
// console.log(real_array);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("sharukh"));
console.log(Array.from({ name: "Sharukh" })); // interesting.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
