//function
function additemsPrice(...num1) {
  return num1;
}
// if like no of items are not known
//'...'<--Rest Operator

function additemsPrice(var1, var2, ...num1) {
  return num1;
}
//The first two values goes to var1 and var2 and all other go to num1
const user = {
  name: "Alice",
  pricr: 1999,
};

function handleObj(anyObject) {
  console.log(`UserName is ${anyObject.name} and price is ${anyObject.pricr}$`);
}

//handleObj(user);

handleObj({
  name: "Sam",
  pricr: 700,
});

const myNewarray = [200, 400, 600, 800];

function returnSecondValue(getArray) {
  return getArray[getArray.length - 2];
}

console.log(returnSecondValue(myNewarray));
