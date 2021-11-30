const readlineSync = require("readline-sync");

//function
function calcSurface(length, width){
    return length * width;
}

//program
let length = Number(readlineSync.question("Enter the length: "));
let width = Number(readlineSync.question("Enter the width: "));

console.log(calcSurface(length, width));
