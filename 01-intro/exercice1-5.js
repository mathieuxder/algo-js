const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question('Enter a decimal number: '));
let number2 = new Number(readlineSync.question('Enter a second decimal number: '));
let resultMultiplication = parseInt(number1) * number2;
console.log(resultMultiplication);