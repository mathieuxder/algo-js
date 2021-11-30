const readlineSync = require("readline-sync");

let shoeSize = new Number(readlineSync.question('Enter your shoe size: '));
let birthYear = new Number(readlineSync.question('Enter your birth year: '));
let result = (((((shoeSize * 2) + 5) * 50) - birthYear) + 1766);
console.log(result);