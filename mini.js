//Scope level and mini hoisting in javascript
//Closure(requires knowledge of DOM)

//NESTED SCOPE

function one(params) {
  const userName = "Alice";

  function two(params) {
    const website = "YouTube";
    console.log(userName);
  }
  console.log(website); //can not be accesed by outer function

  two();
}

//one();

if (true) {
  const user = "Alice";
  if (user === "Alice") {
    const website = "YouTube";

    //console.log(user + website);
  }

  //console.log(website);
}

//console.log(user);

//+++++++++++++++++++++++++++++++++ Imp ++++++++++++++++++++++++

addOne(8); //(accessed before declaration) No problem

function addOne(num) {
  return num + 1;
}

addTwo(6); //Problem, held in variable, hoisting concept in Js
const addTwo = function (num) {
  return num + 2;
};
