const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question('Enter an integer: '));
let number2 = new Number(readlineSync.question('Enter a second integer: '));
let resultModulo = number1 % number2;
console.log(resultModulo);