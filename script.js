/* check to see if JavaScript is linked correctly

console.log("Hello World") */

// create a function called getComputerChoice
function getComputerChoice() {
 // function to randomly return string values "rock", "paper", or "scissors" ("RPS")
const readySetGo = Math.random(); // generates a number between 0 and 1; each if/else statement gives each option a 1/3 chance of happening
if (readySetGo < 0.33) {
    return "rock"
} else if (readySetGo < 0.66) {
    return "paper"
} else {
    return "scissors"
}
}

// test function 
// console.log (getComputerChoice());
// the () are added after getComputerChoice so the function is run and the return value is logged

// create a new function called getHumanChoice
function getHumanChoice() { 
// getHumanChoice returns either "RPS" depending on user inputs
// prompt method used to get users input
let userChoice = prompt("Choose rock, paper, or scissors");
return userChoice; // return allows the input to not get trapped inside the function
}

// test function
// console.log(getHumanChoice());

// want to keep track of the human and computer's score using variables
//  initial score value for both players is 0

let humanScore = 0;
let computerScore = 0;
// these are written in the global scope so they can be accessed from any function or across multiple function calls