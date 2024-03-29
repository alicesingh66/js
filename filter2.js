const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newnum = mynums.map((num) => num + 10);

//console.log(newnum);
//returns by itself
// 'return' with {}

const newNum = mynums
  .map((num) => num * 10)
  .map((num) => num / 5)
  .filter((num) => num >= 15); //Chaining
//value of map1 passed to map2 in chaining
console.log(newNum);

//REDUCE
const mynumb = [1, 2, 3];

// const myyotal = mynumb.reduce((accumulator, currval) => {
//   console.log(`A=${accumulator} C=${currval}`);
//   return accumulator + currval;
// }, 0);

// const myyotal = mynumb.reduce((acc, cur) => acc + cur, 4);
// console.log(myyotal);

const shoppingCart = [
  {
    itemname: "js",
    price: 2999,
  },
  {
    itemname: "py",
    price: 8999,
  },
  {
    itemname: "dataScientist",
    price: 12999,
  },
  {
    itemname: "androedDev",
    price: 21999,
  },
];

const pricetopay = shoppingCart.reduce((a, item) => a + item.price, 0);
//((acc, item) => {
//   console.log(`A=${acc} P=${item.price}`);
//   return acc + item.price;
// }, 0);

console.log(pricetopay);
