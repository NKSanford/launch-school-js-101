const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_CHOICES_ABBREVIATIONS = ["r", "p", "sc", "l", "sp"];
const WINS_TO_END_MATCH = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt(`Abbreviations: ${VALID_CHOICES_ABBREVIATIONS.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice) &&
         !VALID_CHOICES_ABBREVIATIONS.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  // If the user entered a valid abbreviation, set it to the full equivalent
  if (choice.length <= 2) {
    let index = VALID_CHOICES_ABBREVIATIONS.indexOf(choice);
    choice = VALID_CHOICES[index];
  }
  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

// Returns true if the user is the winner, false otherwise
function determineUserWinner(choice, computerChoice) {
  let isUserWinner = false;
  if ((choice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (choice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
      (choice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
      (choice === "spock" && (computerChoice === "scissors" || computerChoice === "rock")) ||
      (choice === "lizard" && (computerChoice === "spock" || computerChoice === "paper"))) {
    isUserWinner = true;
  }

  return isUserWinner;
}

// Returns true if the user is the loser, false otherwise
function determineUserLoser(choice, computerChoice) {
  let isUserLoser = false;
  if ((choice === "rock" && (computerChoice === "paper" || computerChoice === "spock")) ||
      (choice === "paper" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (choice === "scissors" && (computerChoice === "rock" || computerChoice === "spock")) ||
      (choice === "spock" && (computerChoice === "paper" || computerChoice === "lizard")) ||
      (choice === "lizard" && (computerChoice === "rock" || computerChoice === "scissors"))) {
    isUserLoser = true;
  }
  return isUserLoser;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (determineUserWinner(choice, computerChoice)) {
    prompt("You win!");
  } else if (determineUserLoser(choice, computerChoice)) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }
}

function getPlayAgain() {
  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

// Entry point for program execution
while (true) {

  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < WINS_TO_END_MATCH && computerWins < WINS_TO_END_MATCH) {
    let choice = getUserChoice();
    let computerChoice = getComputerChoice();
    displayWinner(choice, computerChoice);
    // Increment the wins if there was not a tie
    if (determineUserWinner(choice, computerChoice)) {
      playerWins += 1;
    } else if (determineUserLoser(choice, computerChoice)) {
      computerWins += 1;
    }
  }

  if (playerWins === WINS_TO_END_MATCH) {
    prompt("You are the grand winner of the match!");
  } else {
    prompt("You have lost the match.");
  }

  if (getPlayAgain()[0] !== "y") break;
}
