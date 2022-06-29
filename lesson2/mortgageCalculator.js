// Load readline-sync to get console input from user
const readLineSync = require("readline-sync");

// Prompts user for loan amount and returns the entered loan amount
// Loan amount must be greater than 0
function getLoanAmount() {
  let loanAmount = Number(readLineSync.question("What is the loan amount? "));
  while (isNaN(loanAmount) || loanAmount <= 0) {
    loanAmount = Number(readLineSync.question("Please enter a valid loan amount: "));
  }
  return loanAmount;
}

// Prompts user for the APR and returns the entered APR
// The APR must be greater than 0 and it should be entered as a percentage
// (i.e. 4% APR)
function getAPR() {
  let apr = Number(readLineSync.question("What is the Annual Percentage Rate (APR) in percent? "));
  while (isNaN(apr) || apr <= 0) {
    apr = Number(readLineSync.question("Please enter a valid APR (must be greater than 0%): "));
  }
  // Divide by 100 to make it a decimal rather than percentage
  return apr / 100;
}

// Prompts user for loan duration and returns the entered number of years
function getLoanDuration() {
  let loanDuration = Number(readLineSync.question("What is the loan duration in years? "));
  while (!Number.isInteger(loanDuration) || loanDuration <= 0) {
    loanDuration = Number(readLineSync.question("Loan duration must be an integer number of years: "));
  }
  return loanDuration;
}

function calculateMonthlyPayment(loanAmount, monthlyInterestRate,
  loanDurationMonths) {
  let monthlyPayment = loanAmount * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  return monthlyPayment;
}

let loanAmount = getLoanAmount();
let apr = getAPR();
let loanDurationYears = getLoanDuration();
const NUM_MONTHS_PER_YEAR = 12;

// Assume that the monthly interest rate is 1/12 of the annual percentage rate
let monthlyInterestRate = apr / 12;
let loanDurationMonths = loanDurationYears * NUM_MONTHS_PER_YEAR;

let monthlyPayment = calculateMonthlyPayment(loanAmount,
  monthlyInterestRate, loanDurationMonths);
console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}.`);

