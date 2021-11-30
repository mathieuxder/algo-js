const readlineSync = require("readline-sync");

let userNum = new Number(readlineSync.question('What is your favorite number? '));

while(userNum != 42){
    console.log("Are you sure? ");
    userNum = new Number(readlineSync.question('What is your favorite number? '));
}