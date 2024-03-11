//Immediately Invoked Function Expressions IIFE
(function chai(params) {
  //named iife
  console.log("DB CONNECTED");
})(); //--> func whole wrapped in (), then () at end. Executes immediatly.
//--> global scope pollution remedy

//--> needs to put ; at end.
// arrow func works too, make sure to end prev with ;

((name) => {
  //simple or unnamed iife
  console.log(`DB Connect sucessful ${name}`);
})("Alice"); //value given to iife
