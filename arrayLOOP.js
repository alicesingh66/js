// for of

//array specific loops

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  console.log(i);
}

const greetings = "hello world";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "UnitedStatesofAmerica");
map.set("Fr", "France");
map.set("IN", "India"); //No double entry, unique values

console.log(map);

for (const [key, value] of map) {
  //console.log(key);
}

const myObj = {
  Game1: "nfs",
  game2: "spiderman",
};

// for (const [key, value] of myObj) {
//   //console.log(key, "-->", value);
// } //-->TypeError: myObj is not iterable

const myObject = {
  js: "javascript",
  cpp: "C++",
}; //FOR-IN LOOP

for (const key in myObject) {
  console.log(myObject[key]);
}

const progrqmming = ["js", "python", "ruby"];
//for (const key in object) {}
//for in loop returns keys of arrays too-->0,1,2,3..n
//for-in loop for MAP--> NOTiteratble
