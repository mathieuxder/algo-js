const readlineSync = require("readline-sync");

let addition = 0;
let n = Number(readlineSync.question('Enter a number: '));
for (let i = 1; i <= n;i++){
      addition += Number(readlineSync.question('Enter a number to add: '));
}

console.log("The result is " + addition);