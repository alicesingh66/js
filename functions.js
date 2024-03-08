//FUNCTIONS-->>has to study mem management too simutaneously
//wrappin g code

// console.log("A");

// function sayName(params) {
//   console.log("Alice");
// }

// sayName();
// //-->() -->execution
// //sayName: refernce of func
// //() for execution

// function addNumbers(num1, num2) {
//   num3 = num1 + num2;
//   return num3; //nothing after return prints
// }

// console.log(addNumbers(4, 6));
// what if someone gives "4"-->46; assumes both str
//checking is imp
// if we store the value of any function(:the function prints the result,not returns it, returns directly a+b not any c=a+b) in any variable, the output values comes out unDefined

function loginUser(user = "UserAnoymous") {
  //Default value
  if (
    !user //user === undefined
  ) {
    console.log("Please enter name.");
    return;
  } else return `${user} just loggedIn.`;
}

//console.log(loginUser("Alice"));
console.log(loginUser("Alice")); //umdefined
