const progrqmming = ["js", "python", "ruby"];
//progrqmming.forEach(function (item) {})

// progrqmming.forEach(function (val) {
//   console.log(val);
// });

// progrqmming.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// progrqmming.forEach(printMe);

// progrqmming.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCode = [
  {
    languageName: "Javascript",
    languagefile: "js",
  },
  {
    languageName: "Java",
    languagefile: "jv",
  },
  {
    languageName: "Python",
    languagefile: "py",
  },
];

myCode.forEach((item) => {
  console.log(item.languageName);
});
