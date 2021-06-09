const readlineSync = require("readline-sync");
let name = readlineSync.question("What is your name?  ")
let firstname = readlineSync.question("what is your firstname? ")
let city = readlineSync.question("where do you live ? ")
console.log("Hello " + name + firstname + "from " + city ) 