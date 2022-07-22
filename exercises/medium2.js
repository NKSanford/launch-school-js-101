// Lettercase Percentage Ratio
// Input: any string with at least one character (no empty strings)
// Output: an object containing the percentage of chars that are lowercase, 
// the percentage of chars that are uppercase,
// and the percentage of chars that are neither
// Rules: include all chars in the total count, including whitespace
// Round the percentages to the hundreths place

// Algorithm
// 1. Convert the string to a string array of chars
// 2. For each char in the array, determine if it is uppercase, lowercase, or neither
// 2a. Do so by converting to upper case and lower case and checking for strict equality
// 3. Increment the count of uppercase/lowercase/neither as necessary
// 4. After looping, divide the counts by the length of the array and add to the object
// 5. Return the object

// function letterPercentages(text) {
//   let textArray = text.split("");
//   let totalLength = textArray.length;

//   let uppercaseCount = 0;
//   let lowercaseCount = 0;
//   let neitherCount = 0;
//   textArray.forEach(char => {
//     if (char === char.toUpperCase() && char === char.toLowerCase()) {
//       neitherCount++;
//     } else if (char === char.toUpperCase()) {
//       uppercaseCount++;
//     } else if (char === char.toLowerCase()) {
//       lowercaseCount++;
//     }
//   });
//   let obj = {"lowercase": String((lowercaseCount / totalLength * 100).toFixed(2)),
//   "uppercase": String((uppercaseCount / totalLength * 100).toFixed(2)),
//   "neither": String((neitherCount / totalLength * 100).toFixed(2)) };
//   return obj;
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// Triangle Sides
// Input: 3 numbers representing the side lengths of a triangle
// Output: the classification of the triangle, or invalid if it does not form a valid triangle
// Rules: a valid triangle must have the sum of the two shortest sides being greater than the length 
// of the longest side
// Every side must have a positive length

// Algorithm
// 1. Determine if the triangle is valid, if not, return "invalid"
// 2. If all three sides are equal, return "equilateral"
// 3. If two sides are equal, return "isosceles"
// 4. If no sides are equal, return "scalene"

// function isValidTriangle(side1, side2, side3) {
//   if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//     return false;
//   }

//   if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
//     return false;
//   }

//   return true;
// }

// function triangle(side1, side2, side3) {
//   if (!isValidTriangle(side1, side2, side3)) {
//     return "invalid";
//   }

//   if (side1 === side2 && side1 === side3) {
//     return "equilateral";
//   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }
// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"


/* Tri-Angles
Input: 3 integers representing the angles of a triangle in degrees
Output: The classification of a triangle as right, acute, or obtuse, or invalid
Rules: A valid triangle must have a sum of its angles equal to 180 degrees
  Every angle must be greater than 0

Algorithm:
1. Determine if the triangle is valid, if not, return "invalid"
2. Determine if the triangle is a right triangle
3. Determine if the triangle is acute
4. Determine if the triangle is obtuse
*/

// const RIGHT_ANGLE = 90;
// const SUM_DEGREES = 180;

// function isValidTriangle(angle1, angle2, angle3) {
//   if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
//     return false;
//   }

//   if (angle1 + angle2 + angle3 !== SUM_DEGREES) {
//     return false;
//   }

//   return true;
// }

// function triangle(angle1, angle2, angle3) {
//   if (!isValidTriangle(angle1, angle2, angle3)) {
//     return "invalid";
//   }

//   if (angle1 === RIGHT_ANGLE || angle2 === RIGHT_ANGLE || angle3 === RIGHT_ANGLE) {
//     return "right";
//   }
  
//   let maxAngle = Math.max(angle1, angle2, angle3);
//   if (maxAngle > RIGHT_ANGLE) {
//     return "obtuse";
//   } else {
//     return "acute";
//   }
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


