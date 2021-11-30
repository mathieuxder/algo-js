const readlineSync = require("readline-sync");

console.log("Fibonacci Numbers!");
console.log("Enter a number and I will generate the \"n\" first Fibonacci numbers ");

let n = parseInt(readlineSync.question('What is your number? '));

let j = 0;
let t = 0;
let k = 1;


for(let i =1; i <= n; i++){
    console.log(t);
    t = k + j;
    k = j;
    j = t;
}