const name = "Alice";
const repoCount = 500;

console.log(name + repoCount);

console.log(`Hello my name is ${name}`);
const gameNm = new String(`Alice-45`);
// console.log(gameNm[0]);
// console.log(gameNm.__proto__);
// console.log(gameNm.length);
// console.log(gameNm.toUpperCase());
// console.log(gameNm.charAt(3));
// console.log(gameNm.indexOf("e"));
// const newStr = gameNm.substring(0, 4);

const newstr2 = gameNm.slice(-3, 2);
console.log(newstr2);

const newstr3 = `   AliceSingh    `;
console.log(newstr3);
console.log(newstr3.trim());
const link1 = "https://alice.com/%20";
console.log(link1.replace(`%20`, "-"));
