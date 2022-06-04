// Welcome Stranger
// function greetings(nameArray, jobObject) {
//   let name = nameArray.join(" ");
//   let titleOccupation = jobObject.title + " " + jobObject.occupation;
//   return "Hello, " + name + "! Nice to have a " + titleOccupation + " around.";
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );


// Greeting a user
// let rlSync = require("readline-sync");
// let userName = rlSync.question("What is your name? ");
// let lastCharacterInName = userName.charAt(userName.length - 1);
// if (lastCharacterInName === "!") {
//   userName = userName.substring(0, userName.length - 1).toUpperCase();
//   console.log(`HELLO ${userName}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${userName}.`);
// }


// Multiplying Two Numbers
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiply(5, 3) === 15);


// Squaring an Argument
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// const square = (num) => multiply(num, num);

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// // Only works for positive integer powers (1, 2, 3, ...)
// function power(num, power) {
//   let result = num;
//   for (let i = 1; i < power; i++) {
//     result = multiply(result, num);
//   }
//   return result;
// }

// console.log(power(3, 1));
// console.log(power(3, 2));
// console.log(power(3, 3));


// Arithmetic Integer
// let rlSync = require("readline-sync");

// console.log("Enter the first number:");
// let num1 = Number.parseInt(rlSync.prompt());

// console.log("Enter the first number:");
// let num2 = Number.parseInt(rlSync.prompt());

// console.log(`${num1} + ${num2} = ${num1 + num2}`);
// console.log(`${num1} - ${num2} = ${num1 - num2}`);
// console.log(`${num1} * ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
// console.log(`${num1} % ${num2} = ${num1 % num2}`);
// console.log(`${num1} ** ${num2} = ${num1 ** num2}`);


// The End Is Near But Not Here
// function penultimate(string) {
//   // Remove whitespace at the end that could cause issues with finding the last index before characters
//   let trimmedString = string.trim();
//   let lastSpaceIndex = trimmedString.lastIndexOf(" ");

//   for (let i = lastSpaceIndex - 1; i >= 0; i--) {
//     if (trimmedString[i] === " ") {
//       return trimmedString.substring(i + 1, lastSpaceIndex);
//     }
//   }
//   return trimmedString.substring(0, lastSpaceIndex);
// }

// console.log(penultimate("last word")); 
// console.log(penultimate("Launch School is great!")); 

// // Further Exploration: Retrieve middle word of a phrase/sentence
// function middleWord(string) {
//   // Handle non-string input
//   if (typeof string != 'string') {
//     return "Must provide a string!";
//   }

//   let wordsArray = string.split(" ");
//   if (wordsArray.length <= 1) {
//     return "Must contain more than one word!";
//   }

//   // Return both "middle" words if the length of the array is even
//   if (wordsArray.length % 2 === 0) {
//     let firstMiddleIndex = wordsArray.length / 2 - 1;
//     let middleWordsArray = [wordsArray[firstMiddleIndex], wordsArray[firstMiddleIndex + 1]];
//     return middleWordsArray.join(" ");
//   } else {
//     return wordsArray[Math.floor(wordsArray.length / 2)];
//   }
// }

// console.log(middleWord(5));
// console.log(middleWord(""));
// console.log(middleWord("Hello"));
// console.log(middleWord("Hey there, I think you are really cool!"));
// console.log(middleWord("I am the big cheese."));


// Exclusive Or
// function xor(bool1, bool2) {
//   if (bool1 && bool2) {
//     return false;
//   } else if (bool1 || bool2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);


// Odd Lists
// function oddities(array) {
//   let oddsArray = [];
//   for (let i = 0; i < array.length; i += 2) {
//     oddsArray.push(array[i]);
//   }
//   return oddsArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []


// Convert a String to a Number!
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   let arrayOfDigits = string.split("").map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value; 
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// function hexadecimalToInteger(hexString) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15,
//     a: 10,
//     b: 11,
//     c: 12,
//     d: 13,
//     e: 14, 
//     f: 15,
//   };

//   let arrayOfDigits = hexString.split("").map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (value * 16) + digit));
//   return value;
// }

// console.log(hexadecimalToInteger('4D9f'));


// Convert a String to a Signed Number!
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   let arrayOfDigits = string.split("").map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value; 
// }

// function stringToSignedInteger(string) {
//   let signedValue;
//   let firstChar = string.charAt(0);
//   if (firstChar === "+") {
//     signedValue = stringToInteger(string.substring(1));
//   } else if (firstChar === "-") {
//     signedValue = -1 * stringToInteger(string.substring(1));
//   } else {
//     signedValue = stringToInteger(string);
//   }
//   return signedValue;
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true


// Convert a Number to a String!
// function integerToString(value) {
//   let digits = [];
//   // Get each digit as its own element in the digits array (this will be reversed)
//   if (value === 0) {
//     return "0";
//   }
//   while (value > 0) {
//     digits.push(value % 10);
//     value = Math.floor(value / 10);
//   }
//   digits.reverse();
//   return digits.join("");
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"


// Convert a Signed Number to a String!
function integerToString(value) {
  let digits = [];
  // Get each digit as its own element in the digits array (this will be reversed)
  if (value === 0) {
    return "0";
  }
  while (value > 0) {
    digits.push(value % 10);
    value = Math.floor(value / 10);
  }
  digits.reverse();
  return digits.join("");
}

function signedIntegerToString(value) {
  console.log(Math.sign(value));
  switch (Math.sign(value)) {
    case 0:
      return integerToString(value);
    case -1:
      return "-" + integerToString(value * -1);
    case 1:
      return "+" + integerToString(value);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));