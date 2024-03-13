//control-flow

//IF

// const isUserLoggedIn = true;

// if (isUserLoggedInt) {
// }

// const temp = 41;
// if (temp > 50) {
//   //if
//   console.log("less than 50");
// } else {
//   console.log("Not less than 50");
// }
//if true--> code executes, if false--> code does not executes

//Operators
//>,<,<=,>=,==, !=, ===
// == -> only values compared, not datatypes
// === -> values and data types, both are compared
// !== <- strict checking

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`user power : ${power}`);
}

//console.log(`user power : ${power}`); <-- Scope out of bound
// but with var, it is global. But that should not get out of scope.

//Short Hand notation
const balance = 1000;
//if (balance > 500) console.log("test");
//one line execution
//console.log("test2");

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 1200");
} else {
  console.log("less than 1200");
}

const userLogged = true;
const debitCard = true;
// && --> AND
if (userLogged && debitCard && 2 == 2) {
  console.log("Allowed to buy courses");
}
// wont execute even if one condition is not true
// || --> OR
