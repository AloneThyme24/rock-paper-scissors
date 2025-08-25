/* check to see if JavaScript is linked correctly

console.log("Hello World") */

// create a function called getComputerChoice
function getComputerChoice() {
 // above function to randomly return string values "rock", "paper", or "scissors" ("RPS")
const readySetGo = Math.random(); 
// above generates a number between 0 and 1; each if/else statement gives each option a 1/3 chance of happening
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
return userChoice; 
// return allows the input to not get trapped inside the function
}

// test function
// console.log(getHumanChoice());

// want to keep track of the human and computer's score using variables
//  initial score value for both players is 0

let humanScore = 0;
let computerScore = 0;
// these are written in the global scope so they can be accessed from any function or across multiple function calls

// create function playGame()
// playGame() includes playRound()
function playGame() {
// starting scores of 0 are global and accessible by all functions


// create playRound() as game is played in rounds
// create parameters (info inside the "()""): humanChoice and computerChoice
// choices are taken as arguments
// make a string value using playRound() announcing round winner
function playRound(humanChoice, computerChoice) {
// make humanChoice case insensitive
humanChoice = humanChoice.toLowerCase();
// if human beats computer "human wins" add 1 to human score
 if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
// function exits immediately after return statement so increase score first
    return "Human wins! Rock crushed scissors!"
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "Human wins! Scissors cut paper!"
}  else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "Human wins! Paper covers rock!"

// Else if computer beats human "you loose" add 1 to computer score
 } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore += 1;
    return "Computer wins! Rock crushed scissors!"
} else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore += 1;
    return "Computer wins! Scissors cut paper!"
}  else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore += 1;
    return "Computer wins! Paper covers rock!"
    // If humanChoice === computerChoice "it's a tie"
}   else if (humanChoice === computerChoice) {
    return "It's a tie!";
}
}

// Add event listeners to buttons to trigger playRound with the player's selection

// Select buttons from the DOM
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// select results div
const resultsDiv = document.getElementById('results')

// helper function to display result
function displayResult(message) {
    resultsDiv.textContent = message;
}

// Add event listener to Rock button
rockButton.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
});

// Add event listener to Paper button
paperButton.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
});

// Add event listener to Scissors button
scissorsButton.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
});



// final scores
console.log("Final Scores:");

// log actual values of scores
console.log("Human:", humanScore);
console.log("Computer:", computerScore);

// declare the winner
if (humanScore > computerScore) {
  console.log("Human wins the game!");
} else if (computerScore > humanScore) {
  console.log("Computer wins the game!");
} else {
  console.log("It's a draw!");
}
}

// initiate game
playGame();