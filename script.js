/* check to see if JavaScript is linked correctly

console.log("Hello World") */

// create a function called getComputerChoice
// this function will randomly return string values "rock", "paper", or "scissors"
function getComputerChoice() {
const readySetGo = Math.random(); // generates a number between 0 and 1; each if/else statement gives each option a 1/3 chance of happening

if (readySetGo < 0.33) {
    return "rock"
} else if (readySetGo < 0.66) {
    return "paper"
} else {
    return "scissors"
}
}

/* test function 
console.log (getComputerChoice()) */