// Question 1
// for (let i = 0; i < 10; i++) {
//   console.log(" ".repeat(i) + "The Flintstones Rock!");
// }

// Question 2
// let munstersDescription = "The Munsters are creepy and spooky.";
// let newString = "";
// const UPPER_CASE_A = 65;
// const UPPER_CASE_Z = 90;
// for (let i = 0; i < munstersDescription.length; i++) {
//   let currentChar = munstersDescription.charAt(i);
//   let charNum = currentChar.charCodeAt(0);
//   if (charNum >= UPPER_CASE_A && charNum <= UPPER_CASE_Z) {
//     newString += currentChar.toLowerCase();
//   } else {
//     newString += currentChar.toUpperCase();
//     // If the char is lower case, convert to uppercase, otherwise it will be unchanged
//   }
// }
// console.log(munstersDescription);
// console.log(newString);

// Hard Exercises: Question 4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  // False if there are not 4 sections in the IP address
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}


