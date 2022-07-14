const readline = require("readline-sync");

const NUM_SUITS_IN_DECK = 4;
const SUIT_ABBREVIATIONS = ['h', 'd', 'c', 's']; // hearts, diamonds, clubs, spades
// Let 't' = 10 so that all values are a single character
// Let index 0 be an empty string so that indexing really starts at one
const CARD_VALUES = ['', 'a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k'];
const CARD_DISPLAY = {
  a: "Ace",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  t: "10",
  j: "Jack",
  q: "Queen",
  k: "King",
};
// Player index and dealer index are used for the hands array
const PLAYER_INDEX = 1;
const DEALER_INDEX = 0;
const ACE_HIGH_VALUE = 11;
const ACE_LOW_VALUE = 1;
const PLAY_AGAIN_OPTIONS = ['yes', 'no', 'y', 'n'];
const HIT_OR_STAY_OPTIONS = ["hit", "stay", "h", "s"];
const NUM_ROUND_WINS_TO_WIN_MATCH = 5;
// Target points is when the user would bust if they exceeded it
const TARGET_POINTS = 21;
// Dealer with only stay when at or above the threshold
const DEALER_STAY_THRESHOLD = 17;

// Outputs a message to console preceded by "=>" for formatting
function prompt(message) {
  console.log(`=> ${message}`);
}

// Adds all cards of the given suit to the deck
// and returns a reference to the deck
function initializeSuitInDeck(deck, suit) {
  for (let idx = 1; idx < CARD_VALUES.length; idx++) {
    deck.push(suit + CARD_VALUES[idx]);
  }
  return deck;
}

// Returns an array containing all 52 cards represented
// as array elements such as "h4" (hearts 4)
// The deck is unshuffled
function initializeDeck() {
  let deck = [];
  for (let idx = 0; idx < NUM_SUITS_IN_DECK; idx++) {
    initializeSuitInDeck(deck, SUIT_ABBREVIATIONS[idx]);
  }
  return deck;
}

// Shuffles the deck using the Fisher-Yates Algorithm
function shuffleDeck(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let randomIndex = Math.floor(Math.random() * (idx + 1));
    let temp = deck[randomIndex];
    deck[randomIndex] = deck[idx];
    deck[idx] = temp;
  }
  return deck;
}

// Takes the top card (highest index) from the deck
// and add it to the playerHand array
function dealToPlayer(deck, playerHand) {
  playerHand.push(deck.pop());
  return playerHand;
}

// Returns a nested array where row 0 is the dealer's cards
// and row 1 is the player's cards
// Deals once to the player, then once to the dealer
// and repeats once more.
function initialDealToPlayerAndDealer(deck) {
  let hands = [[], []];
  for (let deal = 0; deal < 2; deal++) {
    // Decrement the playerIdx so the player is dealt before the dealer
    for (let playerIdx = PLAYER_INDEX; playerIdx >= DEALER_INDEX; playerIdx--) {
      dealToPlayer(deck, hands[playerIdx]);
    }
  }
  return hands;
}

// Used to display the initial dealer cards
// Only displays the first card, the only is unknown to the player
function displayInitialDealerCards(hands) {
  prompt(`Dealer has: ${CARD_DISPLAY[hands[DEALER_INDEX][0][1]]} and unknown card`);
}

function displayPlayerCards(hands, index, user) {
  let message;
  if (user === "player") {
    message = "You have: ";
  } else {
    message = "Dealer has: ";
  }
  for (let card = 0; card < hands[index].length; card++) {
    if (card === hands[index].length - 1) {
      message += " and ";
    }
    message += `${CARD_DISPLAY[hands[index][card][1]]}`;
    if (card < hands[index].length - 2) {
      message += ", ";
    }
  }
  prompt(message);
}

