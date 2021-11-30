const readlineSync = require("readline-sync");

//function
function factorial(a){
    if(a === 0) return 1;
    else return a * factorial(a - 1);
}

let userInput = Number(readlineSync.question("Enter an int: "));
console.log(factorial(userInput)); 