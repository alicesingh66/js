const coding = ["js", "python", "java", "cpp"];
const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

//console.log(values);
//undefined-->foreach does not return vales

const myNUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fourGreat = myNUM.filter((num) => num > 5);
// console.log(fourGreat);
const fourGreat = myNUM.filter((num) => {
  num > 5;
});
//console.log(fourGreat);
//empty array as output ==> return not written with {}

// const newNums = [];
// myNUM.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);
