//array2
const marvel = ["thor", "IronMan", "Gamora"];
const dc = ["batman", "flash", "SuperMan"];
// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

// const all_heroes = marvel.concat(dc);
// console.log(all_heroes);

// const all_new_heroes = [...marvel, ...dc];

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6, 7, [6, 7, [4, 5]]]];

const real_array = another_array.flat(Infinity);
console.log(real_array);
// infinity--> array in array....in array

console.log(Array.isArray("Alice"));
console.log(Array.from("Alice")); //Makes array from stringg
console.log(Array.from({ name: "Alice" }));
//Interesting case for questionss

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score3, score2));
