const readlineSync = require("readline-sync");

console.log("This will display all the divisors of that integer which are not 1 or itself.");
let userNumber = new Number(readlineSync.question('What is your number? '));

let divisor = [];
for (let i = 1; i <= userNumber; i++) {
    if ( i != 1 && i != userNumber && Number.isInteger(userNumber/i )) {
        divisor.push(i);
    }
}

if (divisor.length > 0) {
    console.log( userNumber + " est divisible par " + JSON.stringify(divisor));
} else {
    console.log("nothing (it's a prime number)");
}