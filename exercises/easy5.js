// Cute Angles
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const MAX_DEGREES = 360;

// function dms(angle) {
//   // Convert to be a positive angle less than 360
//   while (angle < 0) {
//     angle += MAX_DEGREES;
//   }
//   angle = angle % MAX_DEGREES;
//   let degrees = Number.parseInt(angle);
//   let decimal = angle - degrees;

//   let minutes = Math.floor(decimal * MINUTES_PER_DEGREE);
//   let minutesString = minutes >= 10 ? minutes.toString() : "0" + minutes;

//   let remainder = decimal - minutes / MINUTES_PER_DEGREE;
//   let seconds = Math.floor(remainder * SECONDS_PER_MINUTE * MINUTES_PER_DEGREE);
//   let secondsString = seconds >= 10 ? seconds.toString() : "0" + seconds;

//   let result = degrees + "˚" + minutesString + "'" + secondsString + '"';
//   return result;
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"
// console.log(dms(-1));   // 359°00'00"
// console.log(dms(400));  // 40°00'00"
// console.log(dms(-40));  // 320°00'00"
// console.log(dms(-420)); // 300°00'00"


// Combining Arrays 
// function union(arr1, arr2) {
//   let newArr = arr1.slice();
//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       newArr.push(arr2[i]);
//     }
//   }
//   return newArr;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


// Halvsies
// function halvsies(arr) {
//   let arrFirstHalf = [];
//   let arrSecondHalf = [];

//   for (let i = 0; i < arr.length / 2; i++) {
//     arrFirstHalf.push(arr[i]);
//   }
//   for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
//     arrSecondHalf.push(arr[i]);
//   }

//   return [arrFirstHalf, arrSecondHalf];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]


// Find the Duplicate
// function findDup(arr) {
//   let seen = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       return arr[i];
//     } else {
//       seen[arr[i]] = true;
//     }
//   }
//   return undefined;
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73


// Combine Two Lists
// function interleave(arr1, arr2) {
//   // let newArr = [];
//   // for (let i = 0; i < arr1.length; i++) {
//   //   newArr.push(arr1[i]);
//   //   newArr.push(arr2[i]);
//   // }
//   // return newArr;

//   // Using forEach
//   let newArr = [];
//   arr1.forEach((element, index) => newArr.push(element, arr2[index]));
//   return newArr;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// Multiplicative Average
// function multiplicativeAverage(arr) {
//   // Assume that there is at least one element in the parameter array
//   let multiplicativeTotal = 1;
//   arr.forEach(element => multiplicativeTotal *= element);
//   let average = multiplicativeTotal / arr.length;
//   // Note that toFixed() returns a string
//   return average.toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


// Multiply Lists
// function multiplyList(arr1, arr2) {
//   return arr1.map((element, index) => element * arr2[index]);
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]


// List of Digits
// function digitList(num) {
//   let numStringArray = String(num).split("");
//   return numStringArray.map((element) => Number(element));
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]


// How Many?
// function countOccurrences(arr) {
//   let elementCounts = {};
//   const addElement = element => {
//     if (elementCounts.hasOwnProperty(element)) {
//       elementCounts[element] += 1;
//     } else {
//       elementCounts[element] = 1;
//     }
//   }
//   arr.forEach(addElement);
  
//   for (const property in elementCounts) {
//     console.log(`${property} => ${elementCounts[property]}`);
//   }
// }

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2


// Array Average
// function average(arr) {
//   // Reduce solution
//   // let initialSum = 0;
//   // let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialSum);
//   // let average = sum / arr.length;
//   // return Math.floor(average);

//   // forEach solution
//   let sum = 0;
//   arr.forEach(element => sum += element);
//   let average = sum / arr.length;
//   return Math.floor(average);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40


// After Midnight (Part 1)
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// function timeOfDay(minutes) {
//   // If we have negative minutes, convert to positive minutes
//   while (minutes < 0) {
//     minutes += MINUTES_PER_DAY;
//   }
//   // Make sure that minutes are capped 
//   minutes = minutes % MINUTES_PER_DAY;

//   let hours = Math.floor(minutes / MINUTES_PER_HOUR);
//   let remainingMinutes = minutes % MINUTES_PER_HOUR;

//   // Add a leading zero if the hours or minutes are only one digit
//   let hoursString = hours >= 10 ? String(hours) : "0" + hours;
//   let minutesString = remainingMinutes >= 10 ? String(remainingMinutes) : "0" + remainingMinutes;

//   return `${hoursString}:${minutesString}`;
// }

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));


// After Midnight (Part 2)
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function getHoursAndMinutes(time) {
  let timeArray = time.split(":");
  return timeArray.map(element => Number(element));
}

function beforeMidnight(time) {
  let timeArray = getHoursAndMinutes(time);
  let hours = timeArray[0];
  let minutes = timeArray[1];

  let hoursBeforeMidnight = HOURS_PER_DAY - hours;
  // Subtract by minutes since we have overshot with hoursBeforeMidnight
  return (hoursBeforeMidnight * MINUTES_PER_HOUR - minutes) % MINUTES_PER_DAY;
}

function afterMidnight(time) {
  let timeArray = getHoursAndMinutes(time);
  let hours = timeArray[0];
  let minutes = timeArray[1];
  // Mod by MINUTES_PER_DAY to cover the edge case of "24:00" being the input argument
  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);