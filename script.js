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


// create a new function called getHumanChoice
function getHumanChoice() { 
// getHumanChoice returns either "RPS" depending on user inputs
// prompt method used to get users input
let userChoice = prompt("Choose rock, paper, or scissors");
return userChoice; 
// return allows the input to not get trapped inside the function
}

// want to keep track of the human and computer's score using variables
//  initial score value for both players is 0

let humanScore = 0;
let computerScore = 0;

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
const resultsDiv = document.getElementById('results');

// select scoring elements
const scoreHuman = document.getElementById('human-score');
const scoreComputer = document.getElementById('computer-score');

// helper function to display result
function displayResult(message) {
    resultsDiv.textContent = message;
}

function updateScoreboard() {
  scoreHuman.textContent = `Human: ${humanScore}`;
  scoreComputer.textContent = `Computer: ${computerScore}`;
}

// Add event listener to Rock button
rockButton.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResult(result);
  updateScoreboard();
  checkGameEnd();
});

// Add event listener to Paper button
paperButton.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResult(result);
  updateScoreboard();
  checkGameEnd();
});

// Add event listener to Scissors button
scissorsButton.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResult(result);
  updateScoreboard();
  checkGameEnd();
});

// final results
const finalResultsDiv = document.getElementById('final-results');

function displayFinalResults() {
  finalResultsDiv.innerHTML = `
    <p>Final Scores:</p>
    <p>Human: ${humanScore}</p>
    <p>Computer: ${computerScore}</p>
    <p>${getWinnerMessage()}</p>
  `;
}

function checkGameEnd() {
  if (humanScore === 5 || computerScore === 5) {
    displayFinalResults();

    // Optional: disable buttons so the game stops
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function getWinnerMessage() {
  if (humanScore > computerScore) {
    return "Human wins the game!";
  } else if (computerScore > humanScore) {
    return "Computer wins the game!";
  } else {
    return "It's a draw!";
  }
}
