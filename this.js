// arrow function
// 2015 origin
// this keyword

// const user = {
//   name: "Alice",
//   price: 999,

//   welcomeMsg: function (params) {
//     console.log(`Welcome to website, ${this.name}`);
//     console.log(this);
//   },
// };
// THIS --> current context

// user.welcomeMsg();
// user.name = "Sam"; //Context changed
// user.welcomeMsg();

// console.log(this); //This, here refers to global context, 'node'; in chrome--> windows

// function chai(params) {
//   let username = "AliceSingh";
//   //console.log(this.username); //Undefined in this context
// }

// chai();

const chai = (params) => {
  //=> is an arrow function
  let username = "AliceSingh";
  console.log(this.username);
};

chai();

// const name = (params) => {}

//implicit return
//here return is not required::::const addTwo = (num1, num2) => return num1 + num2

const addTwo = (num1, num2) => num1 + num2;
//curly --> return, parenthesis --> No return

const addTwo2 = (num1, num2) => ({
  name: "Alice",
});
//undefined: if {} is NOT wrapped in ()
console.log(addTwo2(3, 4));
