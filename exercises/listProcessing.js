// Sum of Digits
// function sum(num) {
//   let digitArray = String(num).split("").map(digit => Number(digit));
//   return digitArray.reduce((sum, digit) => sum + digit);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45


// Alphabetical Numbers
// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                       'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(arr) {
//   let sortedArr = [...arr];
//   sortedArr.sort((a, b) => {
//     if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
//       return -1;
//     } else if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   return sortedArr;
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// Multiply All Pairs
// function multiplyAllPairs(arr1, arr2) {
//   let productArr = [];
//   arr1.forEach(num1 => {
//     arr2.forEach(num2 => {
//       productArr.push(num1 * num2);
//     });
//   });
//   return productArr.sort((a, b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]


// Leading Substrings
// function leadingSubstrings(text) {
//   // let substringsArray = [];
//   // for (let i = 1; i <= text.length; i++) {
//   //   substringsArray.push(text.slice(0, i));
//   // }
//   // return substringsArray;

//   let textArray = text.split("");
//   let substringsArray = textArray.map((char, index) => {
//     return textArray.slice(0, index + 1).join("");
//   });
//   return substringsArray;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// All Substrings
// function leadingSubstrings(text) {
//   // let substringsArray = [];
//   // for (let i = 1; i <= text.length; i++) {
//   //   substringsArray.push(text.slice(0, i));
//   // }
//   // return substringsArray;

//   let textArray = text.split("");
//   let substringsArray = textArray.map((char, index) => {
//     return textArray.slice(0, index + 1).join("");
//   });
//   return substringsArray;
// }

// function substrings(text) {
//   let resultArray = [];
//   for (let i = 0; i < text.length; i++) {
//     resultArray = resultArray.concat(leadingSubstrings(text.slice(i, text.length)));
//   }
//   return resultArray;
// }

// console.log(substrings('abcde'));

// // returns
// // [ "a", "ab", "abc", "abcd", "abcde",
// //   "b", "bc", "bcd", "bcde",
// //   "c", "cd", "cde",
// //   "d", "de",
// //   "e" ]


// Palindromic Substrings
// function leadingSubstrings(text) {
//   let substringsArray = [];
//   for (let i = 1; i <= text.length; i++) {
//     substringsArray.push(text.slice(0, i));
//   }
//   return substringsArray;

//   // let textArray = text.split("");
//   // let substringsArray = textArray.map((char, index) => {
//   //   return textArray.slice(0, index + 1).join("");
//   // });
//   // return substringsArray;
// }

// function substrings(text) {
//   let resultArray = [];
//   for (let i = 0; i < text.length; i++) {
//     resultArray = resultArray.concat(leadingSubstrings(text.slice(i, text.length)));
//   }
//   return resultArray;
// }

// function isPalindrome(substring) {
//   if (substring.length <= 1) {
//     return false;
//   }
//   let reversedSubstring = substring.split("").reverse().join("");
//   return substring === reversedSubstring;
// }

// function palindromes(text) {
//   let substringsArray = substrings(text);
//   let palindromes = substringsArray.filter(isPalindrome);
//   return palindromes;
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// Sum of Sums
// function leadingSum(subArr) {
//   return subArr.reduce((sum, value) => sum + value, 0);
// }

// function sumOfSums(arr) {
//   let totalSum = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     totalSum += leadingSum(arr.slice(0, i));
//   }
//   return totalSum;
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// Grocery List
// function buyFruit(arr) {
//   let result = [];
//   arr.forEach(subArr => {
//     for (let i = 0; i < subArr[1]; i++) {
//       result.push(subArr[0]);
//     }
//   });
//   return result;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]


// Inventory Item Transactions
// function transactionsFor(itemId, arr) {
//   return arr.filter(itemObj => itemObj["id"] === itemId);
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]


// Inventory Item Availability
function transactionsFor(itemId, arr) {
  return arr.filter(itemObj => itemObj["id"] === itemId);
}

function isItemAvailable(itemId, arr) {
  let itemTransactions = transactionsFor(itemId, arr);
  return itemTransactions.reduce((totalCount, transaction) => {
    if (transaction["movement"] === "in") {
      return totalCount + transaction["quantity"];
    } else {
      return totalCount - transaction.quantity;
    }
  }, 0) > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true