// Question 2
// function (string) {
//   return (string[string.length - 1] === '!');
//   // or
//   // return string.endsWith('!');
// }

// Question 3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// let names = Object.keys(ages);
// if (names.indexOf("Spot") !== -1) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // or...
// ages.hasOwnProperty("Spot");

// Question 4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// console.log(munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase());

// Question 6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges);

// Question 7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(str1.indexOf("Dino") !== -1);
// console.log(str2.indexOf("Dino") !== -1);

// Question 8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// Question 9
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy");


// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let indexToRemove = advice.indexOf("house");
console.log(advice.slice(0, indexToRemove));
