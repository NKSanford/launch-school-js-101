// Rotation (Part 1)
// Rotate an array by moving the first element to the end of the array, creating a new array
// without mutating the original
// Edge cases: input is not an array, return undefined
// input is an empty array, return a new empty array
// Algorithm
// 0. Verify input, return for non-array or empty array
// 1. Create new array as copy of original
// 2. Remove first element of copy and place at end of copy
// 3. Return copy array

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) {
//     return undefined;
//   }
//   if (arr.length == 0) {
//     return [];
//   }

//   let newArr = arr.slice();
//   newArr.push(newArr.shift());
//   return newArr;
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]


// Rotation (Part 2)
// Input: a number to be rotated, a count of digits to be rotated in the number
// Output: the modified number
// Edge cases: count is larger than the number of digits in the number
// number is not a number
// count is a non-positive number
// Rules: for the number of digits 

// Convert the number to an array of strings
// Algorithmn
// 1. If number or count is invalid, return undefined
// 2. Convert number to a string array
// 3. Get the char at index length - count
// 4. Shift over each digit to occupy the index where the digit was removed
// 5. Add the rotated digit to the end of the array
// 5. Convert the string array to a number
// 6. Return the new number

// function rotateRightmostDigits(num, count) {
//   if (isNaN(num) || count < 1) {
//     return undefined;
//   }

//   let numArr = String(num).split("");
//   let digitToRotate = numArr[numArr.length - count];
//   for (let index = numArr.length - count; index < numArr.length - 1; index += 1) {
//     numArr[index] = numArr[index + 1];
//   }
//   numArr[numArr.length - 1] = digitToRotate;

//   return Number(numArr.join(""));
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917


// Rotation (Part 3)

// Input: a number
// Output: a new number that has been maximally rotated

// Convert number to a string array

// Algorithmn:
// 1. Rotate one digit to the left
// 2. Keep the first digit fixed, and rotate right all other digits
// 3. Repeat, while adding one to the number of fixed digits until the last two digits have rotated with each other

// function rotateRightmostDigits(num, count) {
//   if (isNaN(num) || count < 1) {
//     return undefined;
//   }

//   let numArr = String(num).split("");
//   let digitToRotate = numArr[numArr.length - count];
//   for (let index = numArr.length - count; index < numArr.length - 1; index += 1) {
//     numArr[index] = numArr[index + 1];
//   }
//   numArr[numArr.length - 1] = digitToRotate;

//   return Number(numArr.join(""));
// }

// function maxRotation(num) {
//   if (isNaN(num)) {
//     return undefined;
//   }

//   // Convert to string array first
//   let numArr = String(num).split("");
//   // Perform left rotation
//   numArr.push(numArr.shift());

//   // Peform series of right rotations
//   let rotatedNum = Number(numArr.join(""));
//   for (let count = numArr.length - 1; count >= 2; count -= 1) {
//     rotatedNum = rotateRightmostDigits(rotatedNum, count);
//   }

//   return rotatedNum;
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


// Stack Machine Interpretation
// Input: a string containing valid commands for the stack and register programming language
// Output: the register value, if the print command is used

// Need to implement the stack and register itself
// Implement the valid functions

// Only use push and pop operations with the stack

// function minilang(commandStr) {
//   let stack = [];
//   let register = 0;
//   // Split the command into discrete words/commands
//   let commandArr = commandStr.split(" ");

//   commandArr.forEach(word => {
//     if (!isNaN(Number(word))) {
//       register = Number(word);
//     } else {
//       switch (word) {
//         case "PUSH":
//           stack.push(register);
//           break;
//         case "ADD":
//           register += stack.pop();
//           break;
//         case "SUB":
//           register -= stack.pop();
//           break;
//         case "MULT":
//           register *= stack.pop();
//           break;
//         case "DIV":
//           register = Math.floor(register / stack.pop());
//           break;
//         case "REMAINDER":
//           register = Math.floor(register % stack.pop());
//           break;
//         case "POP":
//           register = stack.pop();
//           break;
//         case "PRINT":
//           console.log(register);
//           break;
//         default:
//           // This return goes to forEach and is discarded, does not propagate
//           return "Invalid token"
//       }
//     }
//   });
//   return undefined;
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// console.log(minilang('Bad input'));


// Word to Digit
// Input: a string that is a sentence containing words (marked by spaces on each side)
// Output: a new string with each "number word" converted to its corresponding digit
// Should it be case sensitive? Assume no.

// Convert string to array of strings where each word is an element in the array
// Use an array of number words to find occurences

// Algorithm
// 1. Split the string into words in an array
// 2. Iterate through each word in the array
// 3. If the word is a "number word", replace it with its corresponding digit
// 4. Join the array into a string and return it

// const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// function wordToDigit(text) {
//   let textArr = text.split(" ");

//   for (let index = 0; index < textArr.length; index++) {
//     let currentWord = textArr[index].toLowerCase();
//     if (NUMBER_WORDS.includes(currentWord)) {
//       textArr[index] = NUMBER_WORDS.indexOf(currentWord);
//     }
//   }

//   return textArr.join(" ");
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."


// Fibonacci Numbers (Recursion)
// Input: A number representing the nth number in the Fibonacci sequence
// Output: The nth Fibonacci number

// function fibonacci(num) {
//   if (num === 1 || num === 2) {
//     return 1;
//   }

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


// Fibonacci Numbers (Procedural)

// function fibonacci(num) {
//   if (isNaN(num) || num < 1) {
//     return "Invalid argument";
//   }

//   let secondLastResult = 0;
//   let lastResult = 0;
//   let currentResult = 0;

//   for (let index = 1; index <= num; index += 1) {
//     if (index <= 2) {
//       currentResult = 1;
//     } else {
//       currentResult = secondLastResult + lastResult;
//     }

//     secondLastResult = lastResult;
//     lastResult = currentResult;
//   }

//   return currentResult;
// }

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050


// Fibonacci Numbers (Memoization)
// let lookup = {};

// function fibonacci(num) {
//   if (num === 1 || num === 2) {
//     return 1;
//   }

//   if (lookup.hasOwnProperty(num)) {
//     return lookup[num];
//   }

//   lookup[num] = fibonacci(num - 1) + fibonacci(num - 2);
//   return lookup[num];
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765