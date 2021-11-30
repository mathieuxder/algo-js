const readlineSync = require("readline-sync");

//functions
function listPizza(){
    var fs = require('fs');
    var pizzaList = fs.readFileSync('listPizza.txt').toString().split("\n");
    pizzaList = pizzaList.filter(el => el != "" );
    for(i in pizzaList) {
        console.log(i + pizzaList[i]);
    }
}

function addPizza(){
    const fs = require('fs');
    newPizza = readlineSync.question("Enter a new flavor: ");
    fs.appendFileSync('listPizza.txt', newPizza + "\n");
}

function removePizza(){
    console.log("Here are the pizzas available!");
    var fs = require('fs');
    var pizzaList = fs.readFileSync('listPizza.txt').toString().split("\n");
    pizzaList = pizzaList.filter(el => el != "" );
    for(i in pizzaList) {
        console.log(i + "" + pizzaList[i]);
    }

    var pizzaToRemove = parseInt(readlineSync.question("Which one do you want to remove? "));
    pizzaList.splice(pizzaToRemove, 1);

    let text = pizzaList.join('\n');
    fs.writeFileSync('listPizza.txt', text, "utf8");
    }


//program
do {
    console.log("Hello! Welcome to the Pizza Flavors Manager.");
    console.log("");
    console.log("Please choose your actions: ");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program");
    console.log("");
    let choice = parseInt(readlineSync.question("Enter your action's number: "));

    switch (choice) {
        case 1:
            listPizza();
            break;

        case 2:
            addPizza();
            break;

        case 3:
            removePizza();
            break;
    
        default:
            break;
    }
} while (choice != 4);