const readlineSync = require("readline-sync");

// addition
console.log("Here we are going to  make an addition");
console.log("================================");
let number1 = new Number(readlineSync.question('What is the first number?'));
let number2 = new Number(readlineSync.question('What is the second number?'));
let additionResult = number1 + number2;
console.log("The answer to the addition is " + additionResult);
console.log(" ");

// substraction
console.log("Here we are going to  make a substraction");
console.log("==================================");
let number3 = new Number(readlineSync.question('What is the first number?'));
let number4 = new Number(readlineSync.question('What is the second number?'));
let substractionResult = number3 - number4;
console.log("The answer to the substraction is " + substractionResult);
console.log(" ");

// multiplication
console.log("Here we are going to  make a multiplication");
console.log("====================================");
let number5 = new Number(readlineSync.question('What is the first number?'));
let number6 = new Number(readlineSync.question('What is the second number?'));
let multiplicationResult = number5 * number6;
console.log("The answer to the substraction is " + multiplicationResult);
console.log(" ");

// division
console.log("Here we are going to  make a division");
console.log("====================================");
let number7 = new Number(readlineSync.question('What is the first number?'));
let number8 = new Number(readlineSync.question('What is the second number?'));
let divisionResult = number7 / number8;
console.log("The answer to the division is " + divisionResult);
console.log(" ");

// modulo
console.log("Here we are going to  make a modulo");
console.log("====================================");
let number9 = new Number(readlineSync.question('What is the first number?'));
let number10 = new Number(readlineSync.question('What is the second number?'));
let moduloResult = number9 % number10;
console.log("The answer to the modulo is " + moduloResult);
console.log(" ");