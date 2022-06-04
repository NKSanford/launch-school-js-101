// Isn't it Odd?
// Assume that the argument is a valid integer value
// function isOdd(num) {
//   let absNum = Math.abs(num);
//   return absNum % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true


// Odd Numbers
// for (let i = 1; i <= 99 ; i += 2) {
//   console.log(i);
// }


// Even Numbers
// for (let i = 2; i <= 99; i += 2) {
//   console.log(i);
// }


// How big is the room?
// let rlSync = require("readline-sync");
// const SQUARE_FEET_PER_SQUARE_METER = 10.7639;

// let unit = rlSync.question("Enter the units (meters or feet): ");
// let length = rlSync.question("Enter the length of the room: ");
// let width = rlSync.question("Enter the width of the room: ");

// let area = (length * width);
// let conversionArea;
// let conversionUnit;

// if (unit === "meters") {
//   conversionUnit = "feet";
//   conversionArea = area * SQUARE_FEET_PER_SQUARE_METER;
// } else {
//   conversionUnit = "meters";
//   conversionArea = area / SQUARE_FEET_PER_SQUARE_METER;
// }

// console.log(`The area of the room is ${area.toFixed(2)} square ${unit} (${conversionArea.toFixed(2)} square ${conversionUnit}).`);


// Tip Calculator
// let rlSync = require("readline-sync");

// let bill = parseFloat(rlSync.question("What is the bill? "));
// let tipPercentage = parseFloat(rlSync.question("What is the tip percentage? "));

// let tipAmount = bill * tipPercentage / 100;
// let total = bill + tipAmount;

// console.log(`The tip is $${tipAmount.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);


// Sum or Product of Consecutive Integers
// let rlSync = require("readline-sync");
// let num = rlSync.question("Please enter an integer greater than 0: ");
// let computation = rlSync.question(' Enter "s" to compute the sum, or "p" to compute the product. ');

// let result;
// if (computation === 's') {
//   result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
// } else {
//   result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
// }
// let computationOutput = (computation === "s") ? "sum" : "product";
// console.log(`The ${computationOutput} of the integers between 1 and ${num} is ${result}.`);


// Short Long Short
// function shortLongShort(str1, str2) {
//   if (str1.length > str2.length) {
//     return str2 + str1 + str2;
//   } else if (str1.length < str2.length) {
//     return str1 + str2 + str1;
//   } else {
//     return "The strings must be of different lengths!";
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"


// Leap Years (Part 1)
// function isLeapYear(year) {
//   if (year <= 0) {
//     return "Year must be greater than 0";
//   }

//   // Use Julian Calendar rules before 1752
//   if (year < 1752) {
//     return year % 4 === 0;
//   }

//   let isLeapYear = false;
//   if (year % 4 === 0) {
//     isLeapYear = true;
//     if (year % 100 === 0) {
//       isLeapYear = false;
//       if (year % 400 === 0) {
//         isLeapYear = true;
//       }
//     }
//   }
//   return isLeapYear;
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true


// Multiples of 3 and 5
// function multisum(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168


// UTF-16 String Value
// function utf16Value(str) {
//   let utf16Sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     utf16Sum += str.charCodeAt(i);
//   }
//   return utf16Sum;
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// console.log(utf16Value(OMEGA));                  // 937
// console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811