//Objects and Events-->Very Imp
//singleton--> obj from constructor, one of its kind
//singleton NOT if declared as variables
Object.create; //<--Singleton madew here

const mySYm = Symbol("key1"); //symbol as keys
const jsUser = {
  name: "Alice", //can define both keys,literals
  fullName: "ALICE SINGH",
  [mySYm]: "sigil", //[] brackets for symbolss
  age: "22",
  location: "Lucknow",
  email: "alice@gmail",
  isLoggedIN: false,
  lastLoginDays: ["Tuesday", "Friday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]); //accessed as string here, ERROR without '' dounle commas
// console.log(jsUser["fullName"]);

jsUser.email = "alice@chatgpt.com";
//Object.freeze(jsUser); //No new changes will propagate now

//Functions
//treat as variables

jsUser.greeting = function (params) {
  console.log("Hello");
};

jsUser.greeting2 = function (params) {
  console.log(`Hello ${this.name}`); //this<--gives all the properties of an object
};

console.log(jsUser.greeting2());
console.log(jsUser.greeting());
//undefined(coming in output):
//console.log(jsUser.greeting);--> function returned
