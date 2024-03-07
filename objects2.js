const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Samuel";
tinderUser.loggedIn = false;
// console.log(tinderUser);

const regularUsr = {
  email: "abc@gmail.com",
  fullName: {
    userfullName: {
      firstname: "Alice",
      lastName: "SIngh",
    },
  },
};

//Accesing multiple nesting
console.log(regularUsr.fullName.userfullName.lastName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "g",
  4: "j",
};

//combining objects

//const obj3 = Object.assign({}, obj1, obj2);
//{}<--combines all

const obj3 = { ...obj1, ...obj2 }; //SPREAD 90% times
console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
];

//vales from arrays

//users[1].email;

console.log(Object.keys(tinderUser)); //All keys comes out as array,can be looped in and out
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //Array in array [ [ 'id', '123abc' ], [ 'name', 'Samuel' ], [ 'loggedIn', false ] ]

//for not existing vales, fearing crash
console.log(tinderUser.hasOwnProperty("id"));
