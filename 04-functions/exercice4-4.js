const readlineSync = require("readline-sync");

//functions
function rand10() {
    return Math.floor(Math.random() * 11);
}

function multiRand(n) {
    let array = [];
 for (let i = 0; i < n; i++) {
          array[i] = rand10();
 }
 return array;
}

function average(arr){
    let result = 0;
    for (let i = 0; i< arr.length; i++) {
      result += arr[i];
    }
    let avg = result/arr.length;
    return avg; 
}

function min(arr){
    let arrMin = Math.min(...arr);
    return arrMin;
}

function max(arr){
    let arrMax = Math.max(...arr);
    return arrMax;
}

//program

let randomNum = Number(readlineSync.question("How much random number do you want? "))
let userArray = multiRand(randomNum);
console.log(multiRand(randomNum));
console.log(average(userArray));
console.log(min(userArray));
console.log(max(userArray));