// Sorting by Length
// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a, b) => a.length - b.length);
// console.log(words);


// Sorting with Nested Arrays
// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores.sort((a, b) => {
//   let aSum = a.reduce((sum, currVal) => sum + currVal);
//   let bSum = b.reduce((sum, currVal) => sum + currVal);
//   return aSum - bSum;
// });
// console.log(scores);


// Practice Problems

// 1 - Sorting By Descending Numeric Value
// let arr = ['10', '11', '9', '7', '8'];
// let arrNum = arr.map(elem => Number(elem));
// arrNum.sort((a, b) => b - a);
// let arrDescending = arrNum.map(elem => String(elem));
// console.log(arrDescending);


// 2 
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// books.sort((a, b) => Number(a.published) - Number(b.published));
// console.log(books);\


// 3
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1]["third"][0]);
// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1["b"][1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2["third"])[0]);


// 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4;
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4;


// 5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// let totalMaleAge = 0;
// let valuesArray = Object.values(munsters);
// valuesArray.forEach(person => {
//   if (person.gender === "male") {
//     totalMaleAge += person.age;
//   }
// });
// console.log(totalMaleAge);


// 6
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };
// for (let member in munsters) {
//   console.log(`${member} is a ${munsters[member]["age"]}-year-old ${munsters[member]["gender"]}.`);
// }


// 7
// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // arr => [2, [5, 8]]

// arr[0] += 2; // arr => [4, [5, 8]], a => 2
// arr[1][0] -= a; // arr => [4, [3, 8]]
// // a === 2
// // b === [3, 8]


// 8
// const VOWELS = ["a", "e", "i", "o", "u"];

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// let wordArrays = Object.values(obj);
// wordArrays.forEach(wordArray => {
//   wordArray.forEach(word => {
//     let letters = word.split("");
//     letters.forEach(letter => {
//       if (VOWELS.includes(letter.toLowerCase())) {
//         console.log(letter);
//       }
//     })
//   })
// })


// 9
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let sortedArr = arr.map(subArray => {
//   if (typeof subArray[0] === 'number') {
//     // Sort numerically
//     let subArrayCopy = [...subArray];
//     return subArrayCopy.sort((a, b) => a - b);
//   } else {
//     // Sort by Unicode point codes
//     let subArrayCopy = [...subArray];
//     return subArrayCopy.sort();
//   }
// });

// console.log(arr);
// console.log(sortedArr);


// 10
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let sortedArr = arr.map(subArray => {
//   if (typeof subArray[0] === 'number') {
//     // Sort numerically
//     let subArrayCopy = [...subArray];
//     return subArrayCopy.sort((a, b) => b - a);
//   } else {
//     // Sort by Unicode point codes
//     let subArrayCopy = [...subArray];
//     return subArrayCopy.sort((a, b) => {
//       if (a < b) {
//         return 1;
//       } else if (a === b) {
//         return 0;
//       } else {
//         return -1;
//       }
//     });
//   }
// });

// console.log(arr);
// console.log(sortedArr);


// 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = arr.map(obj => {
//   let newObj = {};
//   for (let property in obj) {
//     newObj[property] = obj[property] + 1;
//   };
//   return newObj;
// });

// console.log(arr);
// console.log(newArr);


// 12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let newArr = arr.map(subArr => {
//   return subArr.filter(elem => {
//     return elem % 3 === 0;
//   });
// });

// console.log(arr);
// console.log(newArr);


// 13
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// arr.sort((a, b) => {
//   let aOddSum = 0;
//   a.forEach(num => {
//     if (num % 2 === 1) {
//       aOddSum += num;
//     }
//   });

//   let bOddSum = 0;
//   b.forEach(num => {
//     if (num % 2 === 1) {
//       bOddSum += num;
//     }
//   });

//   if (aOddSum < bOddSum) {
//     return -1;
//   } else if (aOddSum > bOddSum) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(arr);


// 14
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let produceDescriptions = Object.values(obj);
// let resultArray = [];
// produceDescriptions.forEach(produce => {
//   if (produce["type"] === "fruit") {
//     let colorsArray = produce["colors"];
//     resultArray.push(colorsArray.map(color => color[0].toUpperCase() + color.slice(1)));
//     return;
//   } else {
//     resultArray.push(produce["size"].toUpperCase());
//     return;
//   }
// });
// console.log(resultArray);


// 15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// let evensArr = [];

// arr.forEach(obj => {
//   let allEvens = true;
//   for (let property in obj) {
//     let subArr = obj[property];
//     subArr.forEach(num => {
//       if (num % 2 === 1) {
//         allEvens = false;
//       }
//     });
//   }
//   if (allEvens) {
//     evensArr.push(obj);
//   }
// })

// console.log(evensArr);


// 16
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// // expected value of object
// // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
// let obj = {};
// arr.forEach(subArr => {
//   obj[subArr[0]] = subArr[1];
// });
// console.log(obj);


// 17
// const HEXADECIMAL = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
// const NUM_UUID_CHARS = 32;
// const DASH_LOCATIONS = [8, 12, 16, 20];

// function uuidGenerator() {
//   let uuidString = "";
//   for (let i = 1; i <= NUM_UUID_CHARS; i++) {
//     let char = HEXADECIMAL[Math.floor(Math.random() * HEXADECIMAL.length)];
//     uuidString += char;
//     if (DASH_LOCATIONS.includes(i)) {
//       uuidString += "-";
//     }
//   }
//   return uuidString;
// }

// console.log(uuidGenerator());
// console.log(uuidGenerator());
// console.log(uuidGenerator());

