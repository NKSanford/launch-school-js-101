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
const TWENTY_ONE = 21;
const ACE_HIGH_VALUE = 11;
const ACE_LOW_VALUE = 1;
const PLAY_AGAIN_OPTIONS = ['yes', 'no', 'y', 'n'];
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
  while ((handValue + (ACE_HIGH_VALUE - ACE_LOW_VALUE) <= TWENTY_ONE)
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
function busted(hands, index) {
  return calculateHandValue(hands, index) > 21;
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

function determineWinner(hands) {
  let playerHandValue = calculateHandValue(hands, PLAYER_INDEX);
  let dealerHandValue = calculateHandValue(hands, DEALER_INDEX);
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

// Main game loop starts here
while (true) {
  console.clear();
  // Prepare for dealing cards to player and dealer
  let deck = initializeDeck();
  shuffleDeck(deck);

  // Deal cards to player and dealer
  let hands = initialDealToPlayerAndDealer(deck);

  let playerBusted = false;
  // Player takes their turn
  while (true) {
    displayNonFinalCards(hands, DEALER_INDEX);
    displayNonFinalCards(hands, PLAYER_INDEX);

    prompt("Hit or stay?");
    let answer = readline.question().toLowerCase();
    if (answer === "stay") break;

    // Hit: add a card to the player's hand
    dealToPlayer(deck, hands[PLAYER_INDEX]);

    playerBusted = busted(hands, PLAYER_INDEX);
    if (playerBusted) break;
  }

  if (playerBusted) {
    displayEndOfGameCards(hands);
    prompt("You busted! Dealer wins!");
    if (!getPlayAgain()) break;
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
    dealerBusted = busted(hands, DEALER_INDEX);
    if (dealerBusted) break;
  }

  if (dealerBusted) {
    displayEndOfGameCards(hands);
    prompt("Dealer busted! You win!");
    if (!getPlayAgain()) break;
    else continue;
  } else {
    prompt("Dealer chose to stay!");
  }

  // Neither the player nor the dealer busted
  // Have to compare hand values to determine the winner
  displayEndOfGameCards(hands);
  let winner = determineWinner(hands);
  displayWinner(winner);
  if (!getPlayAgain()) break;
}
