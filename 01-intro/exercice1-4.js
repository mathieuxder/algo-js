const readlineSync = require("readline-sync");

let userName = readlineSync.question("What's your name?");
let userFirstName = readlineSync.question("What's your firstname?");
let userCity = readlineSync.question('Where do you live?');
console.log("Your name is " + userName);
console.log("Your firstname is " + userFirstName);
console.log("You live in " + userCity);