// Displays the cards in the hand specified by the index
// 0 for dealer, 1 for player
// If displaying the dealer's cards, only shows the first one
function displayNonFinalCards(hands, index) {
  if (index === 0) {
    displayInitialDealerCards(hands);
  } else {
    displayPlayerCards(hands, index, "player");
  }
}

// Converts the value of an ace from 1 to 11 one at a time,
// assuming multiple aces, as long as the new hand value is
// less than or equal to 21
function adjustAcesValues(handValue, numAces) {
  while ((handValue + (ACE_HIGH_VALUE - ACE_LOW_VALUE) <= TARGET_POINTS)
    && numAces > 0) {
    handValue += ACE_HIGH_VALUE - ACE_LOW_VALUE;
    numAces--;
  }
  return handValue;
}

// Calculates the value of the given hand
// The first pass treats aces as having a value of 1
// The adjustAcesValues function will convert
// the aces to use their high value as long as
// doing so does not cause a bust
function calculateHandValue(hands, index) {
  let totalHandValue = 0;
  let numAces = 0;
  hands[index].forEach(card => {
    let cardIndex = CARD_VALUES.indexOf(card.charAt(1));
    let cardValue;
    if (cardIndex >= 10) {
      cardValue = 10;
    } else {
      cardValue = cardIndex;
    }
    // For aces, treat the value as 1 at first,
    // but keep track of how many aces there are
    if (cardValue === 1) {
      numAces++;
    }
    totalHandValue += cardValue;
  });
  return adjustAcesValues(totalHandValue, numAces);
}

// Returns true if the player with the given hand
// has busted (has a hand value over 21)
// Returns false otherwise
function busted(handValue) {
  return handValue > TARGET_POINTS;
}

// Returns true if the player does want to play again
// false if they do not want to play again
function getPlayAgain() {
  while (true) {
    prompt("Would you like to play again? (y or n)");
    let answer = readline.question().toLowerCase();
    if (!PLAY_AGAIN_OPTIONS.includes(answer)) {
      prompt("Not a valid response, try again!");
      continue;
    }
    return (answer === 'y' || answer === "yes");
  }
}

// Returns true for stay, returns false for hit
function getHitOrStay() {
  while (true) {
    prompt("Hit or Stay (h or s)?");
    let answer = readline.question().toLowerCase();
    if (!HIT_OR_STAY_OPTIONS.includes(answer)) {
      prompt("Not a valid response, try again!");
      continue;
    }
    return (answer === 's' || answer === "stay");
  }
}

// Returns "stay" if the dealer should stay (hand value >= 17)
// Otherwise, returns "hit"
function dealerHitOrStay(hands) {
  let handValue = calculateHandValue(hands, DEALER_INDEX);
  if (handValue >= DEALER_STAY_THRESHOLD) {
    return "stay";
  } else {
    return "hit";
  }
}

function determineWinner(playerHandValue, dealerHandValue) {
  if (playerHandValue > dealerHandValue) {
    return "player";
  } else if (dealerHandValue > playerHandValue) {
    return "dealer";
  } else {
    return "tie";
  }
}

function displayEndOfGameCards(hands) {
  displayPlayerCards(hands, DEALER_INDEX, "dealer");
  displayPlayerCards(hands, PLAYER_INDEX, "player");
}

function displayWinner(winner) {
  if (winner === "tie") {
    prompt("There was a tie!");
  } else {
    prompt(`The ${winner} wins!`);
  }
}

function incrementWins(wins, winner) {
  if (winner === "player") {
    wins[PLAYER_INDEX]++;
  } else if (winner === "dealer") {
    wins[DEALER_INDEX]++;
  }
}

function displayWins(wins) {
  prompt(`The dealer has ${wins[DEALER_INDEX]} round wins.`);
  prompt(`The player has ${wins[PLAYER_INDEX]} round wins.`);
}

