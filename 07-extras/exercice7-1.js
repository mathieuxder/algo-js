const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) +1;
}

console.log("Number Guesser!");
console.log("You'll have to guess the number I chose! between 1 and 10");

let numberToGuess = rand10();

let userNumber = new Number(readlineSync.question('What is your number? '));

while (numberToGuess != userNumber) {
    if (userNumber > numberToGuess) {
        console.log("Too high");
        userNumber = new Number(readlineSync.question('What is your number? '));
    } else {
        console.log("Too low");
        userNumber = new Number(readlineSync.question('What is your number? '));
    }
}
console.log("Congratulation!!!");


