// How Old is Teddy?
// function randomAgeBetweenMaxAndMin(min, max) {
//   let age = Math.floor(Math.random() * (max - min + 1)) + min;
//   return age;
// }
// let teddyAge = randomAgeBetweenMaxAndMin(20, 120);
// console.log(`Teddy is ${teddyAge} years old!`);


// Searching 101
// const readline = require("readline-sync");
// const ORDINAL = ["1st", "2nd", "3rd", "4th", "5th"];

// let numArray = [];
// for (let i = 0; i < ORDINAL.length; i++) {
//   numArray.push(readline.question(`Enter the ${ORDINAL[i]} number: `));
// }
// let targetNum = readline.question("Enter the last number: ");

// if (numArray.includes(targetNum)) {
//   console.log(`The number ${targetNum} appears in ${numArray}.`);
// } else {
//   console.log(`The number ${targetNum} does not appear in ${numArray}.`);
// }


// When Will I Retire?
// const readline = require("readline-sync");
// const CURRENT_YEAR = new Date().getFullYear();

// let currentAge = Number(readline.question("What is your age? "));
// let retirementAge = Number(readline.question("At what age would you like to retire? "));

// let remainingWorkingYears = retirementAge - currentAge;
// let retirementYear = CURRENT_YEAR + (remainingWorkingYears);

// console.log();
// console.log(`It's ${CURRENT_YEAR}. You will retire in ${retirementYear}.`);
// console.log(`You have only ${remainingWorkingYears} years of work to go!`);


// Palindromic Strings (Part 1)
// function isPalindrome(text) {
//   let charArray = [];
//   for (let i = 0; i < Math.floor(text.length / 2); i++) {
//     charArray.push(text.charAt(i));
//   }
//   for (let i = Math.ceil(text.length / 2); i < text.length; i++) {
//     if (text.charAt(i) !== charArray.pop()) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true


// Palindromic Strings (Part 2)
// function isPalindrome(text) {
//   let charArray = [];
//   for (let i = 0; i < Math.floor(text.length / 2); i++) {
//     charArray.push(text.charAt(i));
//   }
//   for (let i = Math.ceil(text.length / 2); i < text.length; i++) {
//     if (text.charAt(i) !== charArray.pop()) {
//       return false;
//     }
//   }
//   return true;
// }

// function isRealPalindrome(text) {
//   const determineAlphanumeric = function (char) {
//     let charCode = char.charCodeAt();
//     if ((charCode >= 65 && charCode <= 90) ||
//        (charCode >= 97 && charCode <= 122) ||
//        (charCode >= 48 && charCode <= 57)) {
//         return true;
//     }
//     else {
//       return false;
//     }
//   }
//   let textWithoutWhitespaceLowercase = text.split("").filter(determineAlphanumeric).join("").toLowerCase();
//   return isPalindrome(textWithoutWhitespaceLowercase);
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false


// Palindromic Numbers
// function isPalindrome(text) {
//   let charArray = [];
//   for (let i = 0; i < Math.floor(text.length / 2); i++) {
//     charArray.push(text.charAt(i));
//   }
//   for (let i = Math.ceil(text.length / 2); i < text.length; i++) {
//     if (text.charAt(i) !== charArray.pop()) {
//       return false;
//     }
//   }
//   return true;
// }

// function isPalindromicNumber(num) {
//   return isPalindrome(String(num));
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true


// Running Totals
// function runningTotal(arr) {
//   // let runningTotalArr = [];
//   // let runningTotal = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //   runningTotal += arr[i];
//   //   runningTotalArr.push(runningTotal);
//   // }
//   // return runningTotalArr;

//   // Using Array.prototype.map()
//   let runningTotal = 0;
//   return arr.map(num => (runningTotal += num));
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []


// Letter Counter (Part 1)
// function wordSizes(text) {
//   // Check for empty String
//   if (text.length === 0) {
//     return {};
//   }
//   let wordArray = text.split(" ");
//   let wordLetterCount = {};
//   for (let i = 0; i < wordArray.length; i++) {
//     let wordLength = wordArray[i].length;
//     if (wordLetterCount.hasOwnProperty(wordLength)) {
//       wordLetterCount[wordLength]++;
//     } else {
//       // We need to add the property to the object
//       wordLetterCount[wordLength] = 1;
//     }
//   }
//   return wordLetterCount;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// Letter Counter (Part 2)
// function letterCount(word) {
//   let letterCount = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word.charAt(i).toLowerCase() !== word.charAt(i).toUpperCase()) {
//       letterCount++;
//     }
//   }
//   return letterCount;
// }

// function wordSizes(text) {
//   // Check for empty String
//   if (text.length === 0) {
//     return {};
//   }
//   let wordArray = text.split(" ");
//   let wordLetterCount = {};
//   for (let i = 0; i < wordArray.length; i++) {
//     let wordLength = letterCount(wordArray[i]);
//     if (wordLetterCount.hasOwnProperty(wordLength)) {
//       wordLetterCount[wordLength]++;
//     } else {
//       // We need to add the property to the object
//       wordLetterCount[wordLength] = 1;
//     }
//   }
//   return wordLetterCount;
// }

// console.log(wordSizes('Four score and seven.'));                       
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
// console.log(wordSizes("What's up doc?"));                              
// console.log(wordSizes(''));


// Letter Swap
function swap(text) {
  // let wordArray = text.split(" ");
  // let swappedWordArray = [];
  // for (let i = 0; i < wordArray.length; i++) {
  //   let currentWord = wordArray[i];
  //   let newWord;
  //   if (currentWord.length > 1) {
  //     newWord = currentWord.charAt(currentWord.length - 1) + currentWord.substring(1, currentWord.length - 1) + currentWord.charAt(0);
  //   } else {
  //     newWord = currentWord;
  //   }
  //   swappedWordArray.push(newWord);
  // }
  // return swappedWordArray.join(" ");

  // Using map()
  let wordArray = text.split(" ");
  const swapLetters = function(word) {
    if (word.length === 1) {
      return word;
    } else {
      return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
    }
  }
  let swappedWordArray = wordArray.map(swapLetters);
  return swappedWordArray.join(" ");
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"