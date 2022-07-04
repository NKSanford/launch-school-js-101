// Question 1
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.replace(/important/ig, "urgent"));

// Question 2
// let numbers = [1, 2, 3, 4, 5];
// let numbersCopy = numbers.slice();
// numbersCopy.reverse();
// console.log(numbersCopy); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers);

// numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((a, b) => (b - a));
// console.log(sortedArray);
// console.log(numbers);

// Question 3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.indexOf(number1) !== -1);
// console.log(numbers.indexOf(number2) !== -1);

// Question 4
// let famousWords = "seven years ago...";
// let string = "Four score and " + famousWords;
// console.log(string);
// string = "Four score and ".concat(famousWords);
// console.log(string);

// Question 5
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);

// Question 6
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// console.log(flintstones);
// let newFlintstones = [].concat(...flintstones);
// console.log(newFlintstones);

// Question 7
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// Question 8
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// Question 9
// let title = "Flintstone Family Members";
// const MAX_LENGTH = 40;
// let paddingLength = Math.floor((40 - title.length) / 2);
// let newTitle = " ".repeat(paddingLength) + title;
// console.log(newTitle);

// Question 10
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// console.log(statement1.split("").filter(char => char === 't').length);
// console.log(statement2.split("").filter(char => char === 't').length);
