const readline = require("readline-sync");

const INITIAL_MARKER = ' '; // denotes a blank square in the board
const HUMAN_MARKER = 'X'; // denotes a square that the human player has marked
const COMPUTER_MARKER = 'O'; // denotes a square that the computer player has marked
const NUM_WINS_FOR_MATCH_WIN = 5; // 5 game wins are needed to win the overall match
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7],            // diagonals
];
const MIDDLE_SQUARE = 5;
const FIRST_TURN_OPTIONS = ["player", "computer", "choose"];
const FIRST_PLAYER = FIRST_TURN_OPTIONS[2];
const PLAY_AGAIN_OPTIONS = ["yes", "no", "y", "n"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  // Clear prior displays of the board in the console
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', connectingWord = "or") {
  // Cover the special cases of length <= 2
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return arr[0] + " " + connectingWord + " " + arr[1];
  }

  let joinedString = "";
  for (let index = 0; index < arr.length; index++) {
    if (index === arr.length - 1) {
      joinedString += connectingWord + " ";
    }

    joinedString += arr[index];

    if (index < arr.length - 1) {
      joinedString += delimiter;
    }
  }
  return joinedString;
}

function playerChoosesSquare(board) {
  let square; //

  // valid square choices are those 'board' keys whose values are spaces
  let emptySquaresArr = emptySquares(board);

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquaresArr)}):`);
    square = readline.question().trim(); // trimmed to allow spaces in input

    if (emptySquaresArr.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function getSearchChar(player) {
  if (player === "Human") {
    return HUMAN_MARKER;
  } else if (player === "Computer") {
    return COMPUTER_MARKER;
  } else {
    console.log("Player must be 'Human' or 'Computer'!");
    return undefined;
  }
}

// Returns the index of a square that is unoccupied
// in a row with two player held squares
// If there is no such square, return 0
// If there are multiple such squares,
// returns the first to be found by this function
// The player parameter should either be "Human" or "Computer"
// If you want to find an offensive opportunity, call the function
// with "Computer" as the player argument
function determineUnoccupiedSquareInRow(board, player) {
  let searchChar = getSearchChar(player);

  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let playerSquareCount = 0;
    let unoccupiedSquareCount = 0;
    let unoccupiedSquareIndex;

    let line = WINNING_LINES[idx];
    line.forEach(square => {
      if (board[square] === searchChar) {
        playerSquareCount++;
      } else if (board[square] === INITIAL_MARKER) {
        unoccupiedSquareCount++;
        unoccupiedSquareIndex = square;
      }
    });
    if (playerSquareCount === 2 && unoccupiedSquareCount === 1) {
      return unoccupiedSquareIndex;
    }
  }
  return 0;
}

function chooseRandomSquare(board) {
  let emptySquaresArr = emptySquares(board);

  let randomIndex = Math.floor(Math.random() * emptySquaresArr.length);

  let square = emptySquaresArr[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function computerChoosesSquare(board) {
  let defensiveSquare = determineUnoccupiedSquareInRow(board, "Human");
  let offensiveSquare = determineUnoccupiedSquareInRow(board, "Computer");
  if (offensiveSquare !== 0) {
    board[offensiveSquare] = COMPUTER_MARKER;
  } else if (defensiveSquare !== 0) {
    board[defensiveSquare] = COMPUTER_MARKER;
  } else if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
    board[MIDDLE_SQUARE] = COMPUTER_MARKER;
  } else {
    chooseRandomSquare(board);
  }
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function displayMatchScores(playerScore, computerScore) {
  prompt(`Player has won ${playerScore} games.`);
  prompt(`Computer has won ${computerScore} games.`);
}

// 0 index is "player"
// 1 index is "computer"
function getFirstPlayer() {
  while (true) {
    prompt("Who should take their turn first (player or computer)?");
    let answer = readline.question().trim();
    if (answer === FIRST_TURN_OPTIONS[0]) {
      return FIRST_TURN_OPTIONS[0];
    } else if (answer === FIRST_TURN_OPTIONS[1]) {
      return FIRST_TURN_OPTIONS[1];
    }
  }
}

function getPlayAgain() {
  while (true) {
    prompt("Play again? (y or n)");
    let answer = readline.question().toLowerCase();
    if (!PLAY_AGAIN_OPTIONS.includes(answer)) {
      prompt("Not a valid response. Try again.");
    } else if (answer === "n" || answer === "no") {
      return false;
    } else {
      return true;
    }
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "player") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === "player") {
    return "computer";
  } else {
    return "player";
  }
}

// Loop for each match of games
while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let playAgain;
  let firstPlayer = FIRST_PLAYER;
  // If the FIRST_PLAYER setting is set to "choose",
  // prompt player for first player
  if (firstPlayer === FIRST_TURN_OPTIONS[2]) {
    firstPlayer = getFirstPlayer();
  }

  // Loop for each game in the match
  while (true) {
    let board = initializeBoard();
    let currentPlayer = firstPlayer;

    // Loop for each turn in a  game
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      // Update the scores
      if (winner === "Player") {
        playerScore++;
      } else {
        computerScore++;
      }
      prompt(`${winner} won!`);
    } else {
      prompt("It's a tie!");
    }

    if (playerScore === NUM_WINS_FOR_MATCH_WIN ||
        computerScore === NUM_WINS_FOR_MATCH_WIN) {
      break;
    }

    displayMatchScores(playerScore, computerScore);

    let playAgain = getPlayAgain();
    if (!playAgain) break;
  }

  // Display winner of overall match, if applicable
  if (playerScore === NUM_WINS_FOR_MATCH_WIN) {
    prompt(`Player has won the match!`);
  } else if (computerScore === NUM_WINS_FOR_MATCH_WIN) {
    prompt('Computer has won the match!');
  }

  if (!playAgain) break;
}

prompt("Thanks for playing Tic Tac Toe!");