function determineMatchWinner(wins) {
  if (wins[PLAYER_INDEX] === NUM_ROUND_WINS_TO_WIN_MATCH) {
    prompt("\nThe player has won the match!");
    return true;
  } else if (wins[DEALER_INDEX] === NUM_ROUND_WINS_TO_WIN_MATCH) {
    prompt("\nThe dealer has won the match!");
    return true;
  }
  return false;
}

// Determines the winner, if there was a bust, winner is the one who did not
// If no busts, compares the scores using determineWinner()
// Prints the winner
// Prompts user to play again
// Returns true if the user does want to play again, false otherwise
function endOfRound(wins, hands, playerHandValue, dealerHandValue,
  bustedIndex = -1) {
  displayEndOfGameCards(hands);
  let winner;
  if (bustedIndex === PLAYER_INDEX) {
    prompt("Player busted!");
    winner = "dealer";
  } else if (bustedIndex === DEALER_INDEX) {
    prompt("Dealer busted!");
    winner = "player";
  } else {
    winner = determineWinner(playerHandValue, dealerHandValue);
  }
  incrementWins(wins, winner);
  displayWinner(winner);
  displayWins(wins);
  return getPlayAgain();
}

// Main game loop starts here
while (true) {
  console.clear();
  let wins = [0, 0];
  let playAgain;
  let matchWinner = false;
  prompt("Welcome to Twenty-One!");
  prompt("First to win 5 rounds, wins the match!");

  // Loop for each round of the game
  while (true) {
    console.log("\n");

    // Prepare for dealing cards to player and dealer
    let deck = initializeDeck();
    shuffleDeck(deck);

    // Deal cards to player and dealer
    let hands = initialDealToPlayerAndDealer(deck);
    let playerHandValue = calculateHandValue(hands, PLAYER_INDEX);
    let dealerHandValue = calculateHandValue(hands, DEALER_INDEX);

    // Player takes their turn
    let playerBusted = false;
    while (true) {
      displayNonFinalCards(hands, DEALER_INDEX);
      displayNonFinalCards(hands, PLAYER_INDEX);

      if (getHitOrStay()) break;

      // Hit: add a card to the player's hand
      dealToPlayer(deck, hands[PLAYER_INDEX]);

      playerHandValue = calculateHandValue(hands, PLAYER_INDEX);
      playerBusted = busted(playerHandValue);
      if (playerBusted) break;
    }

    if (playerBusted) {
      playAgain = endOfRound(wins, hands, playerHandValue,
        dealerHandValue, PLAYER_INDEX);
      matchWinner = determineMatchWinner(wins);
      if (matchWinner) break;
      if (!playAgain) break;
      else continue;
    } else {
      prompt("You chose to stay!");
    }

    // Dealer takes their turn
    let dealerBusted = false;
    while (true) {
      let hitOrStay = dealerHitOrStay(hands);
      if (hitOrStay === "stay") break;

      // Hit: add a card to the dealer's hand
      dealToPlayer(deck, hands[DEALER_INDEX]);
      dealerHandValue = calculateHandValue(hands, DEALER_INDEX);
      dealerBusted = busted(dealerHandValue);
      if (dealerBusted) break;
    }

    if (dealerBusted) {
      playAgain = endOfRound(wins, hands, playerHandValue,
        dealerHandValue, DEALER_INDEX);
      matchWinner = determineMatchWinner(wins);
      if (matchWinner) break;
      if (!playAgain) break;
      else continue;
    } else {
      prompt("Dealer chose to stay!");
    }

    // Neither the player nor the dealer busted
    // Have to compare hand values to determine the winner
    playAgain = endOfRound(wins, hands, playerHandValue, dealerHandValue);
    matchWinner = determineMatchWinner(wins);
    if (matchWinner) break;
    if (!playAgain) break;
  }

  if (matchWinner) {
    prompt("The match has finished.");
    if (getPlayAgain()) continue;
    else break;
  }

  // End the match if the player did not want to play another round
  if (!playAgain) break;
}

prompt("Thanks for playing Twenty-One!");
