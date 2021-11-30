const readlineSync = require("readline-sync");

//functions
function rand10() {
    return Math.floor(Math.random() * 10) +1;
}

function multiRand(n) {
    let array = [];
 for (let i = 0; i < n; i++) {
          array[i] = rand10();
 }

 return array;
}

//program

let randomNum = Number(readlineSync.question("How much random number do you want? "))
console.log(multiRand(randomNum));