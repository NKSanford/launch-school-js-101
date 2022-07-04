// ddaaiillyy ddoouubbllee
// function crunch(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (result.length > 0) {
//       // If the next character in string is not the same as the last character added to result, add this char
//       if (string.charAt(i) !== result.charAt(result.length - 1)) {
//         result += string.charAt(i);
//       }
//     } else {
//       result += string.charAt(i);
//     }
//   }
//   return result;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""


// Bannerizer
// function createLinePattern(numCharsToPrint, middleChar, endChar) {
//   let line = "";

//   line += endChar;
//   for (let i = 0; i < numCharsToPrint; i++) {
//     line += middleChar;
//   }
//   line += endChar;

//   return line;
// }

// function logInBox(text, maxLength=Number.MAX_VALUE) {
//   let numChars;
//   let linesNeeded = 1;
//   if (text.length < maxLength) {
//     numChars = text.length + 2;
//   } else {
//     numChars = maxLength + 2;
//     linesNeeded = Math.ceil(text.length / maxLength);
//   }
  
//   console.log(createLinePattern(numChars, "-", "+"));

//   console.log(createLinePattern(numChars, " ", "|"));

//   let startIndex = 0;
//   let endIndex;
//   if (text.length < maxLength) {
//     endIndex = text.length;
//   } else {
//     endIndex = maxLength;
//   }
//   for (let i = 0; i < linesNeeded; i++) {
//     let textLine;
//     if (i < linesNeeded - 1) {
//       textLine = text.substring(startIndex, endIndex);
//     } else {
//       let remainingChars = numChars - 2 - text.substring(startIndex).length;
//       textLine = text.substring(startIndex) + " ".repeat(remainingChars);
//     }
//     console.log(`| ${textLine} |`);
//     startIndex = endIndex;
//     endIndex += maxLength;
//   }
  
//   console.log(createLinePattern(numChars, " ", "|"));

//   console.log(createLinePattern(numChars, "-", "+"));
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('To boldly go where no one has gone before.', 10);
// logInBox('To boldly go where no one has gone before.', 80);
// logInBox('Test banner phrase!!!', 5);
// logInBox('');


// Stringy Strings
// function stringy(numChars) {
//   let binaryString = "";

//   for (let i = 1; i <= numChars; i++) {
//     if (i % 2 === 1) {
//       binaryString += "1";
//     } else {
//       binaryString += "0";
//     }
//   }

//   return binaryString;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"


// Fibonacci Number Location By Length
// function findFibonacciIndexByLength(numDigits) {
//   let num1 = 1n;
//   let num2 = 1n;
//   let index = 2n;
//   while (true) {
//     let temp = num1 + num2;
//     num1 = num2;
//     num2 = temp;
//     index += 1n;
//     if (BigInt(num2.toString().length) === numDigits) {
//       break;
//     }
//   }
//   return index;
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);


// Right Triangles
// function addCharsToString(string, numChars, charToAdd) {
//   // for (let i = 0; i < numChars; i++) {
//   //   string += charToAdd;
//   // }
//   // return string;

//   // Alternative implementation
//   return string + charToAdd.repeat(numChars);
// }

// function triangle(height) {
//   for (let i = 1; i <= height; i++) {
//     let line = "";
//     line = addCharsToString(line, height - i, " ");
//     line = addCharsToString(line, i, "*");
//     console.log(line);
//   }
// }

// triangle(5);
// triangle(9);


// Madlibs
// const readline = require("readline-sync");
// const WORD_TYPES = ["noun", "verb", "adjective", "adverb"];

// function getWord(wordType) {
//   return readline.question(`Enter a ${wordType}: `);
// }

// let userNoun = getWord(WORD_TYPES[0]);
// let userVerb = getWord(WORD_TYPES[1]);
// let userAdjective = getWord(WORD_TYPES[2]);
// let userAdverb = getWord(WORD_TYPES[3]);

// console.log(`Do you ${userVerb} your ${userAdjective} ${userNoun} ${userAdverb}? That's hilarious!`);
// console.log(`The ${userAdjective} ${userNoun} ${userVerb}s ${userAdverb} over the lazy ${userNoun}.`);
// console.log(`The ${userNoun} ${userAdverb} ${userVerb}s up ${userAdjective} Joe's turtle.`);


// Double Doubles
// function twice(num) {
//   let numString = num.toString();
//   if (numString.length % 2 !== 0) {
//     // Cannot be a double number if it has an odd number of digits
//     return num * 2;
//   }
//   let leftString = numString.substring(0, numString.length / 2);
//   let rightString = numString.substring(numString.length / 2);
//   if (leftString === rightString) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676


// Grade Book
// function getGrade(score1, score2, score3) {
//   let average = (score1 + score2 + score3) / 3;
//   let grade;
//   if (average >= 90) {
//     grade = "A";
//   } else if (average >= 80) {
//     grade = "B";
//   } else if (average >= 70) {
//     grade = "C";
//   } else if (average >= 60) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   return grade;
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"


// Clean up the words
// function cleanUp(text) {
//   let tempString = "";
//   // Replace all non-numeric characters with spaces
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].toUpperCase() !== text[i].toLowerCase()) {
//       tempString += text[i];
//     } else {
//       tempString += " ";
//     }
//   }

//   let result = "";
//   // Get rid of duplicate spaces
//   for (let i = 0; i < tempString.length; i++) {
//     if (i > 0) {
//       if (!((tempString[i] === " ") && (result[result.length - 1] === " "))) {
//         result += tempString[i];
//       }
//     } else {
//       result += tempString[i];
//     }
//   }
//   return result;
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
// console.log(cleanUp(" no extra spaces "));
// console.log(cleanUp(" !4324df34gfs "));


// What Century is That?
// function century(year) {
//   let century = Math.ceil(year / 100);
//   let result = century.toString();
//   let centuryLastDigit = century % 10;
//   // Special case for 11th, 12th, 13th
//   if (century >= 11 && century <= 13) {
//     return result + "th";
//   }
//   switch (centuryLastDigit) {
//     case 1:
//       result += "st";
//       break;
//     case 2:
//       result += "nd";
//       break;
//     case 3:
//       result += "rd";
//       break;
//     default:
//       result += "th";
//       break;
//   }
//   return result;
// }

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"