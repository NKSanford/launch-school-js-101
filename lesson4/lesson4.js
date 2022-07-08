// Select Fruit in Produce
// function selectFruit(object) {
//   let newObject = {};
//   for (let property in object) {
//     if (object[property] === "Fruit") {
//       newObject[property] = "Fruit";
//     }
//   }
//   return newObject;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }


// Double Numbers
// function doubleNumbers(arr) {
//   // Mutates the parameter array
//   for (let index = 0; index < arr.length; index += 1) {
//     arr[index] *= 2;
//   }
//   return arr;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]


// Double Numbers at Odd Indices
// function doubleOddIndices(arr) {
//   return arr.map((element, index) => (index % 2 === 1) ? element * 2 : element);
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// // note mutated
// console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]


// Multiply
// function multiply(arr, value) {
//   let newArr = [];
//   arr.forEach(element => newArr.push(element * value));
//   return newArr;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]


// Practice Problem 8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let keys = Object.keys(flintstones);
// let obj = {};
// for (let index = 0; index < flintstones.length; index += 1) {
//   obj[flintstones[index]] = keys[index];
// }
// console.log(obj);


// Practice Problem 9
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };
// let ageSum = 0;
// Object.values(ages).forEach(age => ageSum += age);
// console.log(ageSum);


// Practice Problem 10
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };
// let minAge = Object.values(ages).reduce((currentMin, element) => Math.min(currentMin, element), Number.MAX_SAFE_INTEGER);
// console.log(minAge);


// Practice Problem 11
let statement = "The Flintstones Rock";
let charCounts = {};
statement.split("").forEach(char => {
  if (char != " ") {
    if (Object.keys(charCounts).includes(char)) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
  }
});
console.log(charCounts);