/* Unlucky Days
Input: A number representing a year
Output: A number representing the number of Friday the 13ths that year
Rules: The year will be greater than 1752
  Use the Gregorian calendar

Algorithm:
1. Use JS's Date object functionality
2. For each month, see if the 13th day of the month falls on a Friday
3. If so, increment the count (which starts at 0)
4. Return the count
*/

// const MONTHS_IN_YEAR = 12;
// const FRIDAY_INDEX = 5;

// function fridayThe13ths(year) {
//   let count = 0;
//   for (let month = 0; month < MONTHS_IN_YEAR; month += 1) {
//     if (new Date(year, month, 13).getDay() === FRIDAY_INDEX) {
//       count += 1;
//     }
//   }
  
//   return count;
// }

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2


/* Next Featured Number Higher Than a Given Value
Input: A number that is a positive integer
Output: The smallest featured number that is greater than the input integer
Rules: A featured number is an odd number that is a multiple of 7, with all digits occurring only once

Algorithm:
1. If the number is equal to or greater than the largest possible featured number, return an error message
2. Calculate the next multiple of 7 that is greater than the input value
3. If this number is odd, check that each digit only occurs once.
4. If not, try again with the next multiple of 7 (increment the factor that 7 is multiplied with)
*/

// const MAX_FEATURED_NUMBER = 9876543201;

// function allDigitsUnique(num) {
//   let digitCounts = {};
//   let digitArr = String(num).split("");

//   for (let index = 0; index < digitArr.length; index += 1) {
//     let currentDigit = digitArr[index];
//     digitCounts[currentDigit] = digitCounts[currentDigit] ? digitCounts[currentDigit] + 1 : 1;
//   }
//   return Object.values(digitCounts).every(count => count === 1);
// }

// function featured(min) {
//   if (min >= MAX_FEATURED_NUMBER) {
//     return "There is no possible number that fulfills those requirements.";
//   }

//   let multiple = Math.ceil((min + 1)/ 7);
//   while (true) {
//     let possibleFeatNum = multiple * 7;

//     if (possibleFeatNum % 2 === 1 && allDigitsUnique(possibleFeatNum)) {
//       return possibleFeatNum;
//     }

//     multiple++;
//   }
// }

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


/* Sum Square - Square Sum
Input: a number representing the first count positive integers (starting with 1)
Output: the difference between the square of the sum of the integers and the sum of the squares of the integers
Assume that count will be a positive integer
*/

// function squareOfSum(count) {
//   let sum = 0;
//   for (let index = 1; index <= count; index += 1) {
//     sum += index;
//   }
//   return sum ** 2;
// }

// function sumOfSquares(count) {
//   let sumOfSquares = 0;
//   for (let index = 1; index <= count; index += 1) {
//     sumOfSquares += index ** 2;
//   }
//   return sumOfSquares;
// }

// function sumSquareDifference(count) {
//   return squareOfSum(count) - sumOfSquares(count);
// }

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150


/* Bubble Sort
Input: an array to be sorted
Output: none, however the input array will have been mutated to contain the elements in sorted ascending order
Rules: the array will contain at least two elements

Algorithm:
1. Starting at index 0, compare the current element with the next element.
2. If the current element is greater than the next element, swap the two.
3. Increment the index
4. Repeat until reaching the end of the array
5. Go to step 1 if any swaps were made on the last pass through the array
*/

// function bubbleSort(arr) {
//   let swapsMade = false;

//   do {
//     swapsMade = false;
//     for (let index = 0; index < arr.length -1; index += 1) {
//       let currentElement = arr[index];
//       let nextElement = arr[index + 1];
//       if (currentElement > nextElement) {
//         // Swap the elements
//         swapsMade = true;
//         let temp = nextElement;
//         arr[index + 1] = currentElement;
//         arr[index] = temp;
//       }
//     }
//   } while (swapsMade);

// }

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


/* Longest Sentence
Input: a string
Output: the longest sentence in the string as well as the number of words in that sentence
Rules: a sentence ends with 
*/