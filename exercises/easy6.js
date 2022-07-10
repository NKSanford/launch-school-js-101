// Double Char (Part 1)
// function repeater(text) {
//   let textArray = text.split("");
//   let repeatedArray = [];
//   textArray.forEach(char => {
//     repeatedArray.push(char, char);
//   });
//   return repeatedArray.join("");
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""


// Double Char (Part 2)
// const UPPER_CASE_VOWELS = ['A', 'E', 'I', 'O', 'U'];

// function isConsonant(char) {
//   char = char.toUpperCase();
//   return (char >= 'A' && char <= 'Z') && !UPPER_CASE_VOWELS.includes(char);
// }

// function doubleConsonants(text) {
//   let textArray = text.split("");
//   let repeatedArray = [];
//   textArray.forEach(char => {
//     if (isConsonant(char)) {
//       repeatedArray.push(char, char);
//     } else {
//       repeatedArray.push(char);
//     }
//   });
//   return repeatedArray.join("");
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""


// Reverse Number
// function reverseNumber(num) {
//   return Number(num.toString().split("").reverse().join(""));
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1


// Get The Middle Character
// function centerOf(text) {
//   let result;
//   if (text.length % 2 === 1) {
//     result = text.charAt(Math.floor(text.length / 2));
//   } else {
//     result = text.substring((text.length / 2) - 1, (text.length / 2) + 1);
//   }
//   return result;
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"


// Always Return Negative
// function negative(num) {
//   return num >= 0 ? -1 * num : num;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0


// Counting Up
// function sequence(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1])


// Name Swapping
// function swapName(name) {
//   let namesArray = name.split(" ");
//   // Switch the first and last name
//   let temp = namesArray[0];
//   namesArray[0] = namesArray[namesArray.length - 1];
//   namesArray[namesArray.length - 1] = temp;
//   // Switch the first name and first middle name
//   temp = namesArray[1];
//   namesArray[1] = namesArray[namesArray.length - 1];
//   namesArray[namesArray.length - 1] = temp;
//   // Add a comma after the last name (0th index)
//   namesArray[0] = namesArray[0] + ",";
//   return namesArray.join(" ");
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
// console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"


// Sequence Count
// function sequence(count, startNum) {
//   let array = [];
//   for (let i = 1; i <= count; i++) {
//     array.push(i * startNum);
//   }
//   return array;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []


// Reverse It (Part 1)
// function reverseSentence(text) {
//   return text.split(" ").reverse().join(" ");
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// Reverse It (Part 2)
// function reverseWords(text) {
//   let textArray = text.split(" ");
//   return textArray.map(word => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   }).join(" ");
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


// Reversed Arrays
// function reverse(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let temp = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = temp;
//   }
//   return array;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true


// Matching Parentheses?
// function isBalanced(text) {
//   // Increment count for an open (, decrement for a closed )
//   // If the count is ever negative, or ends as non-zero, it is not balanced
//   let parenthesisCount = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === '(') {
//       parenthesisCount++;
//     } else if (text[i] === ')') {
//       parenthesisCount--;
//     }

//     if (parenthesisCount < 0) {
//       return false;
//     }
//   }
//   return parenthesisCount === 0;
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);
