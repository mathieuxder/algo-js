const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('Enter a min number: '));
let max = new Number(readlineSync.question('Enter a max number: '));
let  current = new Number(readlineSync.question('Enter a current number: '));

if (min > max) {
    console.log("You don't understand anything...");
} else if (max > current  & current > min) {
    console.log("min:  " + min);
    console.log("current:  " + current);
    console.log("max:  " + max);
}