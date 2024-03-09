// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //var c = 30;
}

console.log(a);
//console.log(b);
//console.log(c);

function exampleFunction() {
  // Local scope variable
  var localVariable = "I am local";

  // Accessing local variable
  console.log(localVariable);
}

exampleFunction(); // Output: "I am local"

// Attempting to access the local variable outside the function will result in an error
// console.log(localVariable); // ReferenceError: localVariable is not defined

//_________________________________________________________________
function exampleFunction() {
  if (true) {
    // Block scope variable
    let blockVariable = "I am block-scoped";
    console.log(blockVariable);
  }

  // Attempting to access the block-scoped variable outside the block will result in an error
  // console.log(blockVariable); // ReferenceError: blockVariable is not defined
}

exampleFunction(); // Output: "I am block-scoped"
