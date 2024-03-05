//Dates in Js
// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let newDate2 = new Date("2023-01-14");
// console.log(newDate2.toLocaleDateString);
let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let date3 = new Date();
console.log(date3.getDay());

date3.toLocaleDateString("default", {
  weekday: "long",
